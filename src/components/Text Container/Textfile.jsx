import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import IconImage from '../../assets/Images/Icon.svg'
export default function Textfile() {
    const TextBox = styled(Box)({
        height:'190px',
        width:'400px',
        // backgroundColor:'red',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginTop:'-50px'
    })

    console.log(IconImage);
  return (
    <>
        <TextBox>
            {/* <img src={IconImage} alt="Icon" style={{ width: '20px', height: '20px'}} /> */}
            <Typography variant='h6' sx={{fontSize:'20px'}}>
                How can we as<span style={{color:'#853EE9'}}>sist</span> you today?
            </Typography>
            <Typography sx={{fontSize:'10px',textAlign:'center'}}>
                Get expert guidance powered by AI agents specializing in <br /> Sales, 
                Marketing, and Negotiation. 
                Choose the agent that suits <br /> your needs and start your conversation with ease.
            </Typography>
        </TextBox>
    </>
  )
}
