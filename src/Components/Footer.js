import {  Box, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import Youtube from "../Assets/img/social-01.svg"

function Footer() {
  return (
    <Grid container  sx={{backgroundColor:"primary.main",display:"flex", justifyContent:"space-between", px:10,py:2}} >
        <Grid item xs={4}>
            <Typography display="block" variant="h10">
                Tentang
            </Typography>
            <Typography variant="p">
                sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </Typography>
        </Grid>
        <Grid item xs={3}>
            <Typography>
                Produk
            </Typography>
            <Box display="flex">
            <List>
                <ListItem>
                    Biola
                </ListItem>
                <ListItem>
                    Gitar
                </ListItem>
                <ListItem>
                    Drum
                </ListItem>
            </List>
            <List>
                <ListItem>
                    Menyanyi
                </ListItem>
                <ListItem>
                    Piano
                </ListItem>
                <ListItem>
                    Saxophone
                </ListItem>
            </List>
            </Box>
        </Grid>
        <Grid item xs={4}>
            <Typography>
                Alamat
            </Typography>
            <Typography>
            sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
            </Typography>
            <Typography>
                Kontak
            </Typography>
            <img src={Youtube} width="8%" background-color='secondary'/>
            <img src={Youtube} width="50px" background-color='secondary'/>
            <img src={Youtube} width="50px" background-color='secondary'/>
            <img src={Youtube} width="50px" background-color='secondary'/>
            <img src={Youtube} width="50px" background-color='secondary'/>
        </Grid>
        
    </Grid>
  )
}

export default Footer