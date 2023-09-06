import React, { useState } from 'react';
import './styles/styles.scss';
import { useNavigate } from 'react-router-dom';
// import { fetchSignUp } from '../../App/api';
import { useAppDispatch } from '../../store';
import { signUp } from './authSlice';

function RegistrationFormPage(): JSX.Element {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    dispatch(signUp({ name, password, email }));
    navigate('/');
  };

  return (
    <div className="reg__container">
      <form onSubmit={handleSubmit} className="reg__form">
        <label>
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            type="text"
          />
        </label>
        <label>
          email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="text"
          />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="text"
          />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default RegistrationFormPage;
