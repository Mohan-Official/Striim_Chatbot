import { Box, Card, Paper, styled } from '@mui/material';
import React from 'react';

// Define the styled component outside the functional component
const GradientBox = styled(Paper)({
  background: 'linear-gradient(180deg, rgba(9, 9, 9, 0) 0%, #6F00FF 100%)', // Corrected gradient
  height: '100px',
  width: '150px',
  position: 'absolute',
  zIndex: 8,
  opacity: '0.1'
});

export default function GradientBackground() {
  return (
    <GradientBox />
  );
}
