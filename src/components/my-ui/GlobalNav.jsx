import { auth, signOut } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const GlobalNav = async () => {
    const session = await auth()
    // console.log(session);


    return (
        <div className='fixed top-16 left-0 rounded-lg z-50text-secondary-foreground border px-3 py-2 flex gap-4 items-center bg-secondary'>
            {session?.user &&
                <div title={session.user.name}>
                    <Image className='w-10 rounded-full' src={session?.user?.image || "/default-avatar-new.jpg"} height={50} width={50} alt='user avatar' />
                </div>
            }
            <div><Link href="/">Home</Link></div>
            <div><Link href="/sign-in">Sign In</Link></div>
            <div><Link href="/sign-up">Sign Up</Link></div>
            <form
                action={async () => {
                    "use server"
                    await signOut()
                }}
            >
                <Button type="submit">Sign Out</Button>
            </form>
        </div>
    );
};

export default GlobalNav;