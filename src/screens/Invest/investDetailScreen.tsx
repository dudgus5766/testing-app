import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';

import {useGetProductById} from '../../api/product';
import {Container, FlexCenter, Text, Title, Row} from '../../components/styles';
import {UpperStackScreenProps} from '../../../types';
import {RouteNames, UpperStackNames} from '../../navigation/routeNames';
import Loading from '../../components/common/loading';
import Spacing from '../../components/common/spacing';
import FastImage from 'react-native-fast-image';
import {screenWidth} from '../../utils/screenDimensions';
import LinearGradient from 'react-native-linear-gradient';
import {darkTheme} from '../../styles/theme';
import RoundBtn from '../../components/common/button/roundBtn';
import {mockData} from '../../mock/mockData';
import Tag from '../../components/common/tag';
import ColoredLine from '../../components/common/coloredLine';
import ProgressBar from '../../components/progressBar';
import TextToggle from '../../components/common/toggle/textToggle';

export default function InvestDetailScreen({
  route,
  navigation,
}: UpperStackScreenProps<UpperStackNames.ProductDetail>) {
  const {data, isLoading, refetch, isSuccess, isError} = useGetProductById(
    route.params?.id,
  );

  const onPressMoreBtn = () => {
    navigation?.navigate('Root', {
      screen: RouteNames.MyTab,
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      {isError && (
        <FlexCenter>
          <Text>Error!</Text>
        </FlexCenter>
      )}
      {isSuccess && (
        <InvestDetailScrollView showsVerticalScrollIndicator={false}>
          <LinearGradientUpper
            colors={[
              darkTheme.color.background,
              'transparent',
              darkTheme.color.background,
            ]}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}
          />
          <ProductImage source={mockData?.image} />
          <Spacing height={400} />
          <ProductInfoContainer>
            <ProductTitle>{mockData?.title}</ProductTitle>
            <Spacing height={8} />
            <Text numberOfLines={3} ellipsizeMode="tail">
              {mockData?.description}
            </Text>
            <Spacing height={20} />
            <Row>
              {mockData?.category.map((category: string) => (
                <Tag title={category} style={{marginRight: 10}} />
              ))}
            </Row>
            <Spacing height={20} />
            <ColoredLine />
            <Spacing height={20} />
            <ProgressBar
              target={mockData.targetAmount}
              collected={mockData.collectedAmount}
            />
            <Spacing height={25} />
            <ColoredLine />
            <Spacing height={25} />
            {/*<TextToggle />*/}
          </ProductInfoContainer>
        </InvestDetailScrollView>
      )}
    </Container>
  );
}

const InvestDetailScrollView = styled(ScrollView).attrs(props => ({
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: props.theme.color.background,
  },
}))``;

const ProductImage = styled(FastImage)`
  position: absolute;
  width: 100%;
  aspect-ratio: 0.7;
`;

const ProductInfoContainer = styled.View`
  z-index: 2;
  padding-horizontal: 18px;
`;

const ProductTitle = styled(Title)`
  font-size: 30px;
`;

const LinearGradientUpper = styled(LinearGradient)`
  width: ${screenWidth}px;
  aspect-ratio: 0.7;
  position: absolute;
  z-index: 1;
`;
