import Cart from "./components/layout/Cart"
import Header from "./components/layout/Header"
import Content from "./components/layout/Content"
import data from "./data/products"
// import Container from "./components/layout/Container"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="py-20">
            <div className='container mx-auto px-4 grid grid-cols-12 gap-x-12'>
                <Content products={data} />
                <Cart />
            </div>
        </main>
    </div>
  )
}

export default App
