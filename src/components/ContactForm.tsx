// "use client";
// import React, {useState} from "react";
//
// const ContactForm = () => {
//     const [travelType, setTravelType] = useState<"corporate" | "mice">("corporate");
//
//     const [formData, setFormData] = useState({
//         title: "",
//         name: "",
//         contactNumber: "",
//         email: "",
//         company: "",
//         designation: "",
//         inquiry: "",
//     });
//
//     const handleInputChange = (
//         e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//     ) => {
//         const {name, value} = e.target;
//         setFormData((prev) => ({...prev, [name]: value}));
//     };
//
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log("Form submitted:", formData);
//     };
//
//     return (
//         <div className="bg-white volkhov rounded-2xl shadow-md md:rounded-4xl">
//             <div className="container px-4">
//                 <div
//                     className="w-full max-w-md md:max-w-lg mx-auto p-4 md:p-6 lg:p-8">
//                     <h2 className="text-xl md:text-2xl lg:text-[45px] font-bold text-[#3C3C3C] mb-4 md:mb-6 lg:mb-8">
//                         Contact Form
//                     </h2>
//
//                     <div
//                         className="flex gap-1 items-start mb-4 md:mb-6 lg:mb-8 bg-[#F4F4F4] rounded-full w-max mx-auto">
//                         <button
//                             onClick={() => setTravelType("corporate")}
//                             className={`px-3 justify-start py-1 md:px-4 md:py-2 lg:px-6 lg:py-2 rounded-full text-xs md:text-sm transition-colors ${
//                                 travelType === "corporate"
//                                     ? "bg-[#E1251B] text-white font-semibold"
//                                     : "bg-[#F4F4F4] text-[#E1251B] font-normal"
//                             }`}
//                         >
//                             Corporate Travel
//                         </button>
//                         <button
//                             onClick={() => setTravelType("mice")}
//                             className={`px-3 justify-start py-1 md:px-4 md:py-2 lg:px-6 lg:py-2 rounded-full text-xs md:text-sm transition-colors ${
//                                 travelType === "mice"
//                                     ? "bg-[#E1251B] text-white font-semibold"
//                                     : "bg-[#F4F4F4] text-[#E1251B] font-normal"
//                             }`}
//                         >
//                             MICE Travel
//                         </button>
//                     </div>
//
//                     <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 lg:space-y-6">
//                         <div className="flex flex-col md:flex-row gap-3 md:gap-4">
//                             <select
//                                 name="title"
//                                 value={formData.title}
//                                 onChange={handleInputChange}
//                                 className="w-full md:w-1/3 px-3 py-2 md:py-3 border border-gray-300 rounded-md text-[#828282] text-sm focus:outline-none focus:ring-2 focus:ring-[#E1251B]"
//                             >
//                                 <option value="" disabled>
//                                     Title
//                                 </option>
//                                 <option value="Mr">Mr</option>
//                                 <option value="Mrs">Mrs</option>
//                                 <option value="Miss">Miss</option>
//                                 <option value="Rev">Rev</option>
//                                 <option value="Dr">Dr</option>
//                             </select>
//
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleInputChange}
//                                 placeholder="Name"
//                                 className="w-full md:w-2/3 px-3 py-2 md:py-3 border border-gray-300 rounded-md text-[#828282] text-sm focus:outline-none focus:ring-2 focus:ring-[#E1251B]"
//                             />
//                         </div>
//
//                         <input
//                             type="text"
//                             name="contactNumber"
//                             value={formData.contactNumber}
//                             onChange={handleInputChange}
//                             placeholder="Contact Number"
//                             className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md text-[#828282] text-sm focus:outline-none focus:ring-2 focus:ring-[#E1251B]"
//                         />
//
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             placeholder="Email"
//                             className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md text-[#828282] text-sm focus:outline-none focus:ring-2 focus:ring-[#E1251B]"
//                         />
//
//                         <input
//                             type="text"
//                             name="company"
//                             value={formData.company}
//                             onChange={handleInputChange}
//                             placeholder="Company"
//                             className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md text-[#828282] text-sm focus:outline-none focus:ring-2 focus:ring-[#E1251B]"
//                         />
//
//                         <input
//                             type="text"
//                             name="designation"
//                             value={formData.designation}
//                             onChange={handleInputChange}
//                             placeholder="Designation"
//                             className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md text-[#828282] text-sm focus:outline-none focus:ring-2 focus:ring-[#E1251B]"
//                         />
//
//                         <textarea
//                             name="inquiry"
//                             value={formData.inquiry}
//                             onChange={handleInputChange}
//                             placeholder="Inquiry"
//                             rows={3}
//                             className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md text-[#828282] text-sm focus:outline-none focus:ring-2 focus:ring-[#E1251B] resize-none"
//                         />
//
//                         <div className="text-center">
//                             <button
//                                 type="submit"
//                                 className="px-4 md:px-6 lg:px-8 py-2 md:py-3 bg-[#E1251B] text-white font-bold text-sm md:text-base rounded-xl md:rounded-2xl hover:bg-[#c91f17] transition-colors"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//
//                     <div className="mt-4 md:mt-6 lg:mt-8 text-center">
//                         <p className="text-sm md:text-base text-[#737373]">
//                             By submitting this form, you are agreeing to the{" "}
//                             <span className="font-medium text-[#E1251B]">Terms & Conditions</span> and{" "}
//                             <span className="font-medium text-[#E1251B]">Privacy Policy</span> of Acorn Travels Travel
//                             (Pvt) Ltd.
//                         </p>
//                         <p className="my-5 text-sm md:text-base font-bold text-black">
//                             Contact -{" "}
//                             <a href="mailto:inquiries.travel@acorn.lk" className="underline hover:text-[#E1251B]">
//                                 inquiries.travel@acorn.lk
//                             </a>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default ContactForm;

