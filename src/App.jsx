import Banner from "./component/Banner"
import NavBar from "./component/NavBar"
import Products from "./component/Products"
import Stats from "./component/Stats"
import { ToastContainer } from 'react-toastify'

const getProducts = async () => {
  const res = await fetch("/products.json")
  return res.json()
}

const productPromise = getProducts()

function App() {
  

  return (
    <>
      <NavBar/>
      <Banner/>
      <Stats/>
      <Products productPromise={productPromise} />
    </>
  )
}

export default App
