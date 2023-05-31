import { Logout, Person, ShoppingCart } from '@mui/icons-material';
import { Badge, Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link as DirectLink, useHistory } from "react-router-dom";
import { useGlobalContext } from '../helper/hook/useGlobalState';
// import { useTheme } from '../Context/HeaderContext';

function HeaderBtnLogin() {
  const [mobileOpen, setMobileOpen] = useState(false);
	// get global State
	const { state } = useGlobalContext();
  
    const history = useHistory(); 
  return (
    <Box sx={{display:"flex", alignItems:"center", gap:1}}>
      <Badge 
							badgeContent={Object.keys(state.cart).length}
							color="secondary"
						>
							
        <ShoppingCart sx={{mx:1, color:'secondary'}} onClick={()=>{history.push("/keranjang")}}/>
				</Badge>
        <Button sx={{mx:1}}  component={DirectLink}to="/kelas" variant="contained" disableElevation>Kelasku</Button>
        <Button sx={{mx:1}}  component={DirectLink}to="/invoice" variant="contained" disableElevation>Pembelian</Button>
        <Typography sx={{mx:1}} >|</Typography>
        <Person sx={{mx:1}}  />
        <Logout sx={{mx:1, color:'secondary'}}  onClick={()=>{sessionStorage.removeItem("login");sessionStorage.removeItem("token");history.push("/");window.location.reload(false);}} />
    </Box>
  )
}

export default HeaderBtnLogin