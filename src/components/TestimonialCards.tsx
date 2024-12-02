"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;

const testimonials = [
  {
    quote:
      "The instructors here are phenomenal! They tailor their teaching to my strengths and weaknesses, helping me improve my piano skills faster than I ever imagined. The regular recitals are a great way to build confidence and showcase progress. Joining this institute was the best decision I made!",
    name: "Emily Carter",
    title: "Guitar Fundamentals",
  },
  {
    quote:
      "As a guitar enthusiast, I was looking for a place where I could learn both the technical and creative aspects of music. The faculty here not only taught me how to play better but also inspired me to compose my own music. The collaborative environment is truly motivating!",
    name: "Ryan Mitchell",
    title: "Piano for Beginners",
  },
  {
    quote:
      "Learning violin at this institute has been a life-changing experience. The instructors are patient and highly skilled, and the facilities are top-notch. I love how they integrate theory with practice, making each class interesting and engaging. I can see myself growing as a musician every day.",
    name: "Sofia Alvarez",
    title: "Advanced Vocal Techniques",
  },
  {
    quote:
      "I joined the music production program here, and it has been incredible. From understanding sound engineering to creating my own tracks, I’ve gained so much knowledge and hands-on experience. The workshops with industry professionals were especially eye-opening!",
    name: "Jane Austen",
    title: "Drumming Mastery",
  },
  {
    quote:
      "As someone who was completely new to singing, I was nervous about starting. But the vocal coaches here made me feel so comfortable and encouraged me to find my voice. The personalized feedback and supportive environment have been crucial in my progress. I’m so grateful!",
    name: "Ava Johnson",
    title: "Moby-Dick",
  },
];
