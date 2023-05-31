import axios from 'axios';
import React from 'react'

function UserApi() {
    const userPost = (addData) => {
        
         const url= process.env.REACT_APP_BASE_URL+"api/user/RegisterUser"
          //console.log(addData)
        //step 4 menyerahkan pesanan kepada dapur
        axios.post(url,addData)
      };
}

export default UserApi