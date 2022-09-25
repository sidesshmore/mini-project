import React from 'react'

import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';


const Main = () => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />
                <CardContent>
                    <Typography align='center' variant="h5">Total Balance ₹45200</Typography>
                    <Typography variant='subtitle' style={{ lineHeight: "1.5rem", marginTop: '20px' }}>
                        {/* InfoCard */}
                        Try saying: Add income for 3000 in Category Salary for Monday ...
                    </Typography>
                    <Divider />
                    <Form/>
                </CardContent>

                <CardContent className={classes.cardContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                           <List/>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </div>
    )
}

export default Main