import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from "react-icons/fc";

const Page = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="w-full max-w-sm p-8 border rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center">Sign In</h2>

                {/* Email and Password Sign In Form */}
                <form
                    action={async (formData) => {
                        "use server"
                        await signIn("credentials", formData)
                    }}
                    className="space-y-4">
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
                        Sign In
                    </Button>
                </form>
                <p className='my-2'>Don't have an account, Please <Link href="sign-up" className='text-blue-600'>Sign Up</Link></p>
                {/* Google Sign In Form */}
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

export default Page;