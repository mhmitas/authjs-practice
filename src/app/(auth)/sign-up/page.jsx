import { register } from "@/app/action/authAction";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-sm p-8 rounded-lg shadow-md border">
                <h2 className="mb-6 text-2xl font-bold text-center">Register</h2>

                {/* Registration Form */}
                <form action={register} className="space-y-4">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium">
                            Full Name
                        </label>
                        <Input
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            className="mt-1"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="mt-1"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">
                            Password
                        </label>
                        <Input
                            type="text"
                            name="password"
                            placeholder="Enter your password"
                            className="mt-1"
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full">
                        Sign Up
                    </Button>
                </form>

                <p className="my-2">Don't have an account, Please <Link href="sign-in" className='text-blue-600'>Sign In</Link></p>

                {/* Google Sign In */}
                <form
                    action={async () => {
                        "use server";
                        await signIn("google", { redirectTo: "/" });
                    }}
                    className="mt-6"
                >
                    <Button variant="outline" size="lg" type="submit" className="flex items-center w-full">
                        <FcGoogle className="mr-2 text-2xl" />
                        Sign In with Google
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
