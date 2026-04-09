import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Nav from "./Nav";

gsap.registerPlugin(ScrollTrigger);

const Hero1 = () => {
  const container1 = useRef();
  const container = useRef();

  // 🔥 TEXT ANIMATION
  useGSAP(() => {
    const firstmessage = SplitText.create(".text", {
      type: "words",
    });

    gsap.to(firstmessage.words, {
      color: "#F7E7CE",
      ease: "none",
      stagger: {
        each: 0.2,
      },
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: `+=${firstmessage.words.length * 100}`,
        scrub: 1,
        pin: true,
      },
    });

    return () => firstmessage.revert();
  }, []);

  // 🔥 CARD SCALE EFFECT
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".card", {
        scale: 0.78,
        opacity: 0.5,
        ease: "power1.in",
        scrollTrigger: {
          trigger: container1.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          pinSpacing: false, // ⚠️ same rakha hai (effect ke liye)
        },
      });
    }, container1);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        ref={container1}
        className="h-screen w-full flex px-3 py-2 items-center justify-center relative z-10"
      >
        <div className="card w-full h-full bg-[#f7e7ce] text-[#081c18] rounded-3xl shadow-3xl flex flex-col justify-between">
          
          {/* NAV */}
          <div className="flex justify-center items-center w-full text-center pt-4">
            <Nav />
          </div>

          {/* CENTER CONTENT */}
          <div className="flex flex-col justify-center items-center grow text-center">
            <p className=" Name lg:text-3xl">Heyy, I'm</p>
            <h1 className="text-5xl uppercase lg:text-9xl">Alok Kumar</h1>
            <h3 className="italic lg:text-4xl">Frontend Developer</h3>
          </div>

          {/* BOTTOM BAR */}
          <div className="flex justify-between items-center mb-5 h-16 w-full px-7 rounded-b-3xl">
            <button className="bg-[#081c18] px-5 py-2 rounded-3xl text-[#f7e7ce]">Contact</button>
            <button className="bg-[#081c18] px-5 py-2 rounded-3xl text-[#f7e7ce]" >Lets talk</button>
          </div>

        </div>
      </section>

      {/* NEXT SECTION */}
      <section className="h-screen relative z-20 flex items-center justify-center">
        <div
          ref={container}
          className="bg-[#081c18] min-h-screen flex justify-center items-center"
        >
          <p className="text stroke-text text-4xl font-light lg:text-7xl text-center p-10">
            Heyy! I am a passionate <span className="italic">Front-End</span>{" "}
            Developer focused on building responsive, user-friendly, and visually
            appealing web applications using modern technologies like React, GSAP
            and Tailwind CSS.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero1;