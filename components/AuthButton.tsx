"use client";

import { signIn, signOut, useSession } from 'next-auth/react'

export default function AuthButton() {
    const { data: session } = useSession();
    if (session) {
        return (
        <button className="btn" onClick={() => signOut()}>
            {session?.user?.image && <img src={session.user.image} className="w-6 h-6 rounded-full ml-2" />}
        </button>
        );
    }
    return (
        <button className="btn" onClick={() => signIn()}>
        Sign in
        </button>
    );
}