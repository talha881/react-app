import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setemailError] = useState('')
  const [passwordError, setpasswordError] = useState('')
  const handleEmailChange = (event) => {
    setEmail(event.target.value)

  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setemailError('Please provide email')
      return

    }else{
      setemailError('')
    }
    if (!password) {
      setpasswordError('please provide Password')
      return
    }
    else{
          setpasswordError('')  
    }

    console.log(email, password)

  }



  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-htmlForm-label">Email</label>
        <div className="col-sm-10">
          <input type="email" onChange={handleEmailChange} className="htmlForm-control" id="email3" />
          <p style={{ color: 'red' }}>{emailError}</p>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-htmlForm-label">Password</label>
        <div className="col-sm-10">
          <input type="password" onChange={handlePasswordChange} className="htmlForm-control" id="password" />
          <p style={{ color: 'red' }}>{passwordError}</p>

        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-10 offset-sm-2">
          <div className="htmlForm-check">
            <input className="htmlForm-check-input" type="checkbox" id="gridCheck1" />
            <label className="htmlForm-check-label" htmlFor="gridCheck1">
              Example checkbox
        </label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  );
};

export default Login;