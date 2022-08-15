import React, { useState } from 'react'

export default function LoanPage({ index }) {
  let userListLocalStorage = JSON.parse(localStorage.getItem('userListKey'))
  let user = userListLocalStorage[index]
  const time = new Date()
  const [loanState, setLoanState] = useState({ loanValue: '' })
  const { loanValue } = loanState

  const handleChangeLoan = (e) => {
    const { name, value } = e.target
    setLoanState({ [name]: parseInt(value) })
  }

  const handleClickLoan = () => {
    if (loanValue === '' ){
    alert('Invalid')
    console.log(1);
    return
    } else if (parseInt(loanValue) < 0) {
    alert('Cannot Loan a negative amount')
    return
    } else if (parseInt(loanValue) === 0 ){
    alert('Loan value invalid')
    return
    } else {
    user.Balance = parseInt(user.Balance) + parseInt(loanValue)
    user.History.push({ type: 'Loan', date: time.toLocaleDateString(), amount: loanValue, deadline: "" })
    localStorage.setItem('userListKey', JSON.stringify(userListLocalStorage))
    }
  }

  //currency format
  function formatToCurrency(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

  return (
    <>
      <div className='sidebar-margin '>
        <section className='section notifiication'>
          <div className='container '>
            <div class='columns is-multiline '>
              <div class='column notification is-link is-full '>
                <h1 className='title'>
                  <i class='fa-solid fa-sack-dollar'></i> Loan
                </h1>
              </div>
              <div className='column notification is-link '>
                <h1 className='subtitle'>Amount Loan: </h1>
                <div className='container'>
                  <input
                    class='input is-link  is-large mb-2'
                    type='number'
                    placeholder='$ Amount'
                    name='loanValue'
                    value={loanValue}
                    onChange={handleChangeLoan}
                  />
                  <button class='button is-success has-text-centered' onClick={handleClickLoan}>
                    Submit
                  </button>
                </div>
              </div>
              <div className='column is-0 '></div>
              <div className='column notification is-link'>
                <h1 className='subtitle'>Total Amount in Bank: </h1>
                <div className='container notification is-link is-light'>
                  <h1 className='title has-text-centered'>$ {formatToCurrency(parseInt(user.Balance))}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
