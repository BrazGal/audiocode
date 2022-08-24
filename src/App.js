import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidbar from './Sidebar/Sidebar'
import Suite from './pages/Suite'
import TestCasesHome from './pages/TestCasesHome'
import TestCasesAdd from './pages/TestCasesAdd'
import TestCasesTable from './pages/TestCasesTable'
import './pages/Suite.css'




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Sidbar />
        <Routes>
          <Route path='/TestCases' element={<TestCasesHome />} />
          <Route path='/TestCasesAdd' element={<TestCasesAdd />} />
          <Route path='/TestCasesTable' element={<TestCasesTable />} />
          <Route path='/Suite' element={<Suite />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
