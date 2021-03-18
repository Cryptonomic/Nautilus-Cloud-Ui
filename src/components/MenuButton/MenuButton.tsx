import React, { ReactElement, useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  MenuListItemIcon,
  LinkWrapper as Link,
  BottomNavigationActionWrapper as BottomNavigationAction,
} from "./style";
export interface MenuButtonProps {
  label: string | ReactElement;
  items?: any[];
  link?: string;
  posRight?: boolean;
  style?: React.CSSProperties;
}
const MenuButton: React.FC<MenuButtonProps> = ({
  label,
  items,
  link,
  style,
  posRight = false,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const onClose = () => setAnchorEl(null);
  const onClickItem = (url: string) => {
    window.open(url, "_blank");
    onClose();
  };

  return (
    <>
      {items && (
        <>
          <BottomNavigationAction
            showLabel
            label={label}
            onClick={onClick}
            style={style}
          />
          <Menu
            id={`${label}-menu`}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={onClose}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: posRight ? "right" : "left",
            }}
          >
            {items.map(({ name, link, action, offIcon }) => (
              <MenuItem
                key={name}
                onClick={action || (() => onClickItem(link))}
              >
                <Typography variant="inherit">{name}</Typography>
                {!offIcon && (
                  <MenuListItemIcon>
                    <OpenInNewIcon fontSize="small" />
                  </MenuListItemIcon>
                )}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
      {!items && (
        <>
          <BottomNavigationAction
            showLabel
            label={<Link>{label}</Link>}
            onClick={onClick}
            style={style}
          />
        </>
      )}
    </>
  );
};

export default MenuButton;
