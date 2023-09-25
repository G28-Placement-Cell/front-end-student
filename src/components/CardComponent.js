// src/components/CardComponent.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function CustomCard({ item, height }) {
  

  return (
    <Card sx={{width:'90vw'}}> {/* Apply the style property */}
      <CardContent>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
