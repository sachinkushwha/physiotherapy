"use client"

import { useRouter } from "next/navigation";
import { Formik, Form, Field } from 'formik'
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export default function UserForm() {
    const navigate = useRouter();

    interface FormData {
        name: string;
        email: string;
        phone: string;
        service: string;
        date: string;
    }

    const postFormData=async(formData:FormData)=>{
        const response=await axios.post("https://motioncarebackend.onrender.com/appointment",formData);
        return response.data
    };
    const postFormDataMutation=useMutation({
        mutationFn:postFormData,
        onSuccess:()=>{
            alert("appointment Booked");
            navigate.push('/')
        },
        onError:()=>{
            alert('error in form submition');
        }
    })
    const handleSubmit = (formData: FormData) => {
        console.log(formData)
        postFormDataMutation.mutate(formData);
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50/50 py-16 px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-5xl gap-12 lg:gap-16">

                {/* Left Side Heading */}
                <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                        Quick Scheduling
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                        Book an Appointment
                    </h1>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                        Fill out the form to schedule a consultation with our expert physiotherapists and start your recovery journey today.
                    </p>
                </div>

                {/* Premium Form Section */}
                <div className="w-full lg:w-[480px] bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 backdrop-blur-sm">
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            phone: "",
                            service: "",
                            date: ""
                        }}
                        onSubmit={(formData,{resetForm}) => {
                            handleSubmit(formData)
                            resetForm();
                        }}
                    >
                        <Form className="flex flex-col gap-5">
                            
                            {/* Input Wrapper Group */}
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-slate-500 ml-1">Full Name</label>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-slate-500 ml-1">Email Address</label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-slate-500 ml-1">Phone Number</label>
                                <Field
                                    type="tel"
                                    name="phone"
                                    maxLength={10}
                                    placeholder="Phone number"
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm"
                                />
                            </div>

                            {/* Service selection */}
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-slate-500 ml-1">Select Service</label>
                                <Field
                                    as="select"
                                    name="service"
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Choose a service</option>
                                    <option value="Traditional Cupping Therapy">Traditional Cupping Therapy</option>
                                    <option value="Dry Needling Therapy">Dry Needling Therapy</option>
                                    <option value="Back Pain Therapy">Back Pain Therapy</option>
                                    <option value="Sports Injury Rehab">Sports Injury Rehab</option>
                                    <option value="Home Visit">Home Visit</option>
                                </Field>
                            </div>

                            {/* Preferred Date */}
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-slate-500 ml-1">Preferred Date</label>
                                <Field
                                    type="date"
                                    name="date"
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm cursor-pointer"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 text-sm"
                            >
                                Confirm Appointment
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};