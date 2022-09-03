import React from 'react';

const Login = () => {
    return (
        <htmlForm>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-htmlForm-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="htmlForm-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-htmlForm-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="htmlForm-control" id="inputPassword3"/>
    </div>
  </div>
 
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="htmlForm-check">
        <input className="htmlForm-check-input" type="checkbox" id="gridCheck1"/>
        <label className="htmlForm-check-label" htmlFor="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</htmlForm>
    );
};

export default Login;