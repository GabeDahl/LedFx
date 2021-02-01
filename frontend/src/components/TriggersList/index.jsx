import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import pkceChallenge from 'pkce-challenge';
import Cookies from 'universal-cookie/es6';
import { Card, CardContent, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const styles = theme => ({

});

const triggers = [
    {songId: 123, songName: 'song', position: 11111, sceneId: 123, sceneName: 'scene'},
    {songId: 123, songName: 'song', position: 11111, sceneId: 123, sceneName: 'scene'},
    {songId: 123, songName: 'song', position: null, sceneId: 123, sceneName: 'scene'},
    {songId: 123, songName: 'song', position: null, sceneId: 123, sceneName: 'scene'},
]

class TriggerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    };
    
    render() {
        const {  } = this.props;
        return (
            <Card>
                <CardContent>
                    {triggers.length > 0 ? 
                        <List>
                            <ListItem>
                                <ListItemText primary='Song' secondary='Position' />
                                <ListItemText primary='Scene Name' />
                            </ListItem>
                            {triggers.map(trigger => {
                                return (
                                <div>
                                <ListItem>
                                    <ListItemText primary={trigger.songName} secondary={trigger.position}/>
                                    <ListItemText primary={trigger.sceneName} />
                                    <ListItemIcon><DeleteForeverIcon color='error' /></ListItemIcon>
                                </ListItem>
                                <Divider />
                                </div>
                                )
                            })}
                        </List>
                    : <Typography>Add Some Triggers To View Them Here</Typography>
                    }

                </CardContent>
            </Card>
        );
    }
}

export default connect(
    state => ({
        spotify: state.triggers
    }),
    {  }
)(withStyles(styles)(TriggerList));