import HeroSection from "@/components/HeroSection"
import Whyus from "@/components/Whyus";
import Genz from "@/components/Genz";
import Adversite from "@/components/Adversite";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import Creator from "@/components/Creator";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Whyus />
      <Creator />
      <Genz />
      <Adversite />
      <Form />
      <Footer />

    </div>
  );
}
