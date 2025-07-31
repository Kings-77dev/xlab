"use client";

import { useState } from "react";
import TestimonialCard, { Testimonial } from "./TestimonialCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const data: Testimonial[] = [
  {
    quote:
      "Integrating your service has been a game-changer. We saw a 40% drop in response times and a big uptick in satisfaction.",
    author: "John Doe",
    role: "Head of Customer Experience, FinTech Global",
    avatar: "/john.jpg",
    rating: 5,
  },
  {
    quote:
      "The chatbot isn’t just a tool; it’s like having a skilled assistant that’s improving every day. Our customers love it!",
    author: "Elijah Ramirez",
    role: "Director of Operations, EcoHome Solutions",
    avatar: "/elijah.jpg",
    rating: 5,
  },
  {
    quote:
      "We were amazed at how quickly the solution learned our industry data. The team’s support made all the difference.",
    author: "Mia Song",
    role: "CTO, HealthBridgeTech",
    avatar: "/mia.jpg",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const last = data.length - 1;

  const prev = () => setIndex((i) => (i === 0 ? last : i - 1));
  const next = () => setIndex((i) => (i === last ? 0 : i + 1));

  return (
    <section className="relative py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-4xl font-bold">
          What <span className="text-primary">Our Clients</span> Say
        </h2>
        <p className="text-gray-500">
          Hear directly from our satisfied partners
        </p>
      </div>

      {/* Carousel */}
      <div className="flex justify-center items-center md:space-x-6">
        {/* Left Arrow (desktop only) */}
        <button
          onClick={prev}
          className="hidden md:inline-block p-3 rounded-full bg-primary shadow-md hover:bg-gray-400 hover:text-white transition"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        {/* Slide wrapper */}
        <div className="overflow-x-auto md:overflow-hidden w-full max-w-full">
          <div
            className="flex md:transition-transform md:duration-500 md:transform-gpu md:snap-none snap-x snap-mandatory"
            style={{ transform: `translateX(-${index * 352}px)` }}
          >
            {data.map((t, i) => (
              <div className="snap-center" key={i}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow (desktop only) */}
        <button
          onClick={next}
          className="hidden md:inline-block p-3 rounded-full bg-primary shadow-md hover:bg-gray-400 hover:text-white transition"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
