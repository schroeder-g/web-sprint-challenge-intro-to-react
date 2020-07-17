// Write your Character component here
import React from "react"
import Styled from "styled-components"

const StyledCharacter = Styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: snow;
    opacity: 66%;
    margin: 3% 12%;
    border: solid #222;
    box-shadow: 1px 1px 2px;
    align-items: center;

    h2 {
        align-items: flex-start;
        margin-left: 10%;
    }

    p {
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        font-style: {&.innertext === "undefined"? "italic" : "normal"}
    }
`

export default function Character ({character}) {

    return (
        <StyledCharacter>
            <h2>{character.name}</h2>
            <p> {character.birth_year}</p>
        </StyledCharacter>
    )
}