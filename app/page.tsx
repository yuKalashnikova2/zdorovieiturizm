import Blog from "@/components/Blog";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import QuestionWrapper from "@/components/QuestionWrapper";
import Socials from "@/components/Socials";
import Services from "@/components/Services";
import Stages from "@/components/Stages";

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <Stages />
      <Socials />
      <Blog />
      <QuestionWrapper />
      <Contacts />
    </>
  );
}
