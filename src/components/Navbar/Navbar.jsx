import React, { useState } from 'react';
import { AppBar, Toolbar, Tab, Tabs, IconButton } from '@mui/material';
import SignalCellularAlt2BarRoundedIcon from '@mui/icons-material/SignalCellularAlt2BarRounded';

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        marginLeft: '25%',
        backgroundColor: 'transparent',
        width: '75%', 
        boxShadow: 'none',
        minHeight: '35px', // Set outer navbar height
        height: '35px',
        marginTop:'-5%',
        '& .MuiToolbar-root':
        {
          minHeight: 0
        } 
      }}
    >
      <Toolbar 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '0 10px', 
          minHeight: '45px', // Outer height remains 45px
          height: '45px',
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          sx={{
            backgroundColor: '#EDEDED',
            // backgroundColor:'pink',
            background: 'linearGradient(180deg, rgba(9, 9, 9, 0) 0%, #6F00FF 100%)',
            borderRadius: '50px',
            minHeight: '35px', // Outer container height remains 45px
            height: '35px', 
            width: '450px',
            alignSelf: 'center',
          }}
          textColor="inherit"
          indicatorColor="none"
        >
          {['General', 'Sales', 'Negotiation', 'Marketing'].map((label, index) => (
            <Tab
            key={index}
            label={label}
            sx={{
              flex: 1,
              minHeight: selectedTab === index ? '35px' : '35px',
              height: selectedTab === index ? '35px' : '35px',
              textTransform: 'none', 
              backgroundColor: selectedTab === index ? '#202020' : 'transparent',
              borderRadius: '50px',
              color: selectedTab === index ? '#FFFFFF' : '#8A8A8A',
              '&:hover': {
                backgroundColor: selectedTab !== index ? 'transparent' : '#202020',
              },
            }}
          />
          
          ))}
        </Tabs>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ marginLeft: 'auto', minHeight: '45px', height: '45px' }} // IconButton height matches outer height
        >
          <SignalCellularAlt2BarRoundedIcon sx={{ color: '#303030', fontSize: '30px', transform: 'rotate(-90deg)' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
