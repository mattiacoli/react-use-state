import { useState } from "react"
import codingLanguages from "./data/codingLanguage"
import Header from "./components/Header"

function App() {


  return (
    <>

      <Header />

      <div className="container mt-4">
        <div class="card">
          <div class="card-header">

            <ul class="nav nav-pills card-header-pills gap-3">
              {
                codingLanguages.map(language => (
                  <li key={language.id} class="nav-item">
                    <button className="btn btn-primary">{language.title}</button>
                  </li>
                ))
              }
            </ul>
          </div>

          {codingLanguages.map(language => (
            <div class="card-body">
              <h4>{language.title}</h4>
              <p>{language.content}</p>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default App
