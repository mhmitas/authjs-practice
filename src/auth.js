import NextAuth, { CredentialsSignin } from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { User } from "./lib/models/userModel"
import { compare } from "bcryptjs"
import { connectDB } from "./lib/db"


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google,
        Credentials({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                // console.log(credentials)

                try {
                    const { email, password } = credentials

                    if (!email || !password) {
                        throw new Error("Please fill all fields")
                    }

                    await connectDB()

                    const user = await User.findOne({ email })

                    if (!user) {
                        throw new CredentialsSignin("User Not Found")
                    }

                    const matchPassword = await compare(password, user.password);

                    if (!matchPassword) {
                        throw new Error("Incorrect Password")
                    }
                    user.password = null
                    // console.log('||', user)
                    return user

                } catch (error) {
                    console.error("sign in error:", error);
                }
            }
        })
    ],
    callbacks: {
        jwt({ token, user, account }) {
            if (account && account.provider === 'credentials') {
                token.name = user.fullName;
                token.picture = user.image
            }
            if (user) {
                token.id = user.id
            }
            return token
        },
        session({ session, token }) {
            session.user.id = token.id
            return session
        },
        async signIn({ user, account, profile }) {
            if (account.provider === "google") {
                console.log(account.provider)
            }
            return true
        },
    },
    pages: {
        signIn: "/sign-in",
    }
})