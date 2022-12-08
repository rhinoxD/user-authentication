import React, { useState } from 'react';

const ShowHidePassword = ({ password, onChange, score }) => {
  const [type, setType] = useState('password');

  const showHide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setType(type === 'input' ? 'password' : 'input');
  };
  return (
    <>
      <div className='form-outline mb-4'>
        <label className='password'>
          <input
            type={type}
            id='form3Example4cg'
            className='form-control form-control-lg'
            name='password'
            value={password}
            onChange={onChange}
          />
          <span className='password__show' onClick={(e) => showHide(e)}>
            {type === 'input' ? 'Hide' : 'Show'}
          </span>
          <span className='password__strength' data-score={score} />
        </label>
      </div>
    </>
  );
};

export default ShowHidePassword;
