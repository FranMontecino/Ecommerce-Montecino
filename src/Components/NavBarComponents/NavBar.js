import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const NavBar = () =>  {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar position="static" sx={{marginBottom:5}}>
        <Toolbar> 
            <Link to={`/`} style={{ textDecoration: 'none', color: "white" }}><FontAwesomeIcon icon={faGamepad} size="3x"/></Link>
            <Typography variant="h6" component="div" sx={{ marginLeft:1}}> Gplay </Typography>          
            <Button color="inherit" id="basic-button" aria-controls="basic-menu" aria-haspopup="true" aria-expanded={open ? 'true' : undefined} sx={{ marginLeft:2}} onClick={handleClick}> Categorias </Button>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
              <Link to={`/category/ps`} style={{ textDecoration: 'none' }}><MenuItem>PS Games</MenuItem></Link>
              <Link to={`/category/pc`} style={{ textDecoration: 'none' }}><MenuItem>PC Games</MenuItem></Link>
              <Link to={`/category/xbox`} style={{ textDecoration: 'none' }}><MenuItem>Xbox Games</MenuItem></Link>
              <Link to={`/category/nintendo`} style={{ textDecoration: 'none' }}><MenuItem>Nintendo Games</MenuItem></Link>
            </Menu>
            <Box sx={{ flexGrow: 2 }}/>
            <Search sx={{marginRight:1}}>          
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase placeholder="Buscador" inputProps={{ 'aria-label': 'search' }}/>
            </Search>
            <Link to={`/cart`} style={{ textDecoration: 'none', color: "white" }}><CartWidget/></Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar; 