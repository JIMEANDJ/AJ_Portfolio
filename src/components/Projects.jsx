import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper"

import { projectT } from '../translations/ES/global.json'
import { useTranslation } from "react-i18next";

const Projects = () => {

  const { Projects } = content

  // const { project } = projectT

  const { t } = useTranslation("global")

  return (
    <section className="bg-dark2" id="projects">
      <div className="md:container px-5 pt-5 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title text-grayAsh" data-aos="fade-down">
            {t("projectT.title")}
          </h2>
          <h4 className="subtitle text-grayAsh" data-aos="fade-down">
            {t("projectT.subtitle")}
          </h4>
          <br />
        </div>
        <div className="flex items-start lg:flex-row flex-col gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-full md:max-w-[45vw] min-w-full md:min-w-[22rem] order-first lg:order-none block"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {projectT.projectContent.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-10 border-b-8 border-[#FAF9FD] h-fit"
              >
                {Projects.project_content[i] && <img src={Projects.project_content[i].image} />}
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins text-dark2">{t(`projectT.projectContent.${i}.title`)}</h5>
                  <button className="font-bold text-gray self-end">
                    <a href={t(`projectT.projectContent.${i}.link`)}>
                      Ver Proyecto
                    </a>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>

  );
};

export default Projects;