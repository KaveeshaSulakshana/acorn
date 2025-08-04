import {NextRequest, NextResponse} from "next/server";
import {sanityClient} from "../../../../sanity/sanity";
import nodemailer from "nodemailer";

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


const pageSourceToFormType = (pageSource: string): { formType: string; detailType: string } => {
    const source = pageSource.toLowerCase()
    if (source.includes('leisure travel inquiry')) {
        return {formType: 'Leisure Travel Inquiry', detailType: 'leisureFormDetails'}
    }
    if (source.includes('corporate travel inquiry')) {
        return {formType: 'Corporate Travel Inquiry', detailType: 'corporateFormDetails'}
    }
    if (source.includes('visa inquiry')) {
        return {formType: 'Visa Inquiry', detailType: 'visaFormDetails'}
    }
    if (source.includes('student inquiry')) {
        return {formType: 'Student Inquiry', detailType: 'studentFormDetails'}
    }
    if (source.includes('flight booking inquiry')) {
        return {formType: 'Flight Booking Inquiry', detailType: 'flightFormDetails'}
    }
    if (source.includes('contact us inquiry')) {
        return {formType: 'Contact US Inquiry', detailType: 'contactFormDetails'}
    }
    return {formType: 'Other Booking Inquiry', detailType: 'otherFormDetails'}

}

export async function POST(req: NextRequest) {
    try {
        const {data, pageSource} = await req.json();
        console.log("-----------form payload: ", data);

        const {formType, detailType} = pageSourceToFormType(pageSource)

        const {recaptchaToken, ...sanitizedData} = data;
        console.log("recaptcha :", recaptchaToken);

        // const submission = {
        //     _type: "submission",
        //     ...data,
        //     pageSource,
        //     category: pageSourceToCategory(pageSource),
        //     submittedAt: new Date().toISOString(),
        // };

        const settingsQuery = `*[_type == "contactSettings"][0]{recipientEmail,email,password}`;
        const settings = await sanityClient.fetch(settingsQuery);

        const recipientEmail = settings?.recipientEmail || "info.learn.edwin@gmail.com";
        const appEmail = settings?.email || process.env.EMAIL_USER;
        const appPassword = settings?.password || process.env.EMAIL_PASS;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: appEmail,
                pass: appPassword,
            },
        });

        const emailTemplate = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333333;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #f9f9f9;
                    }
                    .header {
                        background-color: #2B5597;
                        color: white;
                        padding: 20px;
                        text-align: center;
                        border-radius: 5px 5px 0 0;
                    }
                    .content {
                        padding: 20px;
                        background-color: white;
                        border-radius: 0 0 5px 5px;
                    }
                    .field {
                        margin-bottom: 15px;
                    }
                    .field-label {
                        font-weight: bold;
                        color: #2B5597;
                    }
                    .footer {
                        margin-top: 20px;
                        text-align: center;
                        color: #666666;
                        font-size: 12px;
                    }
                    .button {
                        display: inline-block;
                        padding: 10px 20px;
                        background-color: #2B5597;
                        color: white;
                        text-decoration: none;
                        border-radius: 5px;
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>New Form Submission</h1>
                    </div>
                    <div class="content">
                        <p>Dear Admin,</p>
                        <p>A new inquiry has been received through the contact form. Please review the details below.</p>
                        
                        <h2 style="color: #2B5597;">Submission Details:</h2>
                        <div class="field">
                            <span class="field-label">Form Type:</span>
                            <span>${pageSource}</span>
                        </div>
                        ${Object.entries(data)
            .filter(([key]) => key !== 'recaptchaToken')
            .map(([key, value]) => `
                                <div class="field">
                                    <span class="field-label">${key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                                    <span>${value}</span>
                                </div>
                            `).join('')}
                        
                        <p>For any further action, please contact the submitter at <a href="mailto:${data.email || recipientEmail}">${data.email || recipientEmail}</a>.</p>
                        
                        <a href="https://acorn-omega.vercel.app/" class="button">Visit Website</a>
                    </div>
                    <div class="footer">
                        <p>Acorn Travels (Pvt) Ltd.<br>
                        This is an automated message. Please do not reply directly to this email.<br>
                        © ${new Date().getFullYear()} Acorn Travels. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        await transporter.sendMail({
            from: `"Acorn Travels" <${appEmail}>`,
            to: recipientEmail,
            subject: "New Form Submission - Acorn Travels",
            html: emailTemplate,
        });

        const query = `*[_type == "formSubmission" && formType == $formType][0]`
        const existing = await sanityClient.fetch(query, {formType})

        const newSubmission = {
            _type: detailType,
            _key: new Date().toISOString(),
            ...sanitizedData,
            submittedAt: new Date().toISOString()
        }

        if (existing) {
            await sanityClient
                .patch(existing._id)
                .setIfMissing({submissions: []})
                .append('submissions', [newSubmission])
                .commit()
        } else {
            await sanityClient.create({
                _type: 'formSubmission',
                formType,
                submissions: [newSubmission]
            })
        }

        return NextResponse.json(
            {message: 'Form submission successful!'},
            {status: 200}
        )

        // await sanityClient.create(submission);
        // return NextResponse.json(
        //     {message: "Form submission successful!"},
        //     {status: 200}
        // );
    } catch (error) {
        console.error("Error submitting to Sanity:", error);
        return NextResponse.json(
            {message: "Failed to submit form"},
            {status: 500}
        );
    }
}