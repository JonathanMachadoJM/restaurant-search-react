import React from 'react';

import { Card, Title } from './styles';

const ImageCard = ({ photo }) => (
  <Card photo={photo}>
    <Title>Nome do Restaurante</Title>
  </Card>
);

export default ImageCard;
