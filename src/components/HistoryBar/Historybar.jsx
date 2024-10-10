import { Box, styled } from '@mui/system'
import React from 'react'
import StrimLogo from '../../assets/Images/Strim.png'
import IconWhite from '../../assets/Images/IconWhite.svg'
import Threedots from '../../assets/Images/Threedots.svg'
import Newchat from '../New Chat/Newchat'
import Sectioncontainer from '../Section Container/Sectioncontainer'
import Userprofile from '../User profile/Userprofile'
import { Typography } from '@mui/material'

export default function Historybar() {
  const HistoryContainer = styled(Box)({
    height: '100%', // Full height inside its container
    backgroundColor: '#101010',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'white',
    padding: '15px 30px',
  })

  return (
    <HistoryContainer>
      <Box sx={{display:'flex',flexDirection:'row',height:'3%',width:'100%',display:'flex',flexDirection:'row',alignItems:'center'}}>
        {/* <img src={StrimLogo} alt="Icon" style={{ width: '70px', height: '30px',paddingTop:'10px',marginLeft:'-10px'}} />
        <Typography sx={{textAlign:'start',fontWeight:'bolder',marginTop:'10px',marginLeft:'-10px'}}>STRIIM CENTRE</Typography> */}
       <img width="100" style={{marginTop:'15px'}} height="35" src="https://media.striim.com/wp-content/uploads/2020/09/21163532/Logo-White.webp" class="attachment-medium size-medium wp-image-56078" alt=""></img>
        {/* <img src={Threedots} alt="Icon" style={{ width: '10px', height: '10px'}} /> */}
      </Box>
      {/* <Box sx={{height:'5%',width:'100%'}}>
        <Newchat />
      </Box> */}
      <Box sx={{height:'70%',width:'100%'}}>
        <Sectioncontainer />
      </Box>
      <Box sx={{height:'15%',width:'100%',display:'flex',flexDirection:'column',alignItems:'center',
        justifyContent:'center'
      }}>
        <Userprofile />
      </Box>
    </HistoryContainer>
  )
}
