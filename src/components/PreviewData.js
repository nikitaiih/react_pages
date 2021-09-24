import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Box,
    Grid,
    Container,
    CssBaseline,
    makeStyles,
    Avatar,
    Paper
} from "@material-ui/core";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: 'white',
        marginTop: '50px',
        marginLeft: '10px',
        marginRight: '10px',
        padding: '0',
        maxHeight: '100%',
        // border: '1px solid black',
    },
    mainContainer: {
        minHeight: 'calc(100vh - 131px)',
        maxWidth: '1150px',
        padding: '0 15px',
        display: 'flex',
    },
    commentCard: {
        backgroundColor: 'white',
        marginTop: '50px',
        marginLeft: '10px',
        marginRight: '10px',
        padding: '0',
        maxHeight: '100%',
        border: '1px solid black'
    }
}));

export default function PreviewData() {
    const classes = useStyles();
    const { id } = useParams();
    const [titlePostState, setTitlePostState] = useState({
        id: "",
        title: "",
        body: "",
    });

    const [commentsState, setCommentsState] = useState([]);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setTitlePostState(res.data)
            });

        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res => {
                setCommentsState(res.data);
            })

    });

    const renderCommentList = () => {
        return (
            <>
                {commentsState?.length > 0 && commentsState.map((singleItem, index) => {
                    let { body } = singleItem;
                    return (
                        <Grid container wrap="nowrap" spacing={2} key={index}>
                            <Grid item>
                                <Avatar alt="Remy Sharp" />
                            </Grid>
                            <Grid justifyContent="left" item xs zeroMinWidth>
                                <h4 style={{ margin: 0, textAlign: "left" }}>Comment</h4>
                                <p style={{ textAlign: "left" }}>
                                    {body}
                                </p>
                            </Grid>
                        </Grid>
                    );
                })
                }
            </>
        );
    }


    return (
        <Container component="main"
            className={classes.mainContainer}>
            <CssBaseline />
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Paper className={classes.card}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar alt="Remy Sharp"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        marginLeft: '15px',
                                        marginTop: '7px'
                                    }}
                                />
                            </Grid>
                            <Grid justifyContent="left" item xs zeroMinWidth>
                                <h4 style={{ margin: '10px ', textAlign: "left" }}>{titlePostState.title}</h4>
                                <p style={{ textAlign: "left" }}>
                                    {titlePostState.body}
                                </p>
                            </Grid>
                        </Grid>
                    </Paper>
                    <div style={{ padding: 14 }}>
                        <Paper style={{ padding: "40px 20px" }}>
                            {renderCommentList()}
                        </Paper>
                    </div>
                </Grid>
            </Box>
        </Container>
    );
}
