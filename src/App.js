import React from 'react'
import './index.css'
import ListerMain from './Lister/ListerMain'
import ListerAdd from './Lister/ListerAdd'

// console.log()


function App() {

  const [deals, changeDeals] = React.useState([
    {id: 1, done: false, title: 'ТуДу лист'},
    {id: 2, done: false, title: 'Динамика'},
    {id: 3, done: false, title: 'Кнопочки'},
    {id: 4, done: false, title: 'Галочки'},
    {id: 5, done: false, title: 'Без косяков'},
  ])

  function checkDeal(id) {
    changeDeals(deals.map(deal => {
        if (deal.id === id) {
          deal.done = !deal.done
       }
       return deal
      })
    )
  }

  function deleteDeal(id) {
    changeDeals(deals.filter(deal => deal.id !== id))}

  function addDeal(title) {
    changeDeals(deals.concat([{title, id: Date.now(), completed: false}]))
  }
  return (
    <div className='wrapper'>
      <h1>React tech test</h1>
      <h2>todo list functionality</h2>
      <ListerAdd onCreate={addDeal}></ListerAdd>
      {deals.length ? <ListerMain deals={deals} onCheck={checkDeal} onPush={deleteDeal}/> : <b>Tasks clear.</b>}
    </div>
  )
}

export default App