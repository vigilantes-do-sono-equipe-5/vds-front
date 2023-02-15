import { Route, Routes } from 'react-router-dom'
import Providers from '../contexts'
import Chart from '../pages/Chart'
import Help from '../pages/Help'
import Home from '../pages/Home'
import Message from '../pages/Message'

export default function Router() {
  return (
    <Providers>
      <Routes>
        <Route element={<Home />} index />
        <Route element={<Chart />} path='chart' />
        <Route element={<Message />} path='message' />
        <Route element={<Help />} path='help' />
      </Routes>
    </Providers>
  )
}
