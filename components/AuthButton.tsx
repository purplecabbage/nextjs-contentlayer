"use client";

import { signIn, signOut, useSession } from 'next-auth/react'

export default function AuthButton() {
    // const { data: session } = useSession();
    if (false /*session*/) {
        return (
        <button className="border-sky-500 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={() => signOut()}>
            {/* {session?.user?.image && <img src={session.user.image} className="w-6 h-6 rounded-full ml-2" />} */}
        </button>
        );
    }
    return (
        <button className="border-sky-500 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={() => signIn()}>
        Sign in
        </button>
    );
}