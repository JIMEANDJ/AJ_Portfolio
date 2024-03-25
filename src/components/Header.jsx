import { useTranslation } from "react-i18next"
const Header = () => {

    const { i18n } = useTranslation("global")

    return (
        <header class="flex absolute top-0 left-2/3 h-14 gap-4 w-full z-10">
            <button
                onClick={() => i18n.changeLanguage("es")}
            >ES
            </button>
            <button
                onClick={() => i18n.changeLanguage("en")}
            >EN
            </button>
        </header>

    )
}

export default Header