import React from 'react';
import styled from 'styled-components/native';

type LineProps = {
  color?: string;
};

interface ColoredLineProps {
  color?: string;
}

export default function ColoredLine({color}: ColoredLineProps) {
  return <Line color={color} />;
}

const Line = styled.View<LineProps>`
  width: 100%;
  height: 1px;
  background-color: ${props => props.color || props.theme.color.mainGray};
`;
