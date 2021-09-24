import React, { useEffect, useState } from 'react';
import {
    Typography,
    Box,
    Grid,
    Card,
    CardActions,
    CardContent,
    Container,
    CssBaseline,
    makeStyles,
    Avatar
} from "@material-ui/core";
import Delete from '@material-ui/icons/Delete';
import axios from 'axios';
import { NotificationManager } from "react-notifications";
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: 'gray',
        marginTop: '50px',
        marginLeft: '10px',
        marginRight: '10px',
        padding: '25px',
        borderRadius: '25px',
        maxHeight: '100%'
    },
    avtarIcon: {
        margin: "0 auto",
        width: "140px",
        height: "140px",
    },
    mainContainer: {
        minHeight: 'calc(100vh - 131px)',
        maxWidth: '1150px',
        padding: '0 15px',
        display: 'flex',
    }
}));

export default function Post(props) {
    const classes = useStyles();
    const history = useHistory();
    let [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => setUsers(response.data));
    }, []);

    const onClickDeletedata = (e, id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                const response = users.filter(item => item.id !== id)
                setUsers(response);
            })
        NotificationManager.success("Data delete successfully");
    }

    const onClickRedirectPreview = (id) => {
        history.push(`post/${id}`);
    }


    const renderList = () => {
        return (
            <>
                {users?.length > 0 && users.map((singleItem, index) => {
                    let { title, body, id } = singleItem;
                    return (
                        <Grid item md={3} xs={12} sm={6} key={index}>
                            <div style={{ height: '400px' }}>
                                <Card className={classes.card} key={index}>
                                    <Avatar
                                        alt="logo"
                                        className={classes.avtarIcon}
                                    >
                                    </Avatar>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" style={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}>
                                            {title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            webkitLineClamp: '3',
                                            webkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}
                                            title={body}
                                        >
                                            {body}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{float:'right'}}>
                                        <div>
                                            <VisibilityIcon onClick={(e) => onClickRedirectPreview(id)} />
                                        </div>
                                        <div >
                                            <Delete onClick={(e) => onClickDeletedata(e, id)} />
                                        </div>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                    );
                })
                }
            </>
        );
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Container component="main"
                className={classes.mainContainer}>
                <CssBaseline />
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {renderList()}
                </Grid>
            </Container>
        </Box>
    );
}