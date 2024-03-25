import { useEffect, useState } from "react"
// import { content } from "../Content"
import Header from "./Header"
import { useTranslation } from "react-i18next"
import i18next from 'i18next'
import { hero } from '../translations/ES/global.json'

const Hero = () => {
  // const { hero } = content

  const [t, i18n] = useTranslation("global")

  const [language, setLanguage] = useState(i18next.language)

  const cvFiles = {
    en: "/AndresJimenez-CV-ATS.pdf",
    es: "/AndresJimenez-CV.pdf",
  }

  const videoLinks = {
    es: "https://www.youtube.com/watch?v=lsEqmtE9UA0",
    en: "https://www.youtube.com/watch?v=yZIummTz9mM",
  }

  const handleDownload = () => {
    const newLanguage = language === 'en' ? 'es' : 'en'
    i18next.changeLanguage(newLanguage)
    window.open(cvFiles[newLanguage], '_blank')
    setLanguage(newLanguage)
  }

  const handleWatch = () => {
    const newLanguage = language === 'en' ? 'es' : 'en'
    i18next.changeLanguage(newLanguage)
    window.open(videoLinks[language], '_blank')
    setLanguage(newLanguage)
  }

  return (

    <section
      id="home"
      className="overflow-hidden"
    >
      <div className="max-h-screen sm:min-h-screen relative flex md:flex-row flex-col-reverse 
  md:items-end justify-start m-0 sm:ml-24 items-center"
      >
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-80 w-8/12 top-0 right-0 md:bg-dark2 bottom-0 
          -z-10 flex items-center justify-center md:block"
        >
          <h1 className="md:rotate-90 md:absolute md:top-[30%] md:right-[-10%] text-ghostWhite 
          md:text-ghostWhite hidden md:block z-20">
            {hero.firstName}{" "}
            <span
              className="text-gray whitespace-nowrap"
              style={{ whiteSpace: "nowrap" }}
            >
              {hero.lastName}
            </span>
          </h1>
        </div>

        <Header />
        <div
          className="pb-16 px-6 pt-5 md:pt-16"
          data-aos="fade-down"
        >
          <h2 className="text-dark2">
            {t("hero.title1")}
          </h2>
          <h2 className="text-dark2">
            {t("hero.title2")}
          </h2>
          <br />
          <div className="flex justify-start gap-4">
            <button className="btn" onClick={handleDownload}>
              {t("hero.btnText")}
            </button>
            <button className="btn" onClick={handleWatch}>
              {t("hero.btnText2")}
            </button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.heroContent.map(
              (content, i) => (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 300}
                  className={`flex items-center w-80 gap-5
                ${i === 1 &&
                    " flex-row-reverse text-right"
                    }  `}
                >
                  <h3 className="text-dark2">
                    {t(`hero.heroContent.${i}.count`)}
                  </h3>
                  <p className="text-dark2">
                    {t(`hero.heroContent.${i}.text`)}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>


  )
}

export default Hero
