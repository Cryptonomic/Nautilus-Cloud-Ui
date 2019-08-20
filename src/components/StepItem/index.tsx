import React from 'react';
import styled from 'styled-components';

import checksvg from '../../assets/img/util-checkmark_icon.svg';
import opensvg from '../../assets/img/util-open_icon.svg';



const Container = styled.div`
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Line = styled.div<{isActive: boolean}>`
  flex: 1;
  height: 3px;
  background: ${({ isActive }) => (isActive ? 'rgb(237, 240, 247)' : 'transparent')};
`;

const IconContainer = styled.div<{isActive: boolean}>`
  position: relative;
  border-radius: 55px;
  width: 107px;
  height: 107px;
  border: ${({ isActive }) => (isActive ? '3px solid rgb(237, 240, 247)' : 'none')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckIcon = styled.img`
  position: absolute;
  top: 3px;
  right: 3px;
`;

const OpenIcon = styled.img`
  margin-left: 6px;
  cursor: pointer;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 19px;
`;

const Title = styled.span`
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

interface StepType {
  name: string;
  icon: string;
}

interface Props {
  item: StepType;
  isActive: boolean;
  index: number;
  onOpenUrl: () => void;
}

const StepItem: React.FC<Props> = (props) => {
  const { index,  isActive, item, onOpenUrl } = props;
  return (
    <Container>
      <TopContainer>
        <Line isActive={index !== 0} />
        <IconContainer isActive={isActive}>
          {isActive && <CheckIcon src={checksvg} />}
          <img src={item.icon} />
        </IconContainer>
        <Line isActive={index !== 3} />
      </TopContainer>
      <BottomContainer>
        <Title>{item.name}</Title>
        {!isActive && <OpenIcon src={opensvg} onClick={onOpenUrl}  />}
      </BottomContainer>
    </Container>
  );
};

export default StepItem;