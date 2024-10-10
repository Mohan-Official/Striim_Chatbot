import { Box, styled } from '@mui/material';
import React from 'react';
import Gradientbackground from '../Gradientbackground';
import CustomTextField from '../Input Field/CustomTextField';
import Navbar from '../Navbar/Navbar';
import Cards from '../Cards/cardscontainer.jsx';
import Textfile from '../Text Container/Textfile.jsx';

export default function Maincontainer() {
  const ContainerBox = styled(Box)({
    // backgroundColor: '#FEFEFF',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
    padding: '20px',
  });

  return (
    <ContainerBox>
      {/* <Box sx={{position:'relative',zIndex:'10',left:'50%',top:'-20%',right:'-40%',transform:'rotate(45deg)'}}>
        <Gradientbackground />
      </Box> */}
      <Navbar />
      <Textfile />
      <Cards />
      <CustomTextField />
    </ContainerBox>
  );
}
