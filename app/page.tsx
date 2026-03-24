import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white shadow-xl">
        <Header />
        <Profile />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contacts />
      </div>
    </main>
  );
}
