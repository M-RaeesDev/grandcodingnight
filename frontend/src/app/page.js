import CardComponent from "@/components/allloan";
import Emailsignup from "@/components/emailupdate";
import Feature from "@/components/feature";
import Footer from "@/components/Footer";
import Herosection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Feature/>
      <CardComponent/>
      <Emailsignup/>
      <Footer/>
    </div>
  );
}
