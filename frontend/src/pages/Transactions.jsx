import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TransactionTable from '../components/transactions/TransactionTable.jsx'

function Transactions() {
  return (
    <div>
      <TransactionTable/>
    </div>
  )
}

export default Transactions