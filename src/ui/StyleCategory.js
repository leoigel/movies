import styled from 'styled-components';
import { ImgVerticalNotfound as ImgVerticalNotfoundMovie } from '../ui/MovieCardUI';
import { Container as ContainerMaterialIU } from '@material-ui/core';

const Container = styled(ContainerMaterialIU)`
  width: 960px;
  display: flex;
  justify-content: space-between;
`;
const Size = styled.div`
  transition: padding 1s;
  &:hover {
    padding-left: 10px;
  }
`;
const CardsContainer = styled.div`
  box-shadow: 4px 1px 7px -3px rgba(0, 0, 0, 0.47);
  display: flex;
  align-items: center;
  max-height: 120px;
  overflow: hidden;
  margin: 6px;
  border-radius: 30px 0px 0px 30px;
`;
const DivDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
  align-content: flex-start;
`;
const Paragraph = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px;
  max-height: 32px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const ReleaseDate = styled.span`
  margin: 0px;
  padding: 0px;
`;
const Title = styled.h4`
  margin: 0px;
  padding: 0px;
`;
const LI = styled.li`
  display: flex;
  font-size: 18px;
`;
const ImgVerticalNotfound = styled(ImgVerticalNotfoundMovie)`
  max-height: 120px;
  width: 92px;
`;
export {
  Container,
  Size,
  CardsContainer,
  ImgVerticalNotfound,
  DivDetails,
  Paragraph,
  ReleaseDate,
  Title,
  LI,
};
