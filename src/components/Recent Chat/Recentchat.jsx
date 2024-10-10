import { Box, Typography } from '@mui/material';
import React from 'react';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Threedots from '../../assets/Images/Threedots.svg';

const categories = ['How can I increase the number of ', 'What’s the best approach to ', 'What’s the best approach to '];

export default function Recentchat() {
  return (
    <>
      {categories.map((category) => (
        <Box 
            key={category} 
            sx={{
            height: '30px',
            width: '80%',
            backgroundColor: '#424242',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 10px',
            marginBottom: '10px',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: '12px' }} />
              <Typography 
                sx={{ 
                  marginLeft: '8px', 
                  fontSize: '12px', 
                  color: 'white', 
                  whiteSpace: 'nowrap', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis',
                  maxWidth: 'calc(100% - 30px)', // Space for icon and dots
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: '40px', // Width of the fade effect
                    background: 'linear-gradient(90deg, rgba(66, 66, 66, 0) 0%, #424242 100%)',
                  },
                }}
              >
                {category.length > 20 ? `${category.slice(0, 20)}...` : category}
              </Typography>
            </Box>
            <img src={Threedots} height="12px" width="12px" alt="menu icon" />
        </Box>
      ))}
    </>
  );
}
