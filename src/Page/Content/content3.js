import { Grid } from '@material-ui/core'
import React from 'react'
import Button from '@material-ui/core/Button';

const Content3 = () => {
    return(
        <div>
            <div style={{
                backgroundImage:`url(${process.env.PUBLIC_URL + '/img/bg/content3.jpg'})`,
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                backgroundSize:' 100% 100% ',
                width:'198vh',
                height:'100vh',
                
            }}>
               <Grid container>
                    <Grid xs={12} style={{display:'flex',paddingTop:'60vh'}}>
                            <Grid item xs={5} justify={'center'}>
                                <div> 
                                    <div style={{display:'flow',justifyContent:'start',textAlign:'left',paddingLeft:'120px'}}>
                                        <h6 style={{margin:'0',padding:'0'}}>MARS MISSION</h6>
                                        <h3 style={{margin:'0',padding:'0'}}>FUTER TO MARS</h3>
                                        <h3 style={{margin:'0',padding:'-6'}}>HUMENT FLYING</h3>
                                        <Button variant="outlined" style={{color:'white',borderColor:'white',borderRadius:'0'}} > LEARN MORE</Button>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={7}>
                               
                            </Grid>
                    </Grid>
               </Grid>
            </div>
        </div>
    )
}

export default Content3