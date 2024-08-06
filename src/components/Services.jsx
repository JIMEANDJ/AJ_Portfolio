import { content } from "../Content"
import { servicesT } from "../translations/ES/global.json"
import { useTranslation } from "react-i18next";

const Services = () => {
  const { services } = content
  const { t } = useTranslation("global")


  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title text-dark2" data-aos="fade-down">
          {t("servicesT.title")}
        </h2>

        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {servicesT.serviceContent.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 
              rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
hover:!blur-none"
            >
              {services.service_content[i] && <img src={services.service_content[i].logo} className="mx-auto w-14 h-14" alt="" />}
              {/* <img src={t(`services.serviceContent.${i}.logo`)} alt="..." className="mx-auto w-14 h-14" /> */}
              <h6 className="my-3 text-dark2">
                {t(`servicesT.serviceContent.${i}.title`)}
              </h6>
              <p className="leading-7 text-dark2">
                {t(`servicesT.serviceContent.${i}.para`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
