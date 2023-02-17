import { Route, Routes } from 'react-router-dom'
import PagenNotFound from '../components/PageNotFound'
import Providers from '../contexts'
import Chart from '../pages/Chart'
import Home from '../pages/Home'

export default function Router() {
  return (
    <Providers>
      <Routes>
        <Route element={<Home />} index />
        <Route element={<Chart />} path='chart' />
        <Route element={<PagenNotFound />} path='*' />
      </Routes>
    </Providers>
  )
}
