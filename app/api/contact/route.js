import Contact from "@/models/Contact";
import connectToDatabase from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // 1. Establish database connection
        // The connectToDatabase function should handle caching to ensure stability 
        await connectToDatabase();

        // 2. Extract data from the request body
        // Note: Using request.json() is correct for POST requests in the App Router
        const body = await request.json();
        const { name, phone, message } = body;

        // 3. Create and save the new document
        const newUser = new Contact({ name, phone, message });
        await newUser.save();
        
        // 4. Return the standard Next.js App Router success response (status 201 Created)
        return NextResponse.json(
            { 
                success: true, 
                message: 'Your message has been received! We will get back to you soon.',
                data: newUser // Returns the newly created document
            }, 
            { status: 201 }
        );

    } catch (error) {
        // 5. CRITICAL: Log the detailed error to the server console
        console.error('Error saving contact form data:', error);

        // 6. Handle Mongoose validation errors (status 400)
        if (error.name === 'ValidationError') {
            // Transform Mongoose error object into a more client-friendly format if needed,
            // but returning the raw error.errors is often sufficient.
            return NextResponse.json(
                { 
                    success: false, 
                    message: 'Data validation failed. Please check the required fields.', 
                    errors: error.errors 
                }, 
                { status: 400 }
            );
        }

        // 7. Handle General server errors (status 500)
        return NextResponse.json(
            { 
                success: false, 
                message: 'An internal server error occurred. Please try again later.' 
            }, 
            { status: 500 }
        );
    }
}
