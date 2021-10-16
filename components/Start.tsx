import React, { SetStateAction } from 'react'


const Start = (): JSX.Element => {
    const logPlayer = (name: string): void => {
    console.log(`New game starting for player: ${name}`)
    }
    let playerName: string = 'Audrey';
    logPlayer(playerName)
    return (
        <div>
            <p>Welcome to MultiMath! Startning a new game...</p>
        </div>
    )
    
}

export default Start