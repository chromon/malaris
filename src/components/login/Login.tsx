import {
    ThemeProvider, Box, IconButton, Typography,
    Card, CardContent, TextField, Button, Link
} from '@mui/material';
import theme from '../../themes/Palette'

export default function Login() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{
                    display: { xs: 'flex', md: 'flex' },
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignContent: 'space-between',
                    flexGrow: 1,
                    color: 'inherit',
                }}>
                    <Box sx={{ mt: 2, mx: 'auto' }}>
                        <IconButton
                            sx={{ display: { xs: "flex", md: "flex" } }}
                        >
                            <img src="/assets/pinned-octocat.svg" width={48} alt="logo" />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            color: 'inherit',
                            textDecoration: 'none',
                            mx: 'auto',
                            mt: 2
                        }}
                    >
                        Sign in to Open GitHub
                    </Typography>
                    <Box sx={{ mt: 2, mx: 'auto' }}>
                        <Card variant="outlined" sx={{
                            width: "340px",
                            backgroundColor: "octocat_bg.main"
                        }}>
                            <CardContent>

                                <Box
                                    component="form"
                                    noValidate
                                    autoComplete="off"
                                    sx={{
                                        display: { xs: "flex", md: "flex" },
                                        flexDirection: 'column',
                                        justifyContent: 'space-around',
                                        alignContent: 'space-between'
                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Username or email address
                                    </Typography>
                                    <TextField id="outlined-basic" variant="outlined" size="small" sx={{ backgroundColor: 'white' }} />

                                    <Box sx={{
                                        display: { xs: "flex", md: 'flex' },
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'baseline'
                                    }}>
                                        <Typography variant="body2" sx={{ mt: 2 }} color="text.secondary" gutterBottom>
                                            Password
                                        </Typography>
                                        <Link href="#" variant="body2" underline="none">Forgot password?</Link>

                                    </Box>
                                    <TextField id="outlined-basic" variant="outlined" size="small" sx={{ backgroundColor: 'white' }} />

                                    <Button variant="contained" color="success" sx={{ mt: 2 }}>
                                        Sign in
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                        <Card variant="outlined" sx={{
                            width: "340px",
                            mt: 2
                        }}>
                            <CardContent sx={{
                                display: { xs: "flex", md: "flex" },
                                flexDirection: 'column'
                            }}>
                                <Box sx={{
                                    mx: 'auto'
                                }}>
                                    <Link href="#" underline="none">Sign in with a passkey</Link>

                                    <Typography variant="body2" align="center" sx={{ mt: 2 }} color="text.secondary">
                                        New to Open GitHub?
                                    </Typography>
                                    <Link href="#" variant='body2' underline="none">Create an accountPassword</Link>
                                </Box>
                            </CardContent>
                        </Card>

                        <Box sx={{
                            display: { xs: 'flex', md: 'flex' },
                            justifyContent: 'space-around',
                            mt: 5,
                        }}>
                            <Link href="#" variant='body2' underline="none">Terms</Link>
                            <Link href="#" variant='body2' underline="none">Privacy</Link>
                            <Link href="#" variant='body2' underline="none">Docs</Link>
                            <Link href="#" variant='body2' underline="none" color="text.secondary">Contact Support</Link>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider >
        </>
    )
}
