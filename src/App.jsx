
import codingLanguages from "./data/codingLanguage"
import Header from "./components/Header"
import CardList from "./components/Card"

function App() {


  return (
    <>

      <Header />

      <CardList codingLanguages={codingLanguages} />


    </>
  )
}

export default App
