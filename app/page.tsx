import About from "@/components/About";
import Hero from "@/components/Hero";
import Dogs from "@/components/Dogs";
import Contact from "@/components/Contact";
import Questions from "@/components/Questions";

export default function Home() {
  return (
    <div className="bg-[rgb(255,255,255)] text-black h-screen">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="dogs">
        <Dogs />
      </section>
      <section id="questions">
        <Questions />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
