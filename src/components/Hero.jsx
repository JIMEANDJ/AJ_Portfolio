/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { hero } from '../translations/ES/global.json'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper"
import 'swiper/css';
import 'swiper/css/navigation';

import Modal from "react-modal";

import { FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { IoCloseSharp } from "react-icons/io5"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    backgroundColor: "white",
    padding: "2rem",
  },
}

Modal.setAppElement("#root");
const Hero = () => {

  const [t, i18n] = useTranslation("global")

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSwiperVisible, setIsSwiperVisible] = useState(true)

  function handleOpenModal() {
    setIsModalOpen(true);
    setIsSwiperVisible(false);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setIsSwiperVisible(true);
  }

  return (

    // <div id="home" className="mt-6">
    //   {/* Desarrollador */}
    //   <div className="flex justify-center items-center" data-aos="fade-down">
    //     {/* Titulo del desarrollador */}
    //     <div>
    //       <h2 className="text-dark2 text-center">{t("hero.title1")}{" "}</h2>
    //       <h2 className="text-dark2 text-center">{" "}{t("hero.title2")}</h2>
    //     </div>
    //   </div>

    //   {/* Botones y carrousel */}
    //   <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 pl-0">
    //     {/* Boton de descargar CV */}
    //     <div className="flex justify-center items-center order-2 md:order-1">
    //       <a href="/AndresJimenez-CV-ATS.pdf" download className="btn">Descargar CV</a>
    //     </div>

    //     {/* Carrousel de videos */}
    //     {isSwiperVisible && (
    //       <div className="flex justify-center items-center order-1 md:order-2 w-full md:w-auto">
    //         <Swiper
    //           pagination={{ clickable: true }}
    //           data-aos="fade-left"
    //           spaceBetween={20}
    //           modules={[Navigation]}
    //           navigation
    //           className="rounded-3xl pb-0 md:pb-10 w-full max-w-screen-lg drop-shadow-primary"
    //         >
    //           {hero.videoContent.map((content, i) => (
    //             <SwiperSlide
    //               className="bg-white rounded-3xl p-5 border-[#FAF9FD] flex justify-center items-center"
    //               key={i}
    //             >
    //               <div className="flex flex-col gap-1 mt-2 items-center justify-center w-full">
    //                 <iframe
    //                   className="w-full h-64 md:w-[800px] md:h-[390px]" // Ajuste responsive
    //                   src={t(`hero.videoContent.${i}.video`)}
    //                   title="Video de YouTube"
    //                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //                   allowFullScreen
    //                 ></iframe>
    //               </div>
    //             </SwiperSlide>
    //           ))}
    //         </Swiper>
    //       </div>
    //     )}

    //     {/* Boton de Contacto */}
    //     <div className="flex justify-center items-center order-3 md:order-3">
    //       <button onClick={handleOpenModal} className="btn">Contacto</button>
    //     </div>
    //   </div>

    //   <Modal
    //     isOpen={isModalOpen}
    //     onRequestClose={handleCloseModal}
    //     contentLabel="Mi Modal"
    //     style={customStyles}
    //   >
    //     <div className="flex flex-row justify-between items-center mb-5">
    //       <h1 className="text-2xl font-bold">Contactame</h1>
    //       <button onClick={handleCloseModal}><IoCloseSharp size={24} /></button>
    //     </div>
    //     <div className="flex flex-row justify-center items-center gap-4 mb-2">
    //       <FaLinkedin size={24} />
    //       <a href="www.linkedin.com/in/andres-jimenez-89b504265" target="_blank" className="text-2xl font-medium">Andres Jimenez</a>
    //     </div>
    //     <div className="flex flex-row justify-center items-center gap-4 mb-2">
    //       <SiGmail size={24} />
    //       <p className="text-2xl text-black font-medium">Andrezjj6@gmail.com</p>
    //     </div>
    //     <div className="flex flex-row justify-center items-center gap-4 mb-2">
    //       <FaWhatsapp size={24} />
    //       <a href="https://wa.me/57999888433" target="_blank" className="text-2xl font-medium">+57 999 888 433</a>
    //     </div>
    //   </Modal>

    //   {/* Contador de experiencia */}
    //   <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 mt-10 mb-10 pl-0">
    //     {hero.heroContent.map((content, i) => (
    //       <div
    //         key={i}
    //         data-aos="fade-down"
    //         data-aos-delay={i * 300}
    //         className={`flex items-center w-full justify-center text-center md:text-end ${i === 1 && " md:text-end"}`}
    //       >
    //         <h3 className="text-dark2">{t(`hero.heroContent.${i}.count`)}</h3>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div id="home" className="mt-6">
      {/* Desarrollador */}
      <div className="flex justify-center items-center" data-aos="fade-down">
        {/* Titulo del desarrollador */}
        <div>
          <h2 className="text-dark2 text-center">{t("hero.title1")}{" "}</h2>
          <h2 className="text-dark2 text-center">{" "}{t("hero.title2")}</h2>
        </div>
      </div>

      {/* Botones y carrousel */}
      <div className="flex flex-col justify-center items-center gap-8 mt-12 pl-0">
        {isSwiperVisible && (
          <div className="flex justify-center items-center w-full">
            <Swiper
              pagination={{ clickable: true }}
              data-aos="fade-left"
              spaceBetween={20}
              modules={[Navigation]}
              navigation
              className="rounded-3xl pb-0 w-full max-w-screen-lg drop-shadow-primary"
            >
              {hero.videoContent.map((content, i) => (
                <SwiperSlide
                  className="bg-white rounded-3xl p-5 border-[#FAF9FD] flex justify-center items-center"
                  key={i}
                >
                  <div className="flex flex-col gap-1 mt-2 items-center justify-center w-full">
                    <iframe
                      className="w-full h-64 md:w-[800px] md:h-[390px]" // Ajuste responsive
                      src={t(`hero.videoContent.${i}.video`)}
                      title="Video de YouTube"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Botones */}
        <div className="flex flex-col md:flex-row xl:flex-row justify-center items-center gap-4 w-full mt-4 xl:mt-0 
        md:w-auto xl:w-auto">

          {/* Boton de descargar CV */}
          <div className="flex justify-center items-center order-2 md:order-1 xl:order-1">
            <a href="/AndresJimenez-CV-ATS.pdf" download className="btn">Descargar CV</a>
          </div>

          {/* Boton de Contacto */}
          <div className="flex justify-center items-center order-3 md:order-2 xl:order-3">
            <button onClick={handleOpenModal} className="btn">Contacto</button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Mi Modal"
        style={customStyles}
      >
        <div className="flex flex-row justify-between items-center mb-5">
          <h1 className="text-2xl font-bold">Contactame</h1>
          <button onClick={handleCloseModal}><IoCloseSharp size={24} /></button>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 mb-2">
          <FaLinkedin size={24} />
          <a href="www.linkedin.com/in/andres-jimenez-89b504265" target="_blank" className="text-2xl font-medium">Andres Jimenez</a>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 mb-2">
          <SiGmail size={24} />
          <p className="text-2xl text-black font-medium">Andrezjj6@gmail.com</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 mb-2">
          <FaWhatsapp size={24} />
          <a href="https://wa.me/57999888433" target="_blank" className="text-2xl font-medium">+57 999 888 433</a>
        </div>
      </Modal>

      {/* Contador de experiencia */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 mt-10 mb-10 pl-0">
        {hero.heroContent.map((content, i) => (
          <div
            key={i}
            data-aos="fade-down"
            data-aos-delay={i * 300}
            className={`flex items-center w-full justify-center text-center md:text-end ${i === 1 && " md:text-end"}`}
          >
            <h3 className="text-dark2">{t(`hero.heroContent.${i}.count`)}</h3>
          </div>
        ))}
      </div>
    </div>


  )
}

export default Hero
