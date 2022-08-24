import React from 'react'
import Table from '../components/Table'
import '../pages/Suite.css'


const TestCasesTable = () => {
  return (
    <div>
        <br />
            <div className='SuiteTitle'>
                Test Cases
            </div>
            <hr width="-80%"  />
        <Table/>
    </div>
  )
}

export default TestCasesTable