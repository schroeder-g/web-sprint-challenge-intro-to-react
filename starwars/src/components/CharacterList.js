import React from "react"
import Styled from "styled-components"
import {v4 as uuidv4} from "uuid"

import Character from "./Character"

export default function CharacterList ({characters}) {characters && 
    console.log(characters)
    return (
        <section>
            {characters &&
                characters.results.map(character => {
                    return (
                        <Character character={character} key={uuidv4()}/>
                    )
                })
            }
        </section>
    )
}