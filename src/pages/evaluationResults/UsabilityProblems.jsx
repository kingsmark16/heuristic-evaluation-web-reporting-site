import { ChevronLeft, ChevronRight } from "lucide-react";
import Pagination from "../../components/Pagination";
import { usabilityProblems } from "../../data/usabilityProblems";
import React, { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const usabilityBTNData = {
  previous: {
    name: "Prev",
    icon: ChevronLeft,
    pageTitle: "Evaluate...",
    path: "/decide-framworks/evaluate",
  },
  next: {
    name: "Next",
    icon: ChevronRight,
    pageTitle: "Heuristics...",
    path: "/evaluation-result/workbook",
  },
};

const UsabilityProblems = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        titleRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Animate cards alternately from left and right
      cardsRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            x: i % 2 === 0 ? -100 : 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.2,
            ease: "power3.out",
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col mt-8">
      <span
        ref={titleRef}
        className="anim-evaluator text-xl mx-4.5 text-base-content sm:text-3xl font-semibold px-5 pb-4 flex items-center"
      >
        Usability Problems
      </span>
      <div className="flex flex-col mb-0 mx-10 px-5 mt-3 bg-base-200/85 py-2 space-y-10 rounded-2xl shadow-md">
        {usabilityProblems.map((problem, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card bg-base-100 px-1 py-3 sm:p-5 my-3"
          >
            <p className="card-title pl-3 sm:pl-0 text-sm sm:text-lg">{`Issue No. ${
              index + 1
            }`}</p>
            <figure className="flex flex-col gap-5">
              {problem.photo.map((item, i) => (
                <img
                  key={i}
                  src={item}
                  alt={`Issue ${index + 1} - Photo ${i + 1}`}
                  className="object-cover cursor-pointer p-5 border-accent-content rounded-2xl"
                  onClick={() => handleImageClick(item)}
                />
              ))}
            </figure>
            <div className="card-body">
              <p>
                <span className="font-bold">Heuristic Violated: </span>
                {problem.heuristicViolated}
              </p>
              <p>{problem.issue}</p>
              <p>{problem.impact}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full rounded-xl"
          />
        </div>
      )}
      <Pagination btnData={usabilityBTNData} />
    </div>
  );
};

export default UsabilityProblems;
