import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FcGoogle } from "react-icons/fc";

const Page = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <form
                action={async () => {
                    "use server"
                    await signIn("google", { redirectTo: '/' })
                }}
            >
                <Button type="submit" size="lg"><FcGoogle className='text-2xl' /> Sign In with Google</Button>
            </form>
        </div>
    );
};

export default Page;