import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  let userListLocalStorage = JSON.parse(localStorage.getItem('userListKey'))
  const navigate = useNavigate()

  const [list, setList] = useState({
    userEmail: '',
    userName: '',
    userPassword: '',
    userGender: '',
    userBalance: 0,
    userList: [],
  })

  const { userList, userName, userPassword, userFullName, userEmail, userGender, userBalance } = list

  const handleSubmitUser = (e) => {
    e.preventDefault()
  }

  const handleUsername = (e) => {
    const { value, name } = e.target
    setList({ ...list, [name]: value })
  }

  const handleUserPassword = (e) => {
    const { value, name } = e.target
    setList({ ...list, [name]: value })
  }

  const handleUserFullName = (e) => {
    const { value, name } = e.target
    setList({ ...list, [name]: value })
  }

  const handleUserEmail = (e) => {
    const { value, name } = e.target
    setList({ ...list, [name]: value })
  }

  const handleUserGender = (e) => {
    const { value, name } = e.target
    setList({ ...list, [name]: value })
  }

  const handleUserBalance = (e) => {
    const { value, name } = e.target
    setList({ ...list, [name]: value })
  }

  const emailChecker = (object) => {
    return object.Email === userEmail
  }

  const handleClickRegister = () => {
    let newList = userList
    let listedUsers = {
      UserName: '',
      Password: '',
      FullName: 'Not Found',
      Email: '',
      Gender: 'Not Found',
      Balance: 0,
      ID: Date.now(),
      isAdmin: false,
    }

    if (( userName[0] === '1' ) || ( userName[0] === '2' ) || ( userName[0] === '3' ) || ( userName[0] === '4' ) || ( userName[0] === '5' ) || ( userName[0] === '6' ) || ( userName[0] === '7' ) || ( userName[0] === '8' ) || ( userName[0] === '9' ) || ( userName[0] === '0' ) || userName === ''){
      alert('Invalid username')
      return;
    } else {
      if ( userPassword === '' ){
        alert('Invalid password')
        return
      } else {
        if (( userBalance === '' ) || (parseInt(userBalance) < 0) ){
          alert('Invalid starting balance')
          return
        } else {
          if (userEmail.indexOf('@') == -1 && userEmail.indexOf('.com') == -1) {
            alert(`Email ${userEmail} is not a valid email address`) 
            return
          } else if (userList.some(emailChecker)) {
            alert(`Email ${userEmail} is already in use`)
            return
          } else if (!userList.some(emailChecker) && userEmail.indexOf('@') > -1 && userEmail.indexOf('.com') > -1) {
            listedUsers.UserName = userName
            listedUsers.Password = userPassword
            listedUsers.FullName = userFullName
            listedUsers.Email = userEmail
            listedUsers.Gender = userGender
            listedUsers.Balance = userBalance
            userListLocalStorage.push(listedUsers)
            localStorage.setItem('userListKey', JSON.stringify(userListLocalStorage))
            setList({ ...list, userList: newList })
            navigate('/Login')
            setList( {...list, userName: '', userPassword: '', userFullName: '', userEmail: '', userBalance: 0} )
          }
        }
      }
    }
  }

  return (
    <>
      {/* <Navbar /> */}
      <form onSubmit={handleSubmitUser}>
        <div className='create-user-form container grid login-form flex-container '>
          <div className='field m-6 grid-login notification grid-center is-info is-light'>
            <div className='create-user-title title text-center'>Create User</div>
            <div className='username field'>
              <label className='username-label'>Username</label>
              <input
                className='input'
                type='text'
                placeholder='Username'
                name='userName'
                value={userName}
                onChange={handleUsername}
              />
            </div>
            <div className='password'>
              <label className='password-label'>Password</label>
              <input
                className='input'
                type='password'
                placeholder='Password'
                name='userPassword'
                value={userPassword}
                onChange={handleUserPassword}
              />
            </div>
            <div className='name'>
              <label className='name-label'>Full Name</label>
              <input
                className='input'
                type='text'
                placeholder='Name'
                name='userFullName'
                value={userFullName}
                onChange={handleUserFullName}
              />
            </div>
            <div className='email'>
              <label className='email-label'>E-Mail</label>
              <input
                className='input'
                type='email'
                placeholder='E-Mail'
                name='userEmail'
                value={userEmail}
                onChange={handleUserEmail}
              />
            </div>
            <form className='gender'>
              <p>Gender</p>
              <input className='radio' type='radio' name='userGender' value='male' onChange={handleUserGender} />
              <label htmlFor='label-male'>M</label>
              <input
                className='input-genderF'
                type='radio'
                name='userGender'
                value='female'
                onChange={handleUserGender}
              />
              <label htmlFor='label-female'>F</label>
            </form>
            <div className='initial-balance'>
              <label className='initial-balance-label'>Balance</label>
              <input
                className='input-balance'
                type='number'
                placeholder='Initial Deposit (Optional)'
                name='userBalance'
                value={userBalance}
                onChange={handleUserBalance}
              />
            </div>

            <button className='button is-success m-2' onClick={handleClickRegister}>
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
