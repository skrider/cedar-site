import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

type CardProps = BoxProps;

const Card : React.FC<CardProps> = ({children, ...props}) => {
  return (
    <Box
      padding={"1rem"}
      borderRadius={"1rem"}
      background={"white"}
      boxShadow={"md"}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Card;
