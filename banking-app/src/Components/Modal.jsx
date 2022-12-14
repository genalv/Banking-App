import React from 'react'
import { useState } from 'react'

export default function Modal(props) {
  const [deposit, setDeposit] = useState({
    depositValue: '',
  })

  const [withdraw, setWithdraw] = useState({
    withdrawValue: '',
  })

  const [transfer, setTransfer] = useState({
    transferValue: '',
  })

  const [transferId, setTransferId] = useState({
    transferNewId: '',
  })

  const { depositValue } = deposit
  const { withdrawValue } = withdraw
  const { transferValue } = transfer
  const { transferNewId } = transferId

  const handleChangeWithdraw = (event) => {
    const { value, name } = event.target
    setWithdraw({ ...withdraw, [name]: value })
  }
  const handleChangeDeposit = (event) => {
    const { value, name } = event.target
    setDeposit({ ...deposit, [name]: value })
  }
  const handleChangeTransfer = (event) => {
    const { value, name } = event.target
    setTransfer({ ...transfer, [name]: value })
  }
  const handleTransferId = (event) => {
    const { value, name } = event.target
    setTransferId({ ...transferNewId, [name]: value })
  }

  const handleSubmit = () => {
    if (props.method === 'deposit') {
      props.handleClickNewDeposit(parseInt(depositValue))
    }
    if (props.method === 'withdraw') {
      props.handleClickNewWithdraw(parseInt(withdrawValue))
    }
    if (props.method === 'transfer') {
      props.handleClickNewTransfer(parseInt(transferValue), transferNewId)
    }
  }

  return (
    <>
      {props.isOpen && (
        <div id='modalcomponent' className='modal active-modal'>
          <div onClick={props.toggleModal} className='overlay'></div>
          <div className='modal-content'>
            {props.method === 'deposit' && (
              <>
                <div className='subtitle'>Deposit</div>
                <div>
                  <input
                    type='number'
                    id='amount-label'
                    name='depositValue'
                    value={depositValue}
                    placeholder='Enter Amount'
                    onChange={handleChangeDeposit}
                    className='input is-success mb-2'
                  />
                </div>
              </>
            )}
            {props.method === 'withdraw' && (
              <>
                <div className='subtitle'>Withdraw</div>
                <div>
                  <input
                    type='number'
                    id='amount-label'
                    name='withdrawValue'
                    value={withdrawValue}
                    placeholder='Enter Amount'
                    onChange={handleChangeWithdraw}
                    className='input is-success mb-2'
                  />
                </div>
              </>
            )}
            {props.method === 'transfer' && (
              <>
                <div className='subtitle'>Transfer</div>
                <div>
                  <input
                    type='number'
                    id='id-label'
                    name='transferNewId'
                    value={transferNewId}
                    placeholder='Enter ID'
                    onChange={handleTransferId}
                    className='input is-success mb-2'
                  />
                </div>
              </>
            )}
            {props.method === 'transfer' && (
              <>
                <div>
                  <input
                    type='number'
                    id='amount-label'
                    name='transferValue'
                    value={transferValue}
                    placeholder='Enter Amount'
                    onChange={handleChangeTransfer}
                    className='input is-success mb-2'
                  />
                </div>
              </>
            )}
            <button className='button is-success is-small' onClick={handleSubmit}>
              Submit
            </button>
            <button className='close-modal delete' onClick={props.toggleModal}></button>
          </div>
        </div>
      )}
    </>
  )
}
