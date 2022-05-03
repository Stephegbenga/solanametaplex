
import React from 'react'
import { Header } from '../Header/Header'
import { Card } from '../../utils/Card'


export const ConnectWallet = () => {
  return (
    <div className=''>
<Header />
<main style={
    {
       backgroundColor: 'transparent' 
    }
}>
<div className='d-flex justify-content-center'>
<Card >
    <div className='d-flex flex-column h-100 justify-content-center align-items-center'>
        <h2>Connect Your Wallet</h2>
        <button className='btn connect rounded-pill p-2' type='button'>Connect</button>
    </div>
</Card>

</div>
</main>
    </div>
  )
}
