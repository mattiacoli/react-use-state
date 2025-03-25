import { useState } from "react"

export default function CardList({ codingLanguages }) {

  const [selectedLanguage, setSelectedLanguage] = useState(null)

  return (

    <div className="container mt-4">

      <ul class="nav nav-pills card-header-pills gap-3 my-3">
        {
          codingLanguages.map(language => (
            <li key={language.id} class="nav-item">
              <button
                className={`btn ${selectedLanguage?.id === language.id ? 'btn-warning' : 'btn-primary'} fw-bold`}
                onClick={() => setSelectedLanguage(language)
                }
              >{language.title}</button>
            </li>
          ))}
      </ul>
      {selectedLanguage && (
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">{selectedLanguage.title}</h5>
            <p className="card-text">{selectedLanguage.content}</p>
          </div>
        </div>
      ) || (
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Nessun linguaggio selezionato</h5>
              <p className="card-text"></p>
            </div>
          </div>
        )}



    </div>
  )
}

