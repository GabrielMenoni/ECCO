import { Outlet } from 'react-router-dom'
import { AcessVerification } from './components/AcessVerification'
import { useEffect, useState } from 'react'
import { AcessoNegado } from './pages/Acess/AcessoNegado'

export function PrivateRoute() {
  const [logged, setLogged] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const acess = await AcessVerification()
      setLogged(acess.logged)
    }
    fetchData()
  }, [])

  return logged ? <Outlet /> : <AcessoNegado />
}
