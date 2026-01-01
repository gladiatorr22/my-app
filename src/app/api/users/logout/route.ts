import { connect } from "@/dbConfig/dbConfig";
import User from "@models/userModel";
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";



export async function GET(){
    try {
        const response = NextResponse.json({message: "Logout successful",success: true}, {status: 200})
        response.cookies.set("token", "", {
            httpOnly: true,
            secure: true, 
        })
        return response
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}