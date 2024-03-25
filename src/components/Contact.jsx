import { createElement, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Contacts from '../translations/ES/global.json'
import { useTranslation } from "react-i18next";

const Contact = () => {
  // const { Contact } = content;

  const { t } = useTranslation("global")
  const { contacts } = Contacts
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-ghostWhite text-dark2" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-dark2" data-aos="fade-down">
          {t("contacts.title")}
        </h2>
        <h4 className="subtitle text-dark2" data-aos="fade-down">
          {/* {Contact.subtitle} */}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded text-dark2"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="E-mail"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              className="btn self-start
            bg-white text-dark2"
            >
              Enviar
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {contacts.socialMedia.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                {/* <h4 className="text-dark2">{createElement(content.icon)}</h4> */}

                <a className="font-Poppins" href={t(`contacts.socialMedia.${i}.link`)}
                  target="_blank">
                  {t(`contacts.socialMedia.${i}.text`)}
                </a>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;