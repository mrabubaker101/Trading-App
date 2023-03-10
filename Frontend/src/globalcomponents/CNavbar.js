import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
import { logout } from '../store/actions/authentication';



const CNavbar = ({ page }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(logout());
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            Forex Marketing
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {pageType(page,handleClick)}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};


const pageType = (page,handleClick) => {


    switch (page) {
        case 'login':
            return <>

                <Button
                    color={'#fafafa'}
                    to="/homepage"
                    component={RouterLink}
                >
                    Home Page
                </Button>
            </>
        case 'signup':
            return <>

                <Button
                    color={'#fafafa'}

                    to="/homepage"
                    component={RouterLink}
                >
                    Home Page
                </Button>
            </>

        case 'homepage':
            return <>
                <Button
                    color={'#fafafa'}

                    to="/login"
                    component={RouterLink}
                >
                    Log In
                </Button>

                <Button
                    color={'#fafafa'}

                    to="/signup"
                    component={RouterLink}
                >
                    Sign Up
                </Button>
            </>
        case 'positionsidebar':
            return <>
                <Button
                    color={'#fafafa'}
                    to="/"
                    component={RouterLink}
                >
                    Deshboard
                </Button>

                <Button
                    color={'#fafafa'}
                    to="/homepage"
                    onClick={handleClick}
                >
                    Log Out
                </Button>
            </>
        default:
            return <></>
    }
}

export default CNavbar;