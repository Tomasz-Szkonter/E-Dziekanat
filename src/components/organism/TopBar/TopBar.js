import Heading from 'components/atoms/Heading/Heading';
import React from 'react';
import styled from 'styled-components';
import NavigationMainData from 'data/NavigationMainData';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
`;

const SvgContainer = styled.div`
  color: black;

  > svg {
    font-size: 36px;
    padding-bottom: 2px;
    margin: 0 20px;
  }
`;

const HeadingStyled = styled(Heading)`
  font-weight: 500;
`;

const WrapperLeft = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperRight = styled.div`
  display: flex;
  align-items: center;

  > :first-child {
    padding: 5px 20px;
    box-sizing: content-box;
    border-right: 1px solid black;
    margin-right: 2rem;
  }

  > svg {
    font-size: 24px;

    :last-child {
      font-size: 36px;
      color: grey;
      margin: 0 2rem;
    }
  }
`;

const TopBar = () => {
  const location = useLocation().pathname;
  const pathName = NavigationMainData.filter((item, index) => item.path === location);
  return (
    <Wrapper>
      <WrapperLeft>
        <SvgContainer>{pathName[0].icon}</SvgContainer>

        <HeadingStyled big>{pathName[0].title}</HeadingStyled>
      </WrapperLeft>
      <WrapperRight>
        <AiIcons.AiFillMessage />
        <Heading>Jan Kowalski</Heading>
        <FaIcons.FaUserCircle />
      </WrapperRight>
    </Wrapper>
  );
};

export default TopBar;