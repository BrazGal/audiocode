import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'
import '../pages/Suite.css'


const TestCasesHome = () => {
  return (
      <div>
      <br />
      <div className='SuiteTitle'>
        Test Cases
      </div>
      <Link to = "/TestCasesAdd" className="AddButton" > <Icon icon="carbon:add"/></Link>
      <hr width="-80%"  />
    </div> 
  )
}

export default TestCasesHome