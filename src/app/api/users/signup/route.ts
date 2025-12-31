import { connect } from "@/dbConfig/dbConfig";
import User from "@models/userModel";
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";


connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        console.log(reqBody);

        // check if user already exists
        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        return NextResponse.json({ message: "User created successfully", user: savedUser }, { status: 201 });
    } catch (error: any) {
        console.error("Error during signup:", error);
        return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
    }
}