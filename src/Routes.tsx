import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import {
  HomeScreen,
  ListScreen,
  SignInScreen,
  SignUpScreen,
  TestScreen
} from '@/screens'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* =============================================================== */}

        <Route path="/" element={<Navigate to="/teste" />} />
        <Route path="*" element={<Navigate to="/teste" />} />

        {/* =============================================================== */}

        <Route path="/lists" element={<HomeScreen />} />
        <Route path="/lists/:listId" element={<ListScreen />} />

        <Route path="/entrar" element={<SignInScreen />} />
        <Route path="/cadastro" element={<SignUpScreen />} />

        <Route path="/teste" element={<TestScreen />} />

        {/* =============================================================== */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

// =========================================== ROUTES

// interface RouteProps {
//   isAuthenticated: boolean
//   children: React.ReactNode
// }

// const PrivateRoute = ({ isAuthenticated, children }: RouteProps) => {
//   if (!isAuthenticated) {
//     return <Navigate to="/" replace />
//   }

//   return children
// }

// const PublicRoute = ({ isAuthenticated, children }: RouteProps) => {
//   if (isAuthenticated) {
//     return <Navigate to="/" />
//   }

//   return children
// }
