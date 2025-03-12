import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Header from "./components/header/Header"
import Container from "./components/container/Container"
import ProductDetail from "./pages/ProductDetail"

function App() {

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail/>} />
      <Route path="*" element={<h2 style={{textAlign:'center'}}>Topilmadi!</h2>} />
      </Routes>
    </>
  )
}

export default App
