import React from 'react';
import { TextField, InputAdornment, IconButton, styled, Box } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CustomTextField = () => {
  const Inputbox = styled(TextField)({
    width: '95%',
    height: '68px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '39px',
      backgroundColor: '#8C8C8C3D',
      paddingLeft: '0px',
      paddingRight: '0px',
      position: 'relative',
      bottom: 5,
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
    },
    '& .MuiOutlinedInput-input': { 
      padding: '10px 14px', 
      '&::placeholder': {
        fontSize: '12px',
      },
    },
  });

  return (
    <Inputbox
      variant="outlined"
      placeholder="Type your prompt here..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <Box
                sx={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(45deg)',
                  backgroundColor: '#424242',
                  marginRight: '8px',
                }}
              >
                <AttachFileIcon sx={{ color: '#FFFFFF', fontSize:'15px' }} />
              </Box>
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <MicIcon />
            </IconButton>
            <IconButton>
              <Box
                sx={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#9747FF',
                }}
              >
                <ArrowForwardIcon sx={{ color: '#ffff',fontSize:'15px' }} />
              </Box>
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomTextField;
