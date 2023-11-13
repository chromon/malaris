import { createTheme, PaletteColorOptions } from '@mui/material/styles';


export default createTheme({
    palette: {
        // mode: 'dark',
        // background color
        octocat_bg: {
            main: '#f6f8fa',
            light: '#f6f8fa',
            dark: '#A29415',
            contrastText: '#242105',
        },
        // color
        octocat_c: {
            main: '#1f2328',
            light: '#f6f8fa',
            dark: '#A29415',
            contrastText: '#242105',
        },
        // border color
        octocat_bc: {
            main: '#d0d7de',
            light: '#f6f8fa',
            dark: '#A29415',
            contrastText: '#242105',
        },
        octocat_header_icon: {
            main: "#8D969F"
        }
    },
});

// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
    interface Palette {
        octocat_bg: PaletteColorOptions;
        octocat_c: PaletteColorOptions;
        octocat_bc: PaletteColorOptions;
        octocat_header_icon: PaletteColorOptions;
    }

    interface PaletteOptions {
        octocat_bg?: PaletteColorOptions;
        octocat_c: PaletteColorOptions;
        octocat_bc: PaletteColorOptions;
        octocat_header_icon: PaletteColorOptions;
    }
}