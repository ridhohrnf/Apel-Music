import { Button, Typography, Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';
import "../../../helper/format/currency";

export default function BinCard(props) {
  
  const link = props.data.link

  var date = new Date(props.data.date)
  let day = date.toLocaleDateString('id-ID',{weekday:'long'})
  let daydate = date.getDate()
  let month = date.toLocaleString('id-ID', {month:'long'})
  let year = date.getFullYear()

  const deletehandle =(classid, e)=>{
      const url = process.env.REACT_APP_BASE_URL+"api/Keranjang/DeleteItem"
      axios.delete(url, {params:{id:classid}}).then(resposne =>{
        console.log(`${classid} has been deleted`,resposne).catch(err => console.log(err))
      })
  };
  
  return (
    <Container
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        margin: 1,
        padding: 1
      }}
    >
      <Box sx={{
        paddingRight:2
      }}>
        <img src={link} style={{width:"200px", borderRadius:"10%"}} alt=""/>
      </Box>
      <Box sx={{
        display:"flex",
        flexDirection: "column",
        alignItems:"start",
        width:"70%",
        justifyContent:"space-evenly"
      }}>
        <Typography>{props.data.category}</Typography>
        <Typography variant="h5" sx={{fontWeight:'bold'}}>{props.data.course}</Typography>
        <Typography>Jadwal : {day}, {daydate} {month} {year}</Typography>
        <Typography color={'blue'} fontWeight={'bold'}>{parseInt(props.data.price).currency()}</Typography>
      </Box>
      <Box>
        <Button onClick={()=>{
          deletehandle(props.data.id)
          window.location.reload(false)
        }}>
          <DeleteForeverIcon sx={{color:"red"}}/>
            <Typography sx={{color: "black"}}
            >Delete</Typography>
        </Button>
      </Box>
    </Container>
  )
}
