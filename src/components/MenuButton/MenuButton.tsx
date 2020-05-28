import React, { useState } from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Typography from '@material-ui/core/Typography';

import { MenuListItemIcon } from './style';

const MenuButton = ({ label, items }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) =>
        setAnchorEl(event.currentTarget);
    const onClose = () => setAnchorEl(null);
    const onClickItem = (url: string) => {
        window.open(url, '_blank');
        onClose();
    };

    return (
        <>
            <BottomNavigationAction showLabel label={label} onClick={onClick} />
            <Menu
                id={`${label}-menu`}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={onClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {items.map(({ name, link }) => (
                    <MenuItem key={name} onClick={() => onClickItem(link)}>
                        <Typography variant="inherit">{name}</Typography>
                        <MenuListItemIcon>
                            <OpenInNewIcon fontSize="small" />
                        </MenuListItemIcon>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default MenuButton;
