import React from 'react';
import { Card, CardContent, Grid, Typography, Box, IconButton } from '@mui/material';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

const CardContainer = () => {
  const cards = [
    {
      id: 1,
      name: 'Striim Cloud',
      text: 'All your documentation needs for our fully-managed Cloud SaaS solution'
    },
    {
      id: 2,
      name: 'Striim Cloud for Application Engineering',
      text: 'Documentation for using Striim with apps'
    },
    {
      id: 3,
      name: 'Striim Platform',
      text: 'All your documentation needs for our self-hosted solution'
    },
    {
      id: 4,
      name: 'Striim for BigQuery',
      text: 'All your documentation needs for Striim for BigQuery'
    }
  ];

  return (
    <Box sx={{ padding: '20px',marginTop:'-40px' }}>
      <Grid container spacing={3} sx={{ width: '100%', maxWidth: '900px' }}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100px', backgroundColor: '#FFFFFF', borderColor:'#E6E6E6',borderRadius:'10px' }}>
              <CardContent sx={{display:'flex',gap:'10px',flexDirection:'row',justifyContent:'space-between'}}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: 'clamp(12px, 2vw, 15px)', // Keep the font size fixed between 12px and 15px
                  lineHeight: 1,
                  whiteSpace: card.name.length > 20 ? 'nowrap' : 'normal', // Prevent text wrapping for long text
                  overflow: card.name.length > 20 ? 'hidden' : 'visible',  // Hide the overflow
                  textOverflow: card.name.length > 20 ? 'ellipsis' : 'unset', // Add ellipsis for long text
                }}
                component="div"
              >
                {card.name}
              </Typography>
                <IconButton sx={{height:'17px',width:'17px',color:'#666666',borderRadius:'50%',border:'1px solid #666666'}}>
                  <ArrowOutwardOutlinedIcon sx={{color:'#666666',fontSize:'10px'}}/>
                </IconButton>
              </CardContent>
              <CardContent>
                <Typography variant="body2" sx={{ fontSize: '9px'}} color="text.secondary">
                  {card.text}.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardContainer;
