import {NextRequest, NextResponse} from "next/server";
import {sanityClient} from "../../../../sanity/sanity";

// export interface SubmissionData {
//     _type: "submission",
//     name: string;
//     title: string,
//     travelType: string,
//     company: string,
//     contactNumber: string,
//     designation: string,
//     email: string,
//     inquiry: string,
//     pageSource: string
// }


export async function POST(req: NextRequest) {
    try {
        const {data, pageSource} = await req.json();

        const submission = {
            _type: "submission",
            ...data,
            pageSource,
            submittedAt: new Date().toISOString(),
        };

        await sanityClient.create(submission);
        return NextResponse.json(
            {message: "Form submission successful!"},
            {status: 200}
        );
    } catch (error) {
        console.error("Error submitting to Sanity:", error);
        return NextResponse.json(
            {message: "Failed to submit form"},
            {status: 500}
        );
    }
}