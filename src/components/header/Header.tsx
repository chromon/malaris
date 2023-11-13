import {
    AppBar, Box, Toolbar, IconButton, Container,
    Button, Paper, InputBase, Divider
} from '@mui/material';

import MenuDrawer from './drawer/MenuDrawer'
import UserDrawer from './drawer/UserDrawer'
import CreateNewDrawer from './drawer/CreateNewDrawer';

export default function Header() {

    return (
        <>
            <AppBar position="static"
                sx={{
                    backgroundColor: "octocat_bg.main",
                    color: "octocat_c.main",
                    boxShadow: 0,
                    borderBottom: 1,
                    borderColor: "octocat_bc.main"
                }} >
                <Container maxWidth="xl" disableGutters >
                    <Toolbar disableGutters>

                        {/* Menu drawer */}
                        <MenuDrawer />

                        {/* logo */}
                        <IconButton
                            size="small"
                            edge="start"
                            color="inherit"
                            aria-label="logo"
                            sx={{ display: { xs: "flex", md: "flex" } }}
                        >
                            <img src="/assets/pinned-octocat.svg" width={32} alt="logo" />
                        </IconButton>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                            <Button
                                onClick={() => console.log('dashboard')}
                                sx={{ color: 'black', fontWeight: 600, textTransform: 'none', display: 'block' }}
                            >
                                Dashboard
                            </Button>
                        </Box>

                        {/* search */}
                        <Paper
                            component="form"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center', width: 300, boxShadow: 0,
                                border: 1, borderColor: "octocat_bc.main",
                                bgcolor: "octocat_bg.main"
                            }}
                        >
                            <IconButton aria-label="search" size="small" disabled>                                    {/* <SearchIcon fontSize="inherit" /> */}
                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                    <path fill="#6e7781" d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                                </svg>
                            </IconButton>

                            <InputBase
                                sx={{ flex: 1, fontSize: '0.875rem', height: 32 }}
                                placeholder="Type / to search"
                                inputProps={{ 'aria-label': 'search open github' }}
                            />
                            <Divider sx={{ height: 20 }} orientation="vertical" />
                            <IconButton
                                aria-label="directions"
                                size="small"
                                sx={{
                                    color: '#8D969F',
                                    backgroundColor: 'transparent',
                                    "&:hover": {
                                        backgroundColor: "octocat_bg.main"
                                    }
                                }}>
                                {/* <ChevronRightIcon fontSize="inherit" /> */}
                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                    <path fill="#6e7781" d="m6.354 8.04-4.773 4.773a.75.75 0 1 0 1.061 1.06L7.945 8.57a.75.75 0 0 0 0-1.06L2.642 2.206a.75.75 0 0 0-1.06 1.061L6.353 8.04ZM8.75 11.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"></path>
                                </svg>
                            </IconButton>
                        </Paper>

                        {/* mobile search button */}
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                // color: "octocat_header_icon.main",
                                borderColor: "octocat_bc.main",
                                backgroundColor: 'transparent',
                                "&:hover": {
                                    backgroundColor: "octocat_bg.main",
                                    borderColor: "octocat_bc.main"
                                },
                                minWidth: 0,
                                height: 32,
                                ml: 1
                            }}
                        >
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                <path fill="#6e7781" d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                            </svg>
                        </Button>

                        <Divider sx={{ display: { xs: 'none', md: 'flex' }, height: 24, mx: 2 }} orientation="vertical" />

                        {/* create new project */}
                        <CreateNewDrawer />

                        {/* issue */}
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                color: "octocat_header_icon.main",
                                borderColor: "octocat_bc.main",
                                backgroundColor: 'transparent',
                                "&:hover": {
                                    backgroundColor: "octocat_bg.main",
                                    borderColor: "octocat_bc.main"
                                },
                                minWidth: 0,
                                height: 32,
                                ml: 1
                            }}
                        >
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                <path fill="#6e7781" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                <path fill="#6e7781" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                            </svg>
                        </Button>

                        {/* pull request */}
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                color: "octocat_header_icon.main",
                                borderColor: "octocat_bc.main",
                                backgroundColor: 'transparent',
                                "&:hover": {
                                    backgroundColor: "octocat_bg.main",
                                    borderColor: "octocat_bc.main"
                                },
                                minWidth: 0,
                                height: 32,
                                ml: 1
                            }}
                        >
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                <path fill="#6e7781" d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                            </svg>
                        </Button>

                        {/* notifications */}
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{
                                display: { xs: 'flex', md: 'flex' },
                                color: "octocat_header_icon.main",
                                borderColor: "octocat_bc.main",
                                backgroundColor: 'transparent',
                                "&:hover": {
                                    backgroundColor: "octocat_bg.main",
                                    borderColor: "octocat_bc.main"
                                },
                                minWidth: 0,
                                height: 32,
                                ml: 1
                            }}
                        >
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" >
                                <path fill="#6e7781" d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
                            </svg>
                        </Button>

                        {/* user avatar drawer */}
                        <UserDrawer />

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
