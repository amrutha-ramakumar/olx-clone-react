import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';

function Header() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
      <div
          className="brandName"
          onClick={() => {
            history.push('/'); // Redirect to home page when logo is clicked
          }}
          style={{ cursor: 'pointer' }} // Changes cursor to indicate clickable area
        >
          <OlxLogo /> {/* Logo becomes a clickable area */}
        </div>

        <div className="placeSearch">
          <Search />
          <input type="text" />
          <Arrow />
        </div>

        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car, mobile phone, and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff" />
          </div>
        </div>

        <div className="language">
          <span>ENGLISH</span>
          <Arrow />
        </div>

        <div className="loginPage">
          <span
            onClick={() => {
              if (!user) {
                history.push('/login'); // Redirects to /login if not logged in
              }
            }}
          >
            {user ? `Welcome ${user.displayName}` : 'Login'}
          </span>
          <hr />
          {user && (
            <span
              onClick={() => {
                firebase.auth().signOut();
                history.push('/login'); // Redirects to /login after logout
              }}
            >
              Logout
            </span>
          )}
        </div>

        <div className="sellMenu" onClick={() => history.push('/create')}>
          <SellButton />
          <div className="sellMenuContent">
            <SellButtonPlus />
            <span>SELL</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
