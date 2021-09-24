import React from 'react';
import {
    Typography,
    AppBar,
    Toolbar,
    Button
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


export default function Header() {
     const history = useHistory();
     
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    React Demo Application
                </Typography>
                <Typography variant="h6" style={{ flexGrow: 1,}} />
                {/* <Button onClick={() => history.goBack()} style={{color:'white'}}><ArrowBackIcon />Back</Button> */}
            </Toolbar>
        </AppBar>
    );
}
