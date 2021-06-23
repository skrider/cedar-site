import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

const Container : React.FC<BoxProps> = ({children, ...props}) => {
  return (
    <Box
      {...props}
    >
      {children}
    </Box>
  )
}

export default Container;
