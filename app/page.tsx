import Blog from "@/components/Blog";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import QuestionWrapper from "@/components/QuestionWrapper";

export default function Home() {
  return (
    <>
      <Banner />

      <About />

      <Blog />
       <QuestionWrapper />
      <Contacts />
    </>
  );
}
