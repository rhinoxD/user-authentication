import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

import ShowHidePassword from './ShowHidePassword';
import { clearErrors, signin } from '../../actions/userActions';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const alert = useAlert();
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [isAuthenticated, error, alert, dispatch]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  if (isAuthenticated) {
    return <Navigate to='/' />;
  }
  return (
    <>
      <section
        className='vh-100 bg-image'
        style={{
          backgroundImage:
            'url(' +
            'https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp' +
            ')',
        }}
      >
        <div className='mask d-flex align-items-center h-100 gradient-custom-3'>
          <div className='container h-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
              <div className='col-12 col-md-9 col-lg-7 col-xl-6'>
                <div className='card' style={{ borderRadius: '15px' }}>
                  <div className='card-body p-5'>
                    <h2 className='text-uppercase text-center mb-5'>Sign In</h2>

                    <form onSubmit={submitHandler}>
                      <div className='form-outline mb-4'>
                        <input
                          type='email'
                          id='form3Example3cg'
                          className='form-control form-control-lg'
                          name='email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className='form-label' htmlFor='form3Example3cg'>
                          Your Email
                        </label>
                      </div>

                      <div className='form-outline mb-4'>
                        <ShowHidePassword
                          onChange={(e) => setPassword(e.target.value)}
                          password={password}
                        />
                        <label className='form-label' htmlFor='form3Example4cg'>
                          Password
                        </label>
                      </div>

                      <div className='d-flex justify-content-center'>
                        <button
                          type='submit'
                          disabled={loading ? true : false}
                          className='btn btn-success btn-block btn-lg gradient-custom-4 text-body'
                        >
                          Signin
                        </button>
                      </div>

                      <p className='text-center text-muted mt-5 mb-0'>
                        Don't have an account?{' '}
                        <Link to='/signup' className='fw-bold text-body'>
                          <u>Signup here</u>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
