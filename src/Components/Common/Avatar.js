import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Trianglify from 'trianglify';

const StyledAvatar = styled.div`
  background: url(${props => props.pattern}) no-repeat center;
  background-size: cover;
  
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  color: white;

  cursor: pointer;
`;

const pickColor = () => {
  switch(Math.floor(Math.random() * 4)) {
    case 0:
      return '#1D5FA3';
    case 1:
      return '#3329AF';
    case 2:
      return '#12A776';
    case 3:
      return '#FBA11B';
    default:
      return '#000000';
  };
};

const Avatar = ({children, ...props}) => {
  const [pattern, setPattern] = useState(null);

  useEffect(() => {
    setPattern(Trianglify({
      height: 40,
      width: 40,
      cell_size: 15,
      stroke_width: 1,
      x_colors: [pickColor(), pickColor(), pickColor(), pickColor()],
    }).png())
  }, []);



  return (
    <StyledAvatar pattern={pattern} {...props}>
      {children}
    </StyledAvatar>
  );
};

export default Avatar;