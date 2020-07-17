// Write your Character component here
import React from "react"
import Styled from "styled-components"

import ArrowButton from "./ArrowButton"

const StyledCharacter = Styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border: solid #222;
    box-shadow: 1px 1px 2px;
    align-items: center;
    margin-bottom: 6.3%;
    
    li {
        width: 100%;
    }

    h2 {
        align-items: flex-start;
        opacity: 168%;
    }

    p {
        font-weight: bold;
        opacity: 73%;
        text-align: center;
        margin-right: 5%;
        font-style: {&.innertext === "undefined"? "italic" : "normal"}
    }
`

export default function Character ({character}) {

    return (
        <StyledCharacter>
            <li>
                <h2>{character.name}</h2>
                <p> {character.birth_year}</p>
                <br/>
                <ArrowButton/>
                {/* <AdditionalInformation}/> */}
                {/* {Related members of the arcana: if } */}
            </li>
        </StyledCharacter>
    )
}