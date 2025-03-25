export default function LanguageButtons({ codingLanguages, selectedLanguage, setSelectedLanguage }) {
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