import { Appointment } from "@/components/appointment";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/nav";
import { Doctors } from "@/components/ourDoctors";
import { Poster } from "@/components/poster";
import { Review } from "@/components/review";
import { Service } from "@/components/service-block";
import { Space, Space1 } from "@/components/space";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Poster/>
      <Space/>
      <Service/>
      <Appointment/>
      <Space1/>
      <Doctors/>
      <Review/>
      <Footer/>
    </div>
  );
}
