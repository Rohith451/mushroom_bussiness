import Contact from "@/models/Contact";
import connectToDatabase from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // 1. Establish database connection
        await connectToDatabase();

        // 2. Extract data from the request body
        const { name, phone, message } = await request.json();

        // 3. Create and save the new document
        const newUser = new Contact({ name, phone, message });
        await newUser.save();
        
        // 4. Return the standard Next.js App Router success response (status 201 Created)
        return NextResponse.json(
            { 
                success: true, 
                message: 'Your message has been received! We will get back to you soon.',
                data: newUser // Use newUser, not newContact
            }, 
            { status: 201 }
        );

    } catch (error) {
        // 5. CRITICAL: Log the detailed error
        console.error('Error saving contact form data:', error);

        // 6. Handle Mongoose validation errors using NextResponse
        if (error.name === 'ValidationError') {
            return NextResponse.json(
                { 
                    success: false, 
                    message: 'Data validation failed.', 
                    errors: error.errors 
                }, 
                { status: 400 }
            );
        }

        // 7. Handle General server errors using NextResponse
        return NextResponse.json(
            { 
                success: false, 
                message: 'An internal server error occurred. Please try again later.' 
            }, 
            { status: 500 }
        );
    }
}