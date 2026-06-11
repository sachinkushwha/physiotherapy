import { Appointment } from "@/components/appointment";
import { Doctors } from "@/components/ourDoctors";
import { Poster } from "@/components/poster";
import { Review } from "@/components/review";
import { Service } from "@/components/service-block";
import { Space, Space1 } from "@/components/space";

export default function Home() {
  return (
    <div>
      
      <Poster/>
      <Space/>
      <Service/>
      <Appointment/>
      <Space1/>
      <Doctors/>
      <Review/>
    </div>
  );
}
