import styled from 'styled-components/native';

import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #7B2DBE;
  margin: 64px 0px 24px;
  font-family: 'Ubuntu-Bold';
`;

export const Image = styled.Image`
  width: 231px;
  height: 120px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 14px;
  color: rgba(123, 45, 190, 1);
`;

export const MoreInformationButton = styled.TouchableOpacity`
  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 0.5px;
  border-color: rgba(123, 45, 190, 0.1);
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const MoreInformationButtonText = styled.Text`
  font-size: 16px;
  font-family: 'Ubuntu-Regular';
  color: #7b2dbe;
  margin-left: 5px;
`;
