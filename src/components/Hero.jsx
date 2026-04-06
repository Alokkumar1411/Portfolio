import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  useGSAP(() => {
  const firstmessage = SplitText.create(".text", {
    type: "words",
  });

  gsap.to(firstmessage.words, {
    color: "white", // 🔥 yaha fill hoga
    ease: "none",
    stagger: {
      each: 0.2,
    },
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: `+=${firstmessage.words.length * 100}`,
      scrub: 1,
      pin: true,
    },
  });

  return () => firstmessage.revert();
}, []);

  return (
    <div className="container bg-black min-h-screen flex justify-center items-center">
      <p className="text stroke-text text-4xl lg:text-7xl text-center p-10">
        I am a passionate <span className="italic" >Front-End</span>  Developer focused on building responsive,
        user-friendly, and visually appealing web applications. I aim to create
        seamless digital experiences using modern technologies like React, Gsap and
        Tailwind CSS.
      </p>
    </div>
  );
};

export default Hero;