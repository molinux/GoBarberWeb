import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  // console.log('Profile: ', profile.name);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              // src="https://api.adorable.io/avatars/49/abott@adorable.png"
              // src="https://avatars.dicebear.com/api/bottts/leonidas.svg?w[]=32px&colors[]=cyan"
              src={
                profile.avatar.url ||
                'https://avatars.dicebear.com/api/bottts/leonidas.svg?w[]=32px'
              }
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
