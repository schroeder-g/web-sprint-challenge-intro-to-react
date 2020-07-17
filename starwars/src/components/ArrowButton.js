import React from 'react'
import Styled, {keyframes} from 'styled-components'

const kf = keyframes`
    transition: 200ms ease-in-out;
0% {
  transform: scale(0);
  opacity: 1
  top: 1
}

20% {
    opacity: 0;
}

30%{
    opacity: 0;
}
50% {
  transform: scale(0.3);
  opacity: 0.5;
  top: 50px
}
100% {
  transform: scale(1) rotate(180deg);
  opacity: 1;
  top: 100px
}
`

const StyledBtn = Styled.button`
    width: 28px;
    height: 28px;
    border: solid black 0 1px 1px 0 ;
    transition: ${kf};
`

export default function ArrowButton() {
    return (
        <StyledBtn/>
    )
}
