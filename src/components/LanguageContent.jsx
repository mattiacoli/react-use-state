export default function LanguageContent({ selectedLanguage }) {
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

