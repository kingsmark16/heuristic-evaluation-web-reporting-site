import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const PdfCard = () => {
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
        }
      );
    });

    return () => ctx.revert(); // Clean up
  }, []);

  const handleView = (file) => {
    window.open(file, '_blank');
  };

  const pdfList = [
    { id: 1, name: "Mark Angel P. Concina", file: "/CONCINA-Heuristic_Evaluation_Workbook_-_Nielsen_Norman_Group.pdf" },
    { id: 2, name: "Gerald B. Oraller", file: "/ORALLER-Heuristic_Evaluation_Workbook_-_Nielsen_Norman_Group.pdf" },
    { id: 3, name: "Dino S. Radores Jr.", file: "/RADORES-Heuristic_Evaluation_Workbook_-_Nielsen_Norman_Group.pdf" },
    { id: 4, name: "Alwin Y. Onsay Jr.", file: "/ONSAY-Heuristic_Evaluation_Workbook_-_Nielsen_Norman_Group.pdf" },
    { id: 5, name: "King David P. Bermejo", file: "/BERMEJO-Heuristic_Evaluation_Workbook_-_Nielsen_Norman_Group.pdf" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-10 py-8">
      {pdfList.map((item, index) => (
        <div
          key={item.id}
          ref={el => cardRefs.current[index] = el}
          className="card w-70 bg-base-100 card-sm shadow-sm"
        >
          <div className="card-body">
            <h2 className="card-title">
              <span className="bg-base-content rounded-full w-6 h-6 text-center text-base-300">{item.id}</span>
              Heuristic Evaluation Workbook
            </h2>
            <p>{item.name}</p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary" onClick={() => handleView(item.file)}>View</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PdfCard;
