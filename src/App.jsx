import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import FormularioColor from "./Components/FormularioColor"

function App() {
  return (
    <>
    <Navbar></Navbar>
    <main className="container my-3">
      <h1 className="text-center">Paleta de colores</h1>
      <FormularioColor></FormularioColor>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
