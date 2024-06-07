import React from "react";
import { Link } from 'react-router-dom';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Icon from '@mui/material/Icon';
import Badge from '@mui/material/Badge';

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  Avatar,
  Divider,
  ListItemIcon,
} from "@mui/material";

import tht from "../../../assets/images/users/tht.jpg";

const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [badgeContent, setBadgeContent] = React.useState(3);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setBadgeContent(0);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // 4
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  const handleHelpClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // 5
  // const [anchorEl5, setAnchorEl5] = React.useState(null);

  // const handleClick5 = (event) => {
  //   setAnchorEl5(event.currentTarget);
  // };

  // const handleClose5 = () => {
  //   setAnchorEl5(null);
  // };

  return (
    <AppBar sx={props.sx} elevation={0} className={props.customClass}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={props.toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <MenuOutlinedIcon width="20" height="20" />
        </IconButton>
        {/* <IconButton
          aria-label="menu"
          color="inherit"
          aria-controls="dd-menu"
          aria-haspopup="true"
          onClick={handleClick5}
        >
          <AddToPhotosOutlinedIcon />
        </IconButton> */}
        {/* <Menu
          id="dd-menu"
          anchorEl={anchorEl5}
          keepMounted
          open={Boolean(anchorEl5)}
          onClose={handleClose5}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
          sx={{
            "& .MuiMenu-paper": {
              width: "250px",
              right: 0,
              top: "70px !important",
            },
          }}
        >
          <MenuItem onClick={handleClose5}>
            <Avatar
              sx={{
                width: "35px",
                height: "35px",
              }}
            />
            <Box
              sx={{
                ml: 2,
              }}
            >
              New account
            </Box>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose5}>
            <Avatar
              sx={{
                width: "35px",
                height: "35px",
              }}
            />
            <Box
              sx={{
                ml: 2,
              }}
            >
              New Page
            </Box>
          </MenuItem>
          <MenuItem onClick={handleClose5}>
            <Avatar
              sx={{
                width: "35px",
                height: "35px",
              }}
            />
            <Box
              sx={{
                ml: 2,
              }}
            >
              New Component
            </Box>
          </MenuItem>
        </Menu> */}
        <Box flexGrow={1} />
        {/* ------------------------------------------- */}
        {/* Help Dropdown */}
        {/* ------------------------------------------- */}
        {/* <IconButton
          aria-label="menu"
          color="inherit"
          aria-controls="help-menu"
          aria-haspopup="true"
          onClick={handleHelpClick}
        >
          <HelpOutlineOutlinedIcon width="20" height="20" />
        </IconButton> */}



        {/* ------------------------------------------- */}
        {/* Notifications Dropdown */}
        {/* ------------------------------------------- */}
        <IconButton
          aria-label="menu"
          color="inherit"
          aria-controls="notification-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Badge color="secondary" badgeContent={badgeContent}><NotificationsNoneOutlinedIcon width="20" height="20" /></Badge>
        </IconButton>
        <Menu
          id="notification-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          sx={{
            "& .MuiMenu-paper": {
              width: "350px",
              right: 0,
              top: "70px !important",
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <Icon color="warning" style={{ marginRight: '10px' }}>
              <ErrorOutlineOutlinedIcon></ErrorOutlineOutlinedIcon>
            </Icon>
            Today you have 3 deadlines
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Icon color="success" style={{ marginRight: '10px' }}>
              <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
            </Icon>
            You have achieved your teaching KPI
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Icon color="error" style={{ marginRight: '10px' }}>
              <CancelOutlinedIcon></CancelOutlinedIcon>
            </Icon>
            You have missed 1 deadline
          </MenuItem>
        </Menu>
        {/* ------------------------------------------- */}
        {/* End Notifications Dropdown */}
        {/* ------------------------------------------- */}
        {/* ------------------------------------------- */}
        {/* Profile Dropdown */}
        {/* ------------------------------------------- */}
        <Box
          sx={{
            width: "1px",
            backgroundColor: "rgba(0,0,0,0.1)",
            height: "25px",
            ml: 1,
          }}
        ></Box>
        <Button
          aria-label="menu"
          color="inherit"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick4}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              src={tht}
              alt={tht}
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
          </Box>
        </Button>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl4}
          keepMounted
          open={Boolean(anchorEl4)}
          onClose={handleClose4}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          sx={{
            "& .MuiMenu-paper": {
              width: "250px",
              right: 0,
              top: "70px !important",
            },
          }}
        >
          <Link to="/personal" style={{ color: 'inherit', textDecoration: 'none' }}>
            <MenuItem onClick={handleClose4}>
              <Avatar
                src={tht}
                alt={tht}
                sx={{
                  width: "35px",
                  height: "35px",
                }}
              />
              <Box
                sx={{
                  ml: 2,
                }}
              >
                My account
              </Box>
            </MenuItem>
          </Link>
          <Divider />
          <MenuItem onClick={() => {
            window.location.href = "/#/setting";
            handleClose4();

          }}>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={() => {
            window.location.href = "/#/app";
          }}>
            <ListItemIcon>
              <LogoutOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
