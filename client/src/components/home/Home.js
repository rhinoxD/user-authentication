// https://codepen.io/takaneichinose/pen/abovwoB
// https://codepen.io/borntofrappe/pen/gjzjrE
// https://codepen.io/martindzejky/pen/XXNzeg?editors=0110
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  let navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  console.log(user);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [navigate, isAuthenticated]);
  return (
    <>
      <header className='Homepage'>
        <h1 className='Title'>Welcome</h1>
        {isAuthenticated && <h2 className='Subtitle'>{user.name}</h2>}
        <div className='Row'>
          <div className='Dot Dot--primary'></div>
          <div className='Dot Dot--accent'></div>
          <div className='Dot Dot--primary'></div>
        </div>
        <nav className='Nav'>
          <ul>
            <div className='Row'>
              {!isAuthenticated ? (
                <>
                  <li>
                    <Link to='/signin' className='Link Link--primary'>
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link to='/signup' className='Link Link--accent'>
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <a href='/' className='Link Link--primary'>
                    Signout
                  </a>
                </li>
              )}
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Home;
