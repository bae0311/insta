import React from 'react';
import styled from 'styled-components';

const RespnsiveBlock = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    width:1024px;
    margin:0 auto;

    @media(max-width: 1024px){
        width:768px;
    }

    @media(max-width:768px){
        width:100%;
    }
`;

const Responsive = ({children, ...rest}) => {
    //style, classNAme, onClick, onMouseMove 등의 props를 사용할 수 있도록
    //...rest를 사용하여 ResponsiveBlock에게 전달
    return <RespnsiveBlock {...rest}></RespnsiveBlock>;
};

export default Responsive;