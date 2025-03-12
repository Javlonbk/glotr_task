import Banner from "./components/banner/Banner"
import Container from "./components/container/Container"
import Header from "./components/header/Header"
import ProductList from "./components/product-list/ProductList"


function App() {

  return (
    <>
      <Container>
        <Header />
        <Banner />
      </Container>
      <ProductList/>
    </>
  )
}

export default App
