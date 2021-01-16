import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HomeAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color='transparent' style={{backgroundColor:'transparent'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={2}>
                    <Typography style={{paddingTop:'10px'}}> 
                        <div style={{
                            backgroundImage:`url(${process.env.PUBLIC_URL + '/img/logo/logo.png'})`,
                            ackgroundRepeat:'no-repeat',
                            backgroundPosition:'center',
                            backgroundSize:' 100% 100% ',
                            width:'20vh',
                            height:'3vh',
                        }}/>
                    </Typography>
                </Grid>
                <Grid item xs={4} style={{display:'flex'}}>
                    <IconButton aria-label="search" color="inherit" style={{fontSize:'14px'}}>
                        FALCON 9
                    </IconButton>
                    <IconButton aria-label="search" color="inherit" style={{fontSize:'14px'}}>
                        DRAGON
                    </IconButton>
                    <IconButton aria-label="search" color="inherit" style={{fontSize:'14px'}}>
                        STARTSHIP
                    </IconButton>
                    <IconButton aria-label="search" color="inherit" style={{fontSize:'14px'}}>
                        HUMEN SPACEFILIGHT
                    </IconButton>
                    <IconButton aria-label="search" color="inherit" style={{fontSize:'14px'}}>
                        RIDESHARE
                    </IconButton>
                </Grid>
                <Grid item xs={4} style={{justifyContent:'flex-end',display:'flex'}}>
                    <Toolbar>
                        <IconButton aria-label="search" color="inherit" style={{fontSize:'14px'}}>
                            SHOP
                        </IconButton>
                        <IconButton aria-label="display more actions" edge="end" color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </Toolbar>
                </Grid>
            </div>
        </AppBar>
      </HideOnScroll>
      
      
    </React.Fragment>
  );
}
