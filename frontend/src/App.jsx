
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import AdminLayout from './layout/AdminLayout'

import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import OlvidePassword from './paginas/OlvidePassword'
import Admin from './paginas/Admin'
import NuevoPassword from './paginas/NuevoPassword'

import { AuthProvider } from './context/AuthProvider'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <AuthProvider>

          <Routes>
            <Route path='/' element={<AuthLayout/>}>
              <Route index element={<Login/>}/>
              <Route path='olvide-password' element={<OlvidePassword/>}/>
              <Route path='olvide-password/:token' element={<NuevoPassword/>}/>
              <Route path='confirmar/:id' element={<ConfirmarCuenta/>}/>
            </Route>

            <Route path='/admin' element={<AdminLayout/>}>
              <Route index element={<Admin/>}/>
              <Route path='registrar' element={<Registrar/>}/>
            </Route>

          </Routes>          
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
