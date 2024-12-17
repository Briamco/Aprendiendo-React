/* eslint-disable react/prop-types */
import { Link } from "../components/Link"

const i18n = {
  es: {
    title: 'Sobre Nosotros',
    button: 'Ir a Home',
    description: 'Hola! Me llamo Briam Carlos y estoy creando un clone de React Router'
  },
  en: {
    title: 'About us',
    button: 'Go to Home',
    description: 'Hello! My name is Briam Carlos and I am creating a clone of React Router'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src="https://avatars.githubusercontent.com/u/63083603?v=4" alt="Foto de Briam" />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}