"use client";
import Header from "@/component/header";
import About from "@/app/about/page";
import Certificate from "@/app/certificate/page";
import Contact from "@/app/contact/page";
import Skills from "@/app/skills/page";
import Project from "@/app/project/page";
import Footer from "@/component/footer";



export default function Home() {


    return (
        <>
            <div className="w-full relative h-auto">
                <Header/>
            </div>
            <div className="sm:mt-[280px] mt-[200px]">
                <About/>
            </div>
            <div>
                <Project/>
            </div>
            <div className="sm:mt-[280px] mt-[200px]">
                <Skills/>
            </div>

            <div>
                <Certificate/>
            </div>
            <div>
                <Contact/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}
