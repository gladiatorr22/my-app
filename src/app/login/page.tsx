"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function LoginPage(){
    const [user,setUser] = React.useState({
        email : "",
        password: "",
    })

    const onLogin = async() => {

    }

    return(
        <div className="flex flex-col justify-center items-center w-full h-screen bg-black gap-4">
            <h1 className="h1 text-2xl text-center text-white">login</h1>
                <label htmlFor="email" className="text-white">Email</label>
                <input type="email" 
                placeholder="email" 
                className="p-2 rounded-lg outline-none bg-amber-50 text-black" 
                value={user.email} 
                onChange={(e) => setUser({...user, email: e.target.value})} 
                id="email"/>

                <label htmlFor="password" className="text-white">Password</label>
                <input type="password"
                placeholder="password" 
                className="p-2 rounded-lg outline-none bg-amber-50 text-black" 
                value={user.password} 
                onChange={(e) => setUser({...user, password: e.target.value})} 
                id="password"/>

                <button onClick={onLogin}
                className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                    Login
                </button>
                <Link href="/signup" className="text-white hover:text-blue-400 transition">
                    Don't have an account? Sign Up
                </Link>
        </div>
    )
}