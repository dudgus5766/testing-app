import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

type TagProps = {
  title: string;
  style?: any;
  titleStyle?: any;
  disabled?: boolean;
};
export default function Tag(props: TagProps) {
  return (
    <Container>
      <TagContainer style={props.style}>
        <TagText style={props.titleStyle}>{props.title}</TagText>
      </TagContainer>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
`;

const TagContainer = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${props => props.theme.color?.tagBackground};
`;

const TagText = styled(Text)`
  font-size: 13px;
  font-weight: bold;
  padding-vertical: 9px;
  padding-horizontal: 15px;
  color: ${props => props.theme.color?.tagText};
`;
