import { Header, Footer } from "./components"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <main className="w-full flex justify-center">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
