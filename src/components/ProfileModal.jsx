import React, { useState, useEffect } from 'react';
import './ProfileModal.css';

// Importando as imagens locais
import perfil1 from '../assets/avatars/perfil1.webp';
import perfil2 from '../assets/avatars/perfil2.webp';
import perfil3 from '../assets/avatars/perfil3.webp';
import perfil4 from '../assets/avatars/perfil4.webp';
import perfil5 from '../assets/avatars/perfil5.webp';

function ProfileModal({ onClose, onUpdateProfile }) {
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [tempName, setTempName] = useState('');

  // Carregar dados salvos
  useEffect(() => {
    const savedName = localStorage.getItem('profileName') || 'Usuário';
    const savedAvatar = localStorage.getItem('profileAvatar') || perfil1;
    
    setName(savedName);
    setTempName(savedName);
    setSelectedAvatar(savedAvatar);
  }, []);

  // Avatares locais
  const avatars = [
    { id: 1, name: 'Perfil 1', image: perfil1 },
    { id: 2, name: 'Perfil 2', image: perfil2 },
    { id: 3, name: 'Perfil 3', image: perfil3 },
    { id: 4, name: 'Perfil 4', image: perfil4 },
    { id: 5, name: 'Perfil 5', image: perfil5 },
  ];

  const handleSave = () => {
    const newName = tempName.trim() || 'Usuário';
    setName(newName);
    localStorage.setItem('profileName', newName);
    localStorage.setItem('profileAvatar', selectedAvatar);
    
    if (onUpdateProfile) {
      onUpdateProfile({ name: newName, avatar: selectedAvatar });
    }
    
    alert('Perfil atualizado com sucesso!');
    onClose();
  };

  return (
    <div className="profile-modal-overlay" onClick={onClose}>
      <div className="profile-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="profile-modal-header">
          <h2>Editar Perfil</h2>
          <button className="profile-modal-close" onClick={onClose}>×</button>
        </div>

        <div className="profile-modal-body">
          {/* Avatar atual */}
          <div className="profile-current-avatar">
            <img src={selectedAvatar} alt="Avatar atual" />
            <div className="profile-avatar-badge">✎</div>
          </div>

          {/* Editar nome */}
          <div className="profile-name-edit">
            <label>Nome</label>
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              placeholder="Digite seu nome"
              maxLength="20"
            />
          </div>

          {/* Selecionar avatar */}
          <div className="profile-avatars-grid">
            <label>Escolha seu avatar</label>
            <div className="avatars-container">
              {avatars.map((avatar) => (
                <div
                  key={avatar.id}
                  className={`avatar-option ${selectedAvatar === avatar.image ? 'selected' : ''}`}
                  onClick={() => setSelectedAvatar(avatar.image)}
                >
                  <img src={avatar.image} alt={avatar.name} />
                  <div className="avatar-name">{avatar.name}</div>
                  {selectedAvatar === avatar.image && <div className="avatar-check">✓</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="profile-modal-footer">
          <button className="profile-cancel-btn" onClick={onClose}>Cancelar</button>
          <button className="profile-save-btn" onClick={handleSave}>Salvar</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;