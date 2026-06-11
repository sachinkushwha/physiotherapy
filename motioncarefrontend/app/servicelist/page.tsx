"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Service()  {

   const getServiceList=async()=>{
    const response=await axios.get("https://motioncarebackend.onrender.com/service");
    return response.data
   };
   const {data}=useQuery({
    queryKey:['service'],
    queryFn:getServiceList
   });
   console.log(data);
    return (
        <>
        {/* <Poster/> */}
        <div className="pt-20 w-full max-w-6xl mx-auto py-10 px-4 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.map((service:any, index:any) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-blue-500"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {service.service}
                        </h3>
                        <p className="text-gray-600">
                            {service.dis}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
};
