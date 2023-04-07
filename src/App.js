import Cart from 'pages/Cart'
import Home from 'pages/Home'
import Login from 'pages/Login'
import NoPage from 'pages/NoPage'
import Store from 'pages/Store'
import { useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { ProfileCtx } from 'utils/providers/ProfileProvider'

function App() {
  const { state } = useContext(ProfileCtx)

  const privateElement = (element) => {
    if (state.isLoggedIn) {
      return element
    }
    return <Navigate to="/login" replace />
  }

  if (state.status === 'idle') {
    return null
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={privateElement(<Home />)} />
        <Route path="cart" element={privateElement(<Cart />)} />
        <Route path="store" element={privateElement(<Store />)} />
        <Route
          path="login"
          element={state.isLoggedIn ? <Navigate to="/" replace /> : <Login />}
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
