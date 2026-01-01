"use client"
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
    const router = useRouter()
    const handleLogout = async () => {
        try {
            axios.get("/api/users/logout")
            toast.success("Logout successful")
            router.push("/login")
        } catch (error: any) {
            return toast.error(error.response.data.message)
        }
    }
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-black gap-4">
            <h1 className="h1 text-2xl text-center text-white">profile page</h1>
        <hr/>
        <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition">
            Logout
        </button>
        </div>
           
    )
}