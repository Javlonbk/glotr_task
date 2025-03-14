import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Header from "./components/header/Header"
import Container from "./components/container/Container"
import ProductDetail from "./pages/ProductDetail"
import { ConfirmContainer } from "./components/order/style"
import Order from "./components/order/Order"
import { useState } from "react"


function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<h2 style={{ textAlign: 'center' }}>Topilmadi!</h2>} />
      </Routes>
      <ConfirmContainer onClick={() => setShowModal(true)}>
      заказа
      </ConfirmContainer>
      {showModal && <Order showModal={showModal} setShowModal={setShowModal} />}
    </>
  )
}

export default App
