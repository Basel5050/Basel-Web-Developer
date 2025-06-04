import Image from "next/image";
import HeroSection from "./components/HeroSection";
import MyWorkSection from "./components/MyWorkSection";
import SocialMediaLinks from "./components/SocialMediaLinks";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <section className="min-h-screen">
      <HeroSection/>
      <MyWorkSection/>
      <SocialMediaLinks/>
      <ContactSection/>
    </section>
  );
}
