import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    menubarIcon: {
        color: "black",
    },
    buttons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    yesBtn: {
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        borderRadius: 20,
        marginRight: '12px',
        color: theme.palette.primary.contrastText,
        "&:hover": {
            background: theme.palette.primary.main,
        },
    },
    noBtn: {
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        borderRadius: 20,
        color: theme.palette.primary.contrastText,
        "&:hover": {
            background: theme.palette.primary.main,
        },
    }
}));

export default function Popup(props) {
    const classes = useStyles();

    const { handleClose } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <div style={{ padding: 20 }}>
            Are you sure, you want to logout?
            <div className={classes.buttons}>
                <Button
                    className={classes.yesBtn}
                    onClick={() => {
                        setOpen(false);
                    }}
                    color="primary"
                >
                    Yes
                </Button>
                <Button
                    className={classes.noBtn}
                    onClick={handleClose}
                    color="primary"
                >
                    No
                </Button>
            </div>
        </div>
    );
}