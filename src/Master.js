import React from 'react';
import {Grid} from '@material-ui/core';

import Main from './components/Main/Main'
import Details from './components/Details/Details'
import useStyles from './styles';
import './master.css'
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
// import { SpeechState, useSpeechContext } from "@speechly/react-client";


const Master= () => {
    const classes = useStyles();


  return (
    <div>
        <Grid className={classes.grid} container spacing={0} alignItems="center" justify='center' style={{height: '100vh'}}>
            <Grid item xs={12} sm={4} className={classes.mobile}>
                <Details title="Income"/>
            </Grid>

            <Grid item xs={12} sm={3} className={classes.main}>
                <Main/>
            </Grid>

            <Grid item xs={12} sm={4} className={classes.desktop}>
                <Details title="Income"/>
            </Grid>

            <Grid item xs={12} sm={4} className={classes.last}>
                <Details title="Expense"/>
            </Grid>

        </Grid>
        <PushToTalkButtonContainer>
            <PushToTalkButton/>
           
        </PushToTalkButtonContainer>
    </div>
  )
}

export default Master