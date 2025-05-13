import { useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedInfo = ({info}) => {
    const infoRef = useRef(null);
    useGSAP(() => {
        gsap.fromTo(infoRef.current,
            {
                y: 0, opacity: 0,
            },
            {
                y: 0, opacity: 1, duration: 1, stagger: 0.5,
            }
        )
    })

  return (
    <span ref={infoRef} className="text-base md:text-lg font-medium pr-2 md:px-2 text-base-content/95">
        {info}
    </span>
  )
}

export default AnimatedInfo