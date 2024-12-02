"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const content = [
  {
    title: "Your Gateway to Musical Mastery",
    description:
      "Our institute provides a holistic approach to music education, combining expert instruction, state-of-the-art facilities, and personalized learning plans. Whether you're a beginner taking your first steps or an advanced musician refining your skills, we guide you on your path to mastery. With opportunities to perform, collaborate, and grow, we empower you to turn your passion for music into a lifelong journey of excellence.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Your Gateway to Musical Mastery
      </div>
    ),
  },
  {
    title: "Crafting Future Maestros",
    description:
      "Our mission is to nurture the next generation of musicians by providing them with the tools, skills, and inspiration needed to succeed. Whether it’s mastering classical compositions, exploring modern genres, or diving into music production, our programs cater to all interests. Regular performances, workshops, and collaborations with accomplished artists ensure our students are well-prepared for the global stage.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Crafting Future Maestros
      </div>
    ),
  },
  {
    title: "A Community Built on Music",
    description:
      "We’re more than just a music school—we’re a vibrant community where students, instructors, and music enthusiasts come together to share their love for music. Here, you’ll find a welcoming and supportive environment that fosters creativity, collaboration, and lifelong friendships. Our institute celebrates diversity and encourages students to explore their unique musical voices in an inclusive atmosphere.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        A Community Built on Music
      </div>
    ),
  },
  {
    title: "Experience the Joy of Learning Music",
    description:
      "Music is about more than just notes and rhythms—it’s about expression, creativity, and connection. Our engaging and dynamic classes are designed to make learning music a joyful experience, whether you’re pursuing a professional career or simply fulfilling a personal dream. With hands-on instruction, interactive lessons, and performance opportunities, we ensure every moment spent here is both enjoyable and impactful.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Experience the Joy of Learning Music
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
