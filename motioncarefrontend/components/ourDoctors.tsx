"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
export const Doctors = () => {
    const getImage=async()=>{
        const response=await axios.get('https://motioncarebackend.onrender.com/doctor');
        return response.data
    }
    const {data}=useQuery({
        queryKey:['Doctors'],
        queryFn:getImage
    });
    console.log(data)
    return (
        <div className="flex flex-wrap justify-center items-center gap-6 p-4 bg-gray-50 pb-[50px]">
      {data?.map((arr:any, index:any) => (
        <div
          key={index}
          className="w-full sm:w-[300px] rounded-xl overflow-hidden shadow-lg bg-white text-center p-4"
        >
          <img
            src={arr.imgs}
            alt=""
            className="w-full h-60 object-cover rounded-md object-top"
          />
          <h1 className="text-2xl font-semibold mt-4 font-roboto text-gray-800">{arr.title}</h1>
          <p className="mt-2 text-gray-700 text-sm">
           {arr.dis}
          </p>
        </div>
      ))}
    </div>
    )
}