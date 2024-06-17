import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { content } from "../Content"
import { hero } from '../translations/ES/global.json'


const Header = () => {
    const { i18n } = useTranslation('global')
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)
    const [activeButton, setActiveButton] = useState(content.header[0].link)
    const [menuOpen, setMenuOpen] = useState(false)

    // Función para cambiar idioma o hacer scroll
    const handleAction = (actionType, param) => {
        if (actionType === 'language') {
            i18n.changeLanguage(param)
            setSelectedLanguage(param)
        } else if (actionType === 'scroll') {
            const section = document.getElementById(param.substring(1))
            if (section) {
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: 'smooth',
                });
            }
            setActiveButton(param)
        }
        setMenuOpen(false)
    }

    // Efecto para verificar la posición de scroll y actualizar el botón activo
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            let foundActive = false;

            content.header.forEach((item) => {
                const section = document.getElementById(item.link.substring(1));
                if (!foundActive && section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveButton(item.link)
                    foundActive = true
                }
            });
        };

        // Agregar el listener de scroll
        window.addEventListener('scroll', handleScroll)
        return () => {
            // Remover el listener de scroll al desmontar el componente
            window.removeEventListener('scroll', handleScroll)
        };
    }, [selectedLanguage]) // Se ejecuta cuando cambia el idioma seleccionado

    return (
        <div
            data-aos="slide-left"
            data-aos-delay="1200"
            className="bg-dark2 flex justify-between items-center pb-5 pt-5 sticky top-0 z-50"
        >
            <div className="flex justify-between items-center w-full">
                {/* Menú de hamburguesa y logo */}
                <div className="flex items-center">
                    <button
                        className="text-ghostWhite focus:outline-none md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg
                            fill="none"
                            viewBox="0 0 15 15"
                            className="ml-5 mr-10"
                            height="2em"
                            width="2em">
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <h1 className="mr-0 md:mr-52 flex-grow text-center text-ghostWhite text-2xl">
                        {hero.firstName} <span className="text-gray">{hero.lastName}</span>
                    </h1>
                </div>

                {/* Navegación principal (visible en desktop) */}
                <nav className="hidden md:flex gap-3 justify-between items-center mr-56 text-ghostWhite">
                    {content.header.map((item, index) => (
                        <button
                            key={index}
                            className={`bg-transparent hover:bg-ghostWhite hover:text-dark_primary transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg ${activeButton === item.link ? 'text-dark_primary bg-white' : ''}`}
                            onClick={() => handleAction('scroll', item.link)}
                        >
                            {item.text}
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

            {/* Menú desplegable para dispositivos móviles */}
            <div
                className={`w-full hidden min-h-full absolute bg-dark2 top-full left-0 right-0 py-2 transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
                {content.header.map((item, index) => (
                    <button
                        key={index}
                        className={`block w-full text-left text-ghostWhite hover:bg-ghostWhite hover:text-dark_primary transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg ${activeButton === item.link ? 'text-dark_primary bg-white' : ''}`}
                        onClick={() => handleAction('scroll', item.link)}
                    >
                        {item.text}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Header