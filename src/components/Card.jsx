import { useState } from "react"

export default function CardList({ codingLanguages }) {

  const [selectedLanguage, setSelectedLanguage] = useState(null)

  return (

    <div className="container mt-4">

      <LanguageButtons
        codingLanguages={codingLanguages}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage} />

      <LanguageContent
        selectedLanguage={selectedLanguage} />



    </div>
  )
}



function LanguageButtons({ codingLanguages, selectedLanguage, setSelectedLanguage }) {
  return (
    <ul className="nav nav-pills card-header-pills gap-3 my-3">
      {codingLanguages.map(language => (
        <li key={language.id} className="nav-item">
          <button
            className={`btn ${selectedLanguage?.id === language.id ? 'btn-warning' : 'btn-primary'} fw-bold`}
            onClick={() => setSelectedLanguage(language)}>
            {language.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

function LanguageContent({ selectedLanguage }) {
  return (
    <div className="card mt-4">
      <div className="card-body">
        {selectedLanguage ? (
          <>

            <h5 className="card-title">{selectedLanguage.title}</h5>
            <p className="card-text">{selectedLanguage.content}</p>

          </>

        ) : (
          <>
            <h5 className="card-title">Nessun linguaggio selezionato</h5>
            <p className="card-text"></p>
          </>
        )}
      </div>
    </div>
  )
}

