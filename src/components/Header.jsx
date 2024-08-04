/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { content } from "../Content";
import { hero } from '../translations/ES/global.json';
import { headerNavT } from '../translations/ES/global.json';

const Header = () => {
    const { t, i18n } = useTranslation('global');
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const [activeButton, setActiveButton] = useState(content.header && content.header.length > 0 ? content.header[0].link : '');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleAction = (actionType, param) => {
        if (actionType === 'language') {
            i18n.changeLanguage(param);
            setSelectedLanguage(param);
        } else if (actionType === 'scroll') {
            const section = document.getElementById(param.substring(1));
            if (section) {
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: 'smooth',
                });
            }
            setActiveButton(param);
        }
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            let foundActive = false;

            content.header.forEach((item) => {
                const section = document.getElementById(item.link.substring(1));
                if (!foundActive && section && scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveButton(item.link);
                    foundActive = true;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [selectedLanguage]);

    useEffect(() => {
        // Handle language change effect
        if (i18n.language !== selectedLanguage) {
            i18n.changeLanguage(selectedLanguage);
        }
    }, [selectedLanguage, i18n]);

    return (
        <>
            <div
                data-aos="slide-left"
                data-aos-delay="1200"
                className="bg-dark2 flex justify-between items-center pb-5 pt-5 sticky top-0 z-50"
            >
                <h1 className="mr-0 md:mr-52 flex-grow text-center text-ghostWhite text-2xl">
                    {t(hero.firstName)} <span className="text-gray">{t(hero.lastName)}</span>
                </h1>

                <nav className="md:flex gap-3 justify-between items-center mr-56 text-ghostWhite">
                    {headerNavT.headerNavContent.map((item, i) => (
                        <button
                            key={i}
                            className={`bg-transparent hover:bg-ghostWhite hover:text-dark_primary transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg ${activeButton === item.link ? 'text-dark_primary bg-white' : ''}`}
                            onClick={() => handleAction('scroll', item.link)}
                        >
                            {t(item.text)}
                        </button>
                    ))}
                </nav>

                {/* Idiomas */}
                <div className="flex gap-2 md:gap-4 md:ml-auto">
                    <button
                        onClick={() => handleAction('language', 'es')}
                        className={`px-2 py-1 md:px-4 md:py-2 rounded-lg transition-colors duration-300 ${selectedLanguage === 'es' ? 'bg-ghostWhite text-dark_primary' : 'bg-transparent text-ghostWhite hover:bg-ghostWhite hover:text-dark_primary'}`}
                    >
                        ES
                    </button>
                    <button
                        onClick={() => handleAction('language', 'en')}
                        className={`px-2 py-1 md:px-4 md:py-2 rounded-lg transition-colors duration-300 ${selectedLanguage === 'en' ? 'bg-ghostWhite text-dark_primary' : 'bg-transparent text-ghostWhite hover:bg-ghostWhite hover:text-dark_primary'}`}
                    >
                        EN
                    </button>
                </div>
            </div>
        </>
    );
}

export default Header;
