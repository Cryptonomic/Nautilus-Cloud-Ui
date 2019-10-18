import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { User } from '../../types';

import logosvg from '../../assets/img/logo-dark.svg';

export const Container = styled.div`
  width: 100%;
  height: 71px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  height: 27px;
  width: 39px;
`;
export const HeaderTitle = styled.p`
  line-height: 39px;
  color: rgb(13, 47, 113);
  font-size: 30px;
  font-family: 'Futura', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4.55px;
  margin: 0 0 0 9px;
  span {
    color: rgb(98, 108, 238);
  }
`;

interface Props {
  user: User;
  onLogout: () => void;
}

const Header: React.FC<Props> = (props) => {
  const { user, onLogout } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function logout() {
    onLogout();
    setAnchorEl(null);
  }
  return (
    <Container>
      <TitleContainer>
        <LogoImg src={logosvg} />
        <HeaderTitle>Nautilus <span>Cloud</span></HeaderTitle>
      </TitleContainer>
      <div>
        <Button aria-controls='header-menu' aria-haspopup='true' onClick={handleClick}>
          {user.userEmail}
        </Button>
        <Menu
          id='header-menu'
          anchorEl={anchorEl}
          keepMounted
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </div>
    </Container>
  );
};

export default Header;