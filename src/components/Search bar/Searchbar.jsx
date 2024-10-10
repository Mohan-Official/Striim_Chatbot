import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Styled TextField for the search bar
const CustomizedSearchBar = styled(TextField)(({ theme }) => ({
  width: '88%',  // Adjust width according to your design
  backgroundColor: '#424242',
  borderRadius: '5px',
//   padding:'0 10px',
  '& .MuiOutlinedInput-root': {
    height: '30px',  // Ensures correct height
    paddingRight: '8px',  // Space between text and icon
    paddingLeft: '10px',  // Space between border and text
    '& fieldset': {
      border: 'none',  // No border for the input field
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  '& .MuiOutlinedInput-input': {
    color: 'white',
    fontSize: '12px',  // Set font size for input text
    padding: 0,  // Remove extra padding from input field
    '&::placeholder': {
      color: 'rgba(187, 187, 187, 1)',  // Placeholder color
      fontSize: '12px',  // Set font size for placeholder
    },
  },
}));

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input changes
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <CustomizedSearchBar
      variant="outlined"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearch}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton aria-label="search" disableRipple>
              <SearchIcon sx={{ color: 'rgba(187, 187, 187, 1)', fontSize: '15px' }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Searchbar;
