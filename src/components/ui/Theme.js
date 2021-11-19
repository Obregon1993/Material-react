import { createTheme } from '@mui/material/styles';

const arcBlue = '#0B72B9'
const arcOrange = '#FFBA60'

export default createTheme({
    palette: {
        common: {
            arcBlue: `${arcBlue}`,
            arcOrange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`,
        }

    },
    typography:{
        h3:{
            fontWeight:300
        }
    }
})