"use client";
import React, {useState} from "react";
import {useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import ReCAPTCHA from "react-google-recaptcha";


type TravelType = "corporate" | "mice";

export type FormField =
    | {
    type: "text" | "email" | "textarea";
    name: string;
    placeholder: string;
    label?: string;
    rows?: number;
    required?: boolean;
}
    | {
    type: "select";
    name: string;
    placeholder: string;
    label?: string;
    options: { value: string; label: string }[];
    required?: boolean;
}
    | {
    type: "toggle";
    name: string;
    options: { value: TravelType; label: string }[];
    required?: boolean;
};

type ContactFormProps = {
    fields: FormField[];
    title?: string;
    termsText?: string;
    contactEmail?: string;
    onSubmit?: (data: Record<string, string>) => void;
    pageSource?: string;
    reCaptchaSiteKey: string;
};


const createSchema = (fields: FormField[]) => {
    const schemaShape: Record<string, z.ZodTypeAny> = {};

    fields.forEach((field) => {
        switch (field.type) {
            case "text":
                // schemaShape[field.name] = field.required
                //     ? z.string().min(1, `${field.placeholder} is required`)
                //     : z.string().optional();
                //
                // break;
                schemaShape[field.name] = field.required
                    ? z
                        .string()
                        .min(1, `${field.placeholder || "This field"} is required`)
                        .max(50, `${field.placeholder || "This field"} must not exceed 50 characters`)
                        .regex(/^[a-zA-Z0-9_.-]*$/, "Only letters and spaces are allowed")
                    : z.string().regex(/^[a-zA-Z\s]*$/, "Only letters and spaces are allowed")
                        .max(50, `${field.placeholder || "This field"} must not exceed 50 characters`)
                        .optional();
                break;
            case "email":
                schemaShape[field.name] = field.required
                    ? z
                        .string()
                        .min(1, "Email is required")
                        .email("Invalid email format")
                        .max(100, "Email must not exceed 100 characters")
                    : z.string().email("Invalid email format")
                        .max(100, "Email must not exceed 100 characters")
                        .optional();
                break;
            case "textarea":
                // schemaShape[field.name] = field.required
                //     ? z.string().min(1, `${field.placeholder} is required`)
                //     : z.string().optional();
                // break;
                schemaShape[field.name] = field.required
                    ? z
                        .string()
                        .min(1, `${field.placeholder || "This field"} is required`)
                        .max(500, `${field.placeholder || "This field"} must not exceed 500 characters`)
                        .regex(/^[a-zA-Z0-9_.-]*$/, "Only letters, spaces, and basic punctuation are allowed")
                    : z.string().regex(/^[a-zA-Z\s.,!?]*$/, "Only letters, spaces, and basic punctuation are allowed")
                        .max(500, `${field.placeholder || "This field"} must not exceed 500 characters`)
                        .optional();
                break;
            case "select":
                schemaShape[field.name] = field.required
                    ? z.string().min(1, `Please select a ${field.placeholder.toLowerCase()}`)
                    : z.string().optional();
                break;
            case "toggle":
                schemaShape[field.name] = field.required
                    ? z.enum(["corporate", "mice"], {
                        required_error: "Please select a travel type",
                    })
                    : z.enum(["corporate", "mice"]).optional();
                break;
        }

        schemaShape["contactNumber"] = field.required
            ? z
                .string()
                .min(1, "Contact Number is required")
                .regex(/^\d{10}$/, "Contact Number must be 10 digits")
            : z.string().regex(/^\d{10}$/, "Contact Number must be 10 digits").optional();

        schemaShape["name"] = field.required
            ? z
                .string()
                .min(1, `Name is required`)
                .max(50, `Name must not exceed 50 characters`)
                .regex(/^[a-zA-Z\s]*$/, "Only letters and spaces are allowed")
            : z.string().regex(/^[a-zA-Z\s]*$/, "Only letters and spaces are allowed").optional();
    });

    schemaShape["recaptchaToken"] = z.string().min(1, "Please complete the reCAPTCHA");

    return z.object(schemaShape);
};

const ContactForm: React.FC<ContactFormProps> = ({
                                                     fields,
                                                     title = "Contact Form",
                                                     contactEmail = "inquiries.travel@acorn.lk",
                                                     onSubmit,
                                                     pageSource = "Unknown",
                                                     reCaptchaSiteKey,
                                                 }) => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const schema = createSchema(fields);
    const {
        control,
        handleSubmit,
        formState: {errors},
        reset,
        setValue,
        trigger
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: fields.reduce((acc, field) => {
            if (field.type === "toggle") return {...acc, [field.name]: "corporate"};
            return {...acc, [field.name]: ""};
        }, {recaptchaToken: ""} as Record<string, string>),
    });

    const onRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
        setValue("recaptchaToken", token || ""); // Set the value in react-hook-form
        trigger("recaptchaToken"); // Manually trigger validation for recaptchaToken
    };

    const onSubmitForm = async (data: Record<string, string>) => {
        if (!recaptchaToken) {
            setNotification({type: "error", message: "Please complete the reCAPTCHA."});
            return;
        }

        console.log("Form submitted:", data);
        setIsSubmitting(true);
        setNotification(null);

        try {
            const payload = {
                // data: { ...data, recaptchaToken },
                data,
                pageSource,
            };

            const response = await fetch("/api/submit-form", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Submission failed");
            }

            console.log("Form submitted successfully:", data);
            setNotification({
                type: "success",
                message: "Form submitted successfully!",
            });
            if (onSubmit) onSubmit(data);
            reset();
            setRecaptchaToken(null);
        } catch (error) {
            console.error("Error submitting form:", error);
            setNotification({
                type: "error",
                message: error instanceof Error ? error.message : "Submission failed",
            });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setNotification(null), 5000);
        }
    };

    const renderField = (field: FormField) => {
        switch (field.type) {
            case "toggle":
                return (
                    <div
                        key={field.name}
                        className="flex gap-1 justify-start items-start mb-4 md:mb-6 lg:mb-8 bg-[#F4F4F4] rounded-full w-max"
                    >
                        <Controller
                            name={field.name}
                            control={control}
                            render={({field: {onChange, value}}) => (
                                <>
                                    {field.options.map((option) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => {
                                                onChange(option.value);
                                            }}
                                            className={`px-3 py-1 md:px-4 md:py-2 lg:px-6 lg:py-2 rounded-full text-xs md:text-sm transition-colors ${
                                                value === option.value
                                                    ? "bg-[#2B5597] text-white font-semibold"
                                                    : "bg-[#F4F4F4] text-[#2B5597] font-normal"
                                            }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                    <input type="hidden" value={value || ""}/>
                                </>
                            )}
                        />
                        {errors[field.name] && (
                            <p className="text-red-500 text-xs mt-2">
                                {errors[field.name]?.message as string}
                            </p>
                        )}
                    </div>
                );

            case "select":
                return (
                    <div key={field.name} className="relative">
                        <Controller
                            name={field.name}
                            control={control}
                            render={({field: {onChange, value}}) => (
                                <select
                                    value={value || ""}
                                    onChange={onChange}
                                    className={`w-full px-3 py-2 md:py-3 border ${errors[field.name] ? "border-red-500" : "border-gray-300"} rounded-md text-[#828282] text-sm focus:outline-none focus:ring-2 focus:ring-[#2B5597]`}
                                >
                                    <option value="" disabled>
                                        {field.placeholder}
                                    </option>
                                    {field.options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            )}
                        />
                        {errors[field.name] && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors[field.name]?.message as string}
                            </p>
                        )}
                    </div>
                );

            case "textarea":
                return (
                    <div key={field.name}>
                        <Controller
                            name={field.name}
                            control={control}
                            render={({field: {onChange, value}}) => (
                                <textarea
                                    value={value || ""}
                                    onChange={onChange}
                                    placeholder={field.placeholder}
                                    rows={field.rows || 3}
                                    className={`w-full px-3 py-2 md:py-3 border rounded-md text-[#828282] ${errors[field.name] ? "border-red-500" : "border-gray-300"} text-sm focus:outline-none focus:ring-2 focus:ring-[#2B5597] resize-none`}
                                />
                            )}
                        />
                        {errors[field.name] && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors[field.name]?.message as string}
                            </p>
                        )}
                    </div>
                );

            default:
                return (
                    <div key={field.name}>
                        <Controller
                            name={field.name}
                            control={control}
                            render={({field: {onChange, value}}) => (
                                <input
                                    type={field.type}
                                    value={value || ""}
                                    onChange={onChange}
                                    placeholder={field.placeholder}
                                    className={`w-full px-3 py-2 md:py-3 border ${errors[field.name] ? "border-red-500" : "border-gray-300"} rounded-md text-[#828282] text-sm focus:outline-none focus:ring-2 focus:ring-[#2B5597]`}
                                />
                            )}
                        />
                        {errors[field.name] && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors[field.name]?.message as string}
                            </p>
                        )}
                    </div>
                );
        }
    };

    return (
        <div className="bg-white lato rounded-[10px] shadow-md">
            <div className="container px-4">
                <div className="w-full max-w-md md:max-w-lg mx-auto p-4 md:p-6 lg:p-8">
                    <h2 className="text-xl md:text-2xl lg:text-[45px] font-bold text-[#3C3C3C] mb-4 md:mb-6 lg:mb-8">
                        {title}
                    </h2>
                    {notification && (
                        <div
                            className={`mb-4 p-4 rounded-md ${
                                notification.type === "success"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                            }`}
                        >
                            {notification.message}
                        </div>
                    )}
                    <form onSubmit={handleSubmit(onSubmitForm)}
                          className="space-y-3 md:space-y-4 lg:space-y-6">
                        <div
                            className="justify-start">{fields.filter((f) => f.type === "toggle").map(renderField)}</div>
                        {fields.some((f) => f.name === "title") && fields.some((f) => f.name === "name") ? (
                            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                                <div className="md:w-1/3">{renderField(fields.find((f) => f.name === "title")!)}</div>
                                <div className="md:w-2/3">{renderField(fields.find((f) => f.name === "name")!)}</div>
                            </div>
                        ) : (
                            fields
                                .filter((f) => ["title", "name"].includes(f.name))
                                .map(renderField)
                        )}

                        {fields
                            .filter((f) => !["title", "name"].includes(f.name) && f.type !== "toggle")
                            .map(renderField)}

                        <div className="recaptcha-container">
                            <ReCAPTCHA
                                sitekey={reCaptchaSiteKey}
                                onChange={onRecaptchaChange}
                            />
                            {errors.recaptchaToken && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.recaptchaToken.message as string}
                                </p>
                            )}
                        </div>


                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-4 md:px-6 lg:px-8 py-2 md:py-3 cursor-pointer bg-[#2B5597] text-white font-bold text-sm md:text-base rounded-xl md:rounded-2xl transition-colors ${
                                    isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-950"
                                }`}
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-4 md:mt-6 lg:mt-8 text-center">
                        <p className="text-sm md:text-base text-[#737373]">
                            By submitting this form, you are agreeing to the{" "}
                            <span className="font-medium text-[#2B5597]"><a
                                href="/terms">Terms & Conditions</a></span> and{" "}
                            <span className="font-medium text-[#2B5597]"><a href="/terms">Privacy Policy</a></span> of
                            Acorn Travels
                            (Pvt) Ltd.
                        </p>
                        {contactEmail && (
                            <p className="my-5 text-sm md:text-base font-bold text-black">
                                Contact -{" "}
                                <a href={`mailto:${contactEmail}`} className="hover:text-[#2B5597]">
                                    {contactEmail}
                                </a>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;