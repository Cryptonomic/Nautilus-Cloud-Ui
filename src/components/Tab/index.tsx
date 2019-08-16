import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{isActive: boolean}>`
  width: 83px;
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
  text-align: center;
  text-transform: capitalize;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? 'rgb(85, 113, 167)' : 'rgb(155, 155, 155)')};
  border-bottom: ${({ isActive }) => (isActive ? '3px solid rgb(98, 108, 238)' : '3px solid rgb(237, 240, 247)')};
`;

interface Props {
  isActive: boolean;
  name: string;
  onChange: () => void;
}

const Tab: React.FC<Props> = (props) => {
  const { isActive, name, onChange } = props;
  return (
    <Container isActive={isActive} onClick={onChange} >
      {name}
    </Container>
  );
};

export default Tab;