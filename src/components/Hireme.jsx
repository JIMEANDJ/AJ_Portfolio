import { useTranslation } from "react-i18next";
import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  const { t } = useTranslation("global")

  return (
    <section className="bg-dark2">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {t("hireme.title")}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {t("hireme.subtitle")}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7 text-ghostWhite">{t("hireme.text")}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              {t("hireme.btnText")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;