import Cart from 'pages/Cart'
import Home from 'pages/Home'
import Login from 'pages/Login'
import NoPage from 'pages/NoPage'
import Store from 'pages/Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="store" element={<Store />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
