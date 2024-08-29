"use server"

import { connectDB } from "@/lib/db"
import { User } from "@/lib/models/userModel"
import { redirect } from "next/navigation"
import { compare, hash } from "bcryptjs"
import { signIn } from "@/auth"

export const register = async (formData) => {
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
        throw new Error("User already exists")
    }
    const hashedPassword = await hash(password, 12)
    await User.create({ fullName, email, password: hashedPassword })
    console.log(`user created successfully`)
    signIn('credentials', { email, password })
    console.log('call sign in')
    // redirect('/sign-in')
}