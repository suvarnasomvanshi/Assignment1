import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextProvider';
const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const {isAuthenticated,setIsAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();

useEffect(()=>{
    if(setIsAuthenticated){
        navigate("/home")
    }
},[isAuthenticated])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignIn) {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData && userData.email === formData.email && userData.password === formData.password) {
        alert('Sign In Successful!');
        setIsAuthenticated(true)

      } else {
        setErrorMessage('Invalid email or password.');
      }
    } else {
    
      if (!validateEmail(formData.email)) {
        setErrorMessage('Invalid email format.');
        return;
      }
      if (formData.password.length < 6) {
        setErrorMessage('Password must be at least 6 characters long.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage('Passwords do not match.');
        return;
      }

      localStorage.setItem('userData', JSON.stringify({ email: formData.email, password: formData.password }));
      alert('Registration Successful!');
      setIsAuthenticated(true);
      setFormData({ email: '', password: '', confirmPassword: '' });
      setErrorMessage('');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{maxWidth:"600px",margin:"100px auto",background:"#aacafa"}} >
    <div className="container mt-5 " >
      <h2>{isSignIn ? 'Sign In' : 'Register'}</h2>
      <form onSubmit={handleSubmit} style={{maxWidth:"600px"}}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        {!isSignIn && (
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

        <button type="submit" className="btn btn-primary "  style={{width:"150px"}}>{isSignIn ? 'Sign In' : 'Register'}</button>
      </form>
      <p className="mt-3">
        {isSignIn ? 'Don\'t have an account? ' : 'Already have an account? '}
       
       
        <button className="btn btn-link " onClick={() => setIsSignIn(!isSignIn)}>
          {isSignIn ? 'Register' : 'Sign In'}
        </button>
      </p>
    </div>
    </div>
  );
};

export default AuthForm;
