"use client";
import Header from "@/component/header";
import About from "@/app/about/page";
import Certificate from "@/app/certificate/page";
import Contact from "@/app/contact/page";



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
                <Certificate/>
            </div>
            {/*<div>*/}
            {/*    <Contact/>*/}
            {/*</div>*/}
        </>
    );
}
