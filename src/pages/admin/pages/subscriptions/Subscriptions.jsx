import React from 'react'
import SubscriptionsManagement from './components/SubscriptionsManagement'
import TransactionsManagement from './components/TransactionsManagement'

function Subscriptions() {
  return (
    <section className='flex flex-col gap-12'>
      <SubscriptionsManagement/>
      <TransactionsManagement/>
    </section>
  )
}

export default Subscriptions