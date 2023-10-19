import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import Auction from '../assets/auction.png';




function HeaderMenu() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorAuc, setAnchorAuc] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleOpenAucMenu = (event) => {
        setAnchorAuc(event.currentTarget)
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleCloseAucMenu = () => {
        setAnchorAuc(null);
    }



    return (
        <AppBar position="static" sx={{ background: "white" }}>
            <Container maxWidth="xl"   >
                <Toolbar disableGutters sx={{ padding: "0 10% 0 10%" }} >

                    <img src={Auction} alt='logo' style={{ height: "60px", width: "160px" }} />
                    <Container sx={{ display: "flex", justifyContent: "center", textAlign: "center", margin: "auto" }}>
                        <Box sx={{ marginRight: "10px" }}>

                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                Home
                            </Button>

                        </Box>
                        <Box sx={{ display: "inline-block", marginRight: "10px" }} >

                            <Button
                                onClick={handleOpenAucMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}>
                                Auction slots

                            </Button>


                            <Menu
                                sx={{ mt: '2px' }}
                                id="menu-appbar"
                                anchorEl={anchorAuc}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorAuc)}
                                onClose={handleCloseAucMenu}
                            >

                                <MenuItem onClick={handleCloseAucMenu}>
                                    <Typography textAlign="center">Cars</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseAucMenu}>
                                    <Typography textAlign="center">Motorbikes</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseAucMenu}>
                                    <Typography textAlign="center">Commercials</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseAucMenu}>
                                    <Typography textAlign="center">Search</Typography>
                                </MenuItem>

                            </Menu>
                        </Box>
                        <Box sx={{ marginRight: "10px" }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}>
                                Auction times
                            </Button>
                        </Box>
                        <Box sx={{ marginRight: "10px" }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}>
                                Help center
                            </Button>

                        </Box>

                    </Container>
                    <Box >
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">settings</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                </Toolbar>
            </Container >
        </AppBar >
    );
}
export default HeaderMenu;