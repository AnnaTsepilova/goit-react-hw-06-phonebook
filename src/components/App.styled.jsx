import styled from 'styled-components';

export const PhonePageWrapper = styled.main`
  min-height: calc(100vh - 64px);
  min-width: 320px;
  width: 100%;

  margin: 0 auto;
  padding: 0 15px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Title = styled.h1`
  padding-top: ${props => props.theme.space[6]}px;
  padding-bottom: ${props => props.theme.space[6]}px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: ${props => props.theme.fontSizes.xl}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
  //border-bottom: 2px solid #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const PhonebookContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 58px;
  margin-bottom: 58px;

  background-color: #fcfcfc;

  box-shadow: ${props => props.theme.shadows.boxShadow};
  border-radius: 8px;
`;
