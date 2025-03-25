import { useState } from "react"
import codingLanguages from "./data/codingLanguage"
import Header from "./components/Header"
import Card from "./components/Card"

function App() {


  return (
    <>

      <Header />

      <Card codingLanguages={codingLanguages} />


    </>
  )
}

export default App
