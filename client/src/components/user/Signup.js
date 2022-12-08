import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import zxcvbn from 'zxcvbn';

import ShowHidePassword from './ShowHidePassword';
import { signup, clearErrors } from '../../actions/userActions';

const Signup = () => {
  let navigate = useNavigate();
  const [score, setScore] = useState(null);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = user;
  const alert = useAlert();
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    // console.log(error);
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [isAuthenticated, navigate, alert, error, dispatch]);
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('name', name);
    formData.set('email', email);
    formData.set('password', password);
    dispatch(signup(formData));
  };
  const onChange = (e) => {
    if (e.target.name === 'password') {
      if (e.target.value === '') {
        setScore(null);
      } else {
        let pw = zxcvbn(e.target.value);
        setScore(pw.score);
      }
    }
    setUser({ ...user, [e.target.name]: e.target.value });
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
                    <h2 className='text-uppercase text-center mb-5'>
                      Create an account
                    </h2>

                    <form onSubmit={submitHandler}>
                      <div className='form-outline mb-4'>
                        <input
                          type='text'
                          id='form3Example1cg'
                          className='form-control form-control-lg'
                          name='name'
                          value={name}
                          onChange={onChange}
                        />
                        <label className='form-label' htmlFor='form3Example1cg'>
                          Your Name
                        </label>
                      </div>

                      <div className='form-outline mb-4'>
                        <input
                          type='email'
                          id='form3Example3cg'
                          className='form-control form-control-lg'
                          name='email'
                          value={email}
                          onChange={onChange}
                        />
                        <label className='form-label' htmlFor='form3Example3cg'>
                          Your Email
                        </label>
                      </div>

                      <div className='form-outline mb-4'>
                        <ShowHidePassword
                          onChange={onChange}
                          password={password}
                          score={score}
                        />
                        <label className='form-label' htmlFor='form3Example4cg'>
                          Password
                        </label>
                      </div>

                      <div className='form-check d-flex justify-content-center mb-5'>
                        <input
                          className='form-check-input me-2'
                          type='checkbox'
                          value=''
                          id='form2Example3cg'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='form2Example3g'
                        >
                          I agree all statements in{' '}
                          <a href='#!' className='text-body'>
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className='d-flex justify-content-center'>
                        <button
                          type='submit'
                          disabled={loading ? true : false}
                          className='btn btn-success btn-block btn-lg gradient-custom-4 text-body'
                        >
                          Register
                        </button>
                      </div>

                      <p className='text-center text-muted mt-5 mb-0'>
                        Have already an account?{' '}
                        <Link to='/signin' className='fw-bold text-body'>
                          <u>Login here</u>
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

export default Signup;
