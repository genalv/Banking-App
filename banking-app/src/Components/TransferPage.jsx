import React from 'react'

export default function TransferPage({ index }) {
  let userListLocalStorage = JSON.parse(localStorage.getItem('userListKey'))
  let user = userListLocalStorage[index]

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
                  <i class='fa-solid fa-money-bill-transfer'></i> Transfer
                </h1>
              </div>
              <div className='column notification is-link is-full'>
                <h1 className='subtitle'>Total Amount in Bank: </h1>
                <div className='container notification is-link is-light'>
                  <h1 className='title has-text-centered'>${formatToCurrency(user.Balance)}</h1>
                </div>
              </div>
              <div className='column notification is-link is-half is-offset-one-quarter'>
                <div className='column'>
                  <h1 className='subtitle'>Reciever's ID:</h1>
                  <input class='input is-link  is-large' type='number' placeholder='Input ID' />
                </div>
                <div className='column'>
                  <h1 className='subtitle'>Amount Transferable: </h1>
                  <input class='input is-link  is-large mb-2' type='number' placeholder='$ Amount' />
                  <button class='button is-success has-text-centered'>Confirmed</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
