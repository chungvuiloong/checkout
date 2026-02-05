import Cart from "./components/layout/Cart"
import Header from "./components/layout/Header"
import Content from "./components/layout/Content"
import data from "./data/products"
import { CartProvider } from "./context/CartContext"
// import Container from "./components/layout/Container"

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="py-10">
              <div className='container mx-auto px-4 grid grid-cols-1 sm:grid-cols-12 gap-12'>
                  <Content products={data} />
                  <Cart />
              </div>
          </main>
      </div>
    </CartProvider>
  )
}

export default App
