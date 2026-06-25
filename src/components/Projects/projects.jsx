import "./projects.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Projects() {
  const projects = [
    {
      image: "/project1.png",
      title: "Small steps every day lead to big changes",
      link: "https://malak-omar-code.github.io/malak/",
    },
    {
      image: "/project2.png",
      title: "Cristiano Ronaldo",
      link: "https://mahmoud-ghareb.github.io/Mahmoud-website/",
    },
    {
      image: "/project3.png",
      title: "Exercise and Fitness",
      link: "https://remas-fawzy.github.io/remas/",
    },
    {
      image: "/project4.png",
      title: "Healthy Food",
      link: "https://mariam-ahmed-code.github.io/Mairam/",
    },
    {
      image: "/project5.png",
      title: "Supermarket",
      link: "https://mahmoud-ahmed-code.github.io/Mariam/",
    },
    {
      image: "/project6.png",
      title: "Cars",
      link: "https://ahmed-gaber00.github.io/Ahmed-website/",
    },
    {
      image: "/project7.png",
      title: "Cats",
      link: "https://shady-mohamed0.github.io/Shady-Website1/",
    },
    {
      image: "/project8.png",
      title: "Flowers",
      link: "https://noor-nasser-code.github.io/Noor/",
    },
    {
      image: "/project9.png",
      title: "Cristiano Ronaldo",
      link: "https://yahya-amr.github.io/Yahya/",
    },
    {
      image: "/project10.png",
      title: "Cats",
      link: "https://ahmedhasssaan.github.io/ahmed-website/",
    },
    {
      image: "/project11.png",
      title: "Films",
      link: "https://mahmoud0101-ai.github.io/toppings-final/",
    },
    {
      image: "/project12.png",
      title: "Characters",
      link: "https://abdelrahmanmohamed1552008-cell.github.io/Toppings-final/",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">

        <p className="small-title">
          OUR_WORK // PROJECT_SHOWCASE
        </p>

        <h2 className="fw-bold display-5 mb-5">
          Featured <span className="title-red">Projects</span>
        </h2>

        <h4>This section showcases the creative work of our young students.</h4>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="slider-card">
                <img
                  src={project.image}
                  alt={project.title}
                />

                <h3>{project.title}</h3>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  View Project
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="divider"></div>
    </section>
  );
}

export default Projects;