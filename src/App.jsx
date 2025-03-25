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
              <li class="nav-item">
                <a class="nav-link active" href="#">HTML</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">CSS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active">JavaScript</a>
              </li>
            </ul>
          </div>

          <div class="card-body">
            <h4 class="card-title">HTML</h4>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
