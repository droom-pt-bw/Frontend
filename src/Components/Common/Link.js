import React from 'react';
import { Link as LinkBase } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Link = ({ children, ...props }) => {
  return (
    <Button component={LinkBase} {...props}>
      {children}
    </Button>
  );
};

export default Link;