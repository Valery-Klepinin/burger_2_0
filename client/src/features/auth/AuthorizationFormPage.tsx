import React, { useState } from 'react';
import './styles/styles.scss';
import { useNavigate } from 'react-router-dom';
// import { fetchSignUp } from '../../App/api';
import { useAppDispatch } from '../../redux/store';
import { checkAuto } from './authSlice';

function AuthorizationFormPage(): JSX.Element {
  // const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    dispatch(checkAuto({ password, email }));
    navigate('/');
  };
  return (
    <div className="reg__container">
      <form onSubmit={handleSubmit} className="auth__form">
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
        <button type="submit">Авторизоваться</button>
      </form>
    </div>
  );
}

export default AuthorizationFormPage;
