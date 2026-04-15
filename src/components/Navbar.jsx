import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import ProfileModal from './ProfileModal';
import logo from '../assets/logo.webp'; // Importando sua logo
import './Navbar.css';

function Navbar() {
  const [show, setShow] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileName, setProfileName] = useState('Usuário');
  const [profileAvatar, setProfileAvatar] = useState('https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    // Carregar perfil salvo
    const savedName = localStorage.getItem('profileName');
    const savedAvatar = localStorage.getItem('profileAvatar');
    if (savedName) setProfileName(savedName);
    if (savedAvatar) setProfileAvatar(savedAvatar);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUpdateProfile = ({ name, avatar }) => {
    setProfileName(name);
    setProfileAvatar(avatar);
  };

  return (
    <>
      <div className={`navbar ${show && 'navbar-black'}`}>
        <div className="navbar-left">
          <Link to="/">
            <img
              className="navbar-logo"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>
        
        <div className="navbar-center">
          <SearchBar />
        </div>
        
        <div className="navbar-right">
          <Link 
            to="/mylist" 
            className={`navbar-link ${location.pathname === '/mylist' ? 'active' : ''}`}
          >
            Minha Lista
          </Link>
          
          <div className="profile-container" onClick={() => setShowProfileModal(true)}>
            <img
              className="navbar-avatar"
              src={profileAvatar}
              alt="Avatar"
            />
            <span className="profile-name">{profileName}</span>
          </div>
        </div>
      </div>

      {showProfileModal && (
        <ProfileModal 
          onClose={() => setShowProfileModal(false)}
          onUpdateProfile={handleUpdateProfile}
        />
      )}
    </>
  );
}

export default Navbar;