import { Typography, Container, Box } from '@mui/material'
import React from 'react'


export default function ClassCard(props) {
  const link = props.data.link;

  const convert_date = (input) => {
    var date = new Date(input)
    let day = date.toLocaleDateString('id-ID',{weekday:'long'})
    let daydate = date.getDate()
    let month = date.toLocaleString('id-ID', {month:'long'})
    let year = date.getFullYear()

    let buy_date = day+", "+daydate + " " + month + " " + year;
    return buy_date;
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
        paddingRight:1
      }}>
        <img src={link} alt="" width="200px" />
      </Box>
      <Box sx={{
        display:"flex",
        flexDirection: "column",
        alignItems:"start",
        width:"70%",
      }}>
        <Typography marginBottom={0.5}>{props.data.category}</Typography>
        <Typography marginBottom={0.5} variant="h5">{props.data.course}</Typography>
        <Typography color={"blue"}>Jadwal : {convert_date(props.data.date)}</Typography>
      </Box>
    </Container>
  );
}
