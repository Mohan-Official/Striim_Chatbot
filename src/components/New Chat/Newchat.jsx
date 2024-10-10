import { Box, Typography } from '@mui/material'
import React from 'react'
import Add from '@mui/icons-material/Add';

export default function Newchat() {
  return (
    <>
        <Box 
            sx={{
                height:'35px',
                width: '100%',
                borderRadius:'5px',
                backgroundColor:'#242723',
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
            }}
        >
            <Typography sx={{fontSize:'12px',paddingLeft:'20px'}}>
                Begin a New Chat
            </Typography>
            <Add sx={{fontSize:'15px',paddingRight:'20px'}} />
        </Box>
    </>
  )
}
