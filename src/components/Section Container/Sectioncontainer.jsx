import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import Searchbar from '../Search bar/Searchbar';
import Category from '../Category/Category';
import Recentchat from '../Recent Chat/Recentchat';

const SectionContainer = styled(Box)({
  height: '100%',
  width: '100%',
  backgroundColor: '#212023',
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-evenly',
  alignItems:'center',
  borderRadius:'10px',
  paddingTop:'10px',
});

export default function Sectioncontainer() {
  return (
    <SectionContainer>
      <Searchbar />
      <Typography sx={{fontSize:'12px',textAlign:'left',width:'100%',paddingLeft:'30px',paddingTop:'5px',paddingBottom:'5px'}}>
        Category
      </Typography>
      <Category />
      <Typography sx={{fontSize:'12px',textAlign:'left',width:'100%',paddingLeft:'30px',paddingTop:'5px',paddingBottom:'5px'}}>
        Recent Chats
      </Typography>
      <Recentchat />
    </SectionContainer>
  );
}
