import { useState } from "react"
import LanguageButtons from "./LanguageButton"
import LanguageContent from "./LanguageContent"

export default function CardList({ codingLanguages }) {

  const [selectedLanguage, setSelectedLanguage] = useState(null)

  return (

    <div className="container mt-4">

      <LanguageButtons
        codingLanguages={codingLanguages}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage} />

      <LanguageContent selectedLanguage={selectedLanguage} />

    </div>
  )
}