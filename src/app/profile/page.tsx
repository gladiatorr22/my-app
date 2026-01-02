"use client"
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState , useEffect} from "react";
import Link from "next/link";

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const handleLogout = async () => {
        try {
            axios.get("/api/users/logout")
            toast.success("Logout successful")
            router.push("/login")
        } catch (error: any) {
            return toast.error(error.response.data.message)
        }
    }
    const fetchUser = async () => {
        try {
            const response = await axios.get("/api/users/me")
            setData(response.data.data._id)
            console.log(response.data.data._id)
        } catch (error: any) {
            console.log(error)
        }
    }
   

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-black gap-4">
            <h1 className="h1 text-2xl text-center text-white">profile page</h1>
            <h2>{data==="nothing"?"nothing":
                <Link className="text-white bg-blue-500 p-2 rounded hover:bg-blue-600 transition"
                href={`/profile/${data}`}>
                {data}
                </Link>}
            </h2>
            <hr/>

            <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition">
                Logout
            </button>

            <button onClick={fetchUser} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
                Fetch User
            </button>

        </div>
           
    )
}