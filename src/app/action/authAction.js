"use server"

import { signIn } from "@/auth"
import { connectDB } from "@/lib/db"
import { User } from "@/lib/models/userModel"
import { hash } from "bcryptjs"

export const register = async (formData) => {
    try {
        const fullName = formData.get("fullName")
        const email = formData.get("email")
        const password = formData.get("password")

        if (!fullName || !email || !password) {
            throw new Error("Please fill all fields")
        }

        await connectDB()

        // existing user
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            throw new Error(`User already exists. Please Sign In or try with different account.`)
        }
        const hashedPassword = await hash(password, 12)
        await User.create({ name: fullName, email, password: hashedPassword })
        console.log(`user created successfully`)

        // sign in user
        await signIn('credentials', { email, password })
    } catch (error) {
        console.error("Sign up error:", error);
        throw new Error(error?.message || "Something went wrong")
    }
}