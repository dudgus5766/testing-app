import * as React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Spacing from './common/spacing';
import {JustifySpaceBetween, Text, Row, SubText} from './styles';
import geKoreanNumber from '../utils/getKoreanNumber';

type ProgressBarProps = {
  target: number;
  collected: number;
};

export default function ProgressBar(props: ProgressBarProps) {
  const progress = (props.collected / props.target).toFixed(3);
  const barWidth = (+progress * 100).toString();

  return (
    <Container>
      <JustifySpaceBetween>
        <SubText>{'모인 금액'}</SubText>
        <SubText>{'달성률'}</SubText>
      </JustifySpaceBetween>
      <Spacing height={5} />
      <JustifySpaceBetween>
        <Text style={{fontWeight: 'bold'}}>
          {geKoreanNumber(props.collected)}
        </Text>
        <Text>{`${barWidth}%`}</Text>
      </JustifySpaceBetween>
      <Spacing height={8} />
      <ProgressBarContainer>
        <ProgressBarLine
          colors={['#FFFFFF', '#FFFFFF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{width: `${barWidth}%`}}
        />
      </ProgressBarContainer>
    </Container>
  );
}

const Container = styled.View``;

const ProgressBarContainer = styled.View`
  width: 100%;
  height: 5px;
  background-color: ${props => props.theme.color.mainGray};
`;

const ProgressBarLine = styled(LinearGradient)`
  height: 100%;
`;
