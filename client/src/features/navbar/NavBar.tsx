import React from 'react';
import './styles/style.scss';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchLogOut } from '../../App/api';

function NavBar(): JSX.Element {
  const authUser = useSelector((store: RootState) => store.auth.authUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = async (): Promise<void> => {
    const data = await fetchLogOut();
    if (data.message === 'success') {
      dispatch({ type: 'auth/logout' });
      navigate('/');
    }
  };

  return (
    <>
      <nav className="nav__container">
        <ul className="nav__ul">
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active_link' : '')} to="/">
              Меню
            </NavLink>
          </li>

          {authUser ? (
            <>
              <li>Hello, {authUser?.name}!</li>
              <li>
                <a
                  onClick={() => {
                    handleLogOut();
                  }} href='/'
                >
                  LogOut
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active_link' : '')}
                  to="/sign-up"
                >
                  Registration
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active_link' : '')}
                  to="/check-user"
                >
                  Authorization
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
