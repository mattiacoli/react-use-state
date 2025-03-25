export default function Card({ codingLanguages }) {

  return (

    <div className="container mt-4">

      <ul class="nav nav-pills card-header-pills gap-3 my-3">
        {
          codingLanguages.map(language => (
            <li key={language.id} class="nav-item">
              <button className="btn btn-primary">{language.title}</button>
            </li>
          ))
        }
      </ul>

      <div class="card">
        {codingLanguages.map(language => (
          <div class="card-body">
            <h4>{language.title}</h4>
            <p>{language.content}</p>
          </div>
        ))}

      </div>
    </div>
  )
}