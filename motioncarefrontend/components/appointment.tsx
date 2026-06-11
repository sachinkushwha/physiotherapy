"use client"
import { useState } from "react";
// import { Appointmentdata } from "../services/backend";
import { useRouter } from "next/navigation";
import Link from "next/link";
export const Appointment = () => {
  return (
    <div className="bg-green-300 py-10 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left min-h-[100px]">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Book Your Online Appointment
      </h1>
      <Link
        href="/appointmentform"
        className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition"
      >
        Book Appointment
      </Link>
    </div>
  );
};



export const Form = () => {
  const navigate=useRouter();

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: ""
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev, [name]: value
    }))
  }

  const handleSubmit = (e:any) => {
    // Appointmentdata(formdata).then((reply:any) => {
    //   alert(reply);
    //   navigate.push('/');
    // }).catch((error:any)=>{
    //   alert('somthing went wrong. please try again')
    // })
    setformdata({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: ""
    })
    e.preventDefault(); 
  }


  return (
    <div className="flex pt-20 flex-col lg:flex-row justify-center items-start w-[95%] max-w-5xl mx-auto py-10 px-4 gap-10">

      {/* Left Side Heading */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Book an Appointment</h1>
        <p className="text-gray-700 text-lg">
          Fill out the form to schedule a consultation with our expert physiotherapists.
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            name="phone"
            maxLength={10}
            value={formdata.phone}
            onChange={handleChange}
            placeholder="Phone number"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Service selection */}
          <select
            name="service"
            value={formdata.service}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Service</option>
            <option value="Traditional Cupping Therapy">Traditional Cupping Therapy</option>
            <option value="Dry Needling Therapy">Dry Needling Therapy</option>
            <option value="Back Pain Therapy">Back Pain Therapy</option>
            <option value="Sports Injury Rehab">Sports Injury Rehab</option>
            <option value="Home Visit">Home Visit</option>
          </select>

          {/* Preferred Date */}
          <input
            type="date"
            name="date"
            value={formdata.date}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};