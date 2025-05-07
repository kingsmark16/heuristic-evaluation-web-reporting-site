import { CarouselData } from "../data/EvaluatedSystemData"

const Carousel = () => {
  const scrollToSlide = (id) => {
    const el = document.getElementById(id.replace('#', ''))
    if (el) {
      el.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" })
    }
  }

  return (
    <div className="carousel w-full mt-3 overflow-x-auto scroll-smooth snap-x flex">
      {CarouselData.map((data) => (
        <div
          key={data.id}
          id={data.id}
          className="carousel-item relative w-full snap-center flex-shrink-0"
        >
          <img
            src={data.img_path_md_min}
            className="w-full object-cover block md:hidden"
            alt=""
          />
          <img
            src={data.img_path_md_max}
            className="w-full object-cover hidden md:block"
            alt=""
          />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={() => scrollToSlide(data.prev)} className="btn btn-circle">❮</button>
            <button onClick={() => scrollToSlide(data.next)} className="btn btn-circle">❯</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Carousel