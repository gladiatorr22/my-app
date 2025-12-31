"use client"
import React, { use, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage(){
    const router = useRouter();
    const [user,setUser] = React.useState({
        email : "",
        password: "",
        username : "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async() => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log(response.data);
            router.push("/login");
        } catch (error:any) {
            console.log(error.message);
            toast.error("Something went wrong",error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }   

    }, [user]);

    return(
        <div className="flex flex-col justify-center items-center w-full h-screen bg-black gap-4">
            <h1 className="h1 text-2xl text-center text-white">{loading ? "Processing..." : "Sign Up"}</h1>
                <label htmlFor="username" className="text-white">Username</label>
                <input type="text" 
                placeholder="username" 
                className="p-2 rounded-lg outline-none bg-amber-50 text-black" 
                value={user.username} 
                onChange={(e) => setUser({...user, username: e.target.value})} 
                id="username"/>

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

                <button onClick={onSignup}
                className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                    {buttonDisabled ? "No sign up" : "Sign Up"}
                </button>
                <Link href="/login" className="text-white hover:text-blue-400 transition">
                    Already have an account? Login
                </Link>
        </div>
    )
}