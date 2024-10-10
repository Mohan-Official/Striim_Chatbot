import { Box, Card, styled, Typography } from '@mui/material';
import React from 'react';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import Threedots from '../../assets/Images/Threedots.svg';

const categories = ['Striim Cloud', 'Striim Cloud for Application Integration', 'Striim Platform', 'Striim for BigQuery'];
const colorPalate = ['#D9D9D9', '#B8E2FF', '#D3FFB8', '#FFCCCC'];
const categoriesIcon = ['https://media.striim.com/wp-content/uploads/2022/09/21181650/striim_icon_cloud.webp','https://media.striim.com/wp-content/uploads/2022/09/21181650/striim_icon_cloud.webp','https://media.striim.com/wp-content/uploads/2022/09/21181649/Striim_Icon_08.webp','https://www.striim.com/wp-content/uploads/2022/06/bigquery_white.svg']
// Styled component with dynamic background color
const ColorBox = styled(Card)(({ bgcolor }) => ({
  height: '100%',
  width: '5px',
  backgroundColor: bgcolor, // Use the passed background color
  position: 'absolute',
  left: 0,
  top: 0,
  borderRadius: '2px 0px 0px 2px'
}));

export default function Category() {
  return (
    <>
      {categories.map((category, index) => (
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
            position: 'relative',
          }}
        >
          {/* Pass the appropriate color from the colorPalate based on index */}
          <ColorBox bgcolor={colorPalate[index]} />
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '0px', position: 'relative', overflow: 'hidden' }}>
            {/* <FolderOutlinedIcon sx={{ fontSize: '12px' }} /> */}
            <img src={categoriesIcon[index]} alt="" height="25px" />
            <Typography sx={{ 
                marginLeft: '8px', 
                fontSize: '12px', 
                color: 'white',
                whiteSpace: 'nowrap', 
                overflow: 'hidden', 
                textOverflow: 'ellipsis',
                maxWidth: 'calc(100% - 10px)', // Space for icon and dots
                position: 'relative',
                maskImage: category.length > 30 ? 'linear-gradient(90deg, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%)' : 'none', // Apply gradient mask for long text
                WebkitMaskImage: category.length > 30 ? 'linear-gradient(90deg, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%)' : 'none', // Apply gradient mask for long text (Webkit for Chrome/Safari)
              }}
            >
              {category}
            </Typography>
          </Box>
          <img src={Threedots} height="12px" width="12px" alt="" />
        </Box>
      ))}
    </>
  );
}
