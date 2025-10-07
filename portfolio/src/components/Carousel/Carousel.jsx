import "./Carousel.css";
import { useState } from "react";
import codeImage from "../../assets/code.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const initProjects = [
  {
    ref: "a",
    img: codeImage,
    description: "Ecommerce Store",
  },
  {
    ref: "a",
    img: codeImage,
    description: "Movie App",
  },
  {
    ref: "a",
    img: codeImage,
    description: "To do List",
  },
  {
    ref: "a",
    img: codeImage,
    description: "To do List",
  },
  {
    ref: "a",
    img: codeImage,
    description: "To do List",
  },
];

export function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
  let [projects, setProjects] = useState(initProjects);

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index}>
          <div className="project">
            <img src={project.img} alt="" />
            <span>{project.description}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
}
