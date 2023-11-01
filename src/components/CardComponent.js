// src/components/CardComponent.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function CustomCard({ item, height }) {
  

  return (
    <Card sx={{width:'90vw'}}>
      <CardContent>
        <h2 style={{color:'blue'}}>{item.company}</h2>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
