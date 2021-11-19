import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,

    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyle =makeStyles(theme=>({
    toolbarMargin:{
        ...theme.mixins.toolbar
    }
}))

export default function Header(props) {
    const classes=useStyle()
    return (
        <React.Fragment>
        <ElevationScroll>
            <AppBar >
                <Toolbar>
                    
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </React.Fragment>
    )
}