import React from 'react';
import { StyledProfilePage } from './ProfilePage.style';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import { Header } from '../../components/Header/header';

const ProfilePage = () => {
  return (
    <StyledProfilePage>
      <Header />
      <div className="mainContent">
        <ProfileComponent/>

      </div>
    </StyledProfilePage>
  );
};

export default ProfilePage;