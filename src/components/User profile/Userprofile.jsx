import { Box, Typography } from '@mui/material'
import React from 'react'
import Settings from '@mui/icons-material/Settings';
import User from '../../assets/Images/User.svg'

export default function Userprofile() {
  return (
    <>
        <Box 
            sx={{
            height: '40px',
            width: '100%',
            backgroundColor: '#424242',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '10px',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={User} height="14px" width="14px" style={{paddingLeft:'10px'}} /> 
            <Typography sx={{ marginLeft: '10px', fontSize: '12px', color: 'white' }}>
                User Profile
            </Typography>
            </Box>
            <Settings sx={{fontSize:'16px',paddingRight:'10px'}} />
        </Box>
    </>
  )
}
