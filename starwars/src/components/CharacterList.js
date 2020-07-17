import React from "react"
import Styled from "styled-components"
import {v4 as uuidv4} from "uuid"

import Character from "./Character"


const StyledList = Styled.section`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    list-style-type: none;
    background-color: snow;
    opacity: 
    h2 {
        text-align: center;
        width: 100%;
    }
`

export default function CharacterList ({characters}) {characters && 
    console.log(characters)
    return (
        <StyledList>

            {characters &&
                characters.results.map(character => {
                    return (
                        <Character character={character} key={uuidv4()}/>
                    )
                })
            }
        </StyledList>
    )
}