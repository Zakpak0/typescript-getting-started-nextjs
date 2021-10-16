import Head from 'next/head'
import Start from '../components/Start'
import { SetStateAction, useRef, useState } from 'react'
import Player from '../components/Player'

// import App from '../components/App'



const Home = (): JSX.Element => {
const [starter, useStarter] = useState<JSX.Element>()
const [playerName, setPlayerName] = useState<String>('MultiMath Player')
const [renderName, setRenderName ] = useState<JSX.Element | String | Number>('No Scores Yet')
const [score, postScore] = useState<Number>(80)
const startGame = () => {
    useStarter(<Start/>)
    setRenderName(<div className="flex flex-row"><h3>{score} &nbsp; - &nbsp; {playerName}</h3></div>)
        let logger: (value: string) => void;

        if (score < 0){
            logger = logError;
        }else{
            logger = logMessage;
        }
            logger(`Score: ${score}`);
} 
const logMessage = (message: string) => {
    console.log(message)
}

function logError(err: string): void {
    console.error(err)
}
    
    const firstPlayer: Player = new Player();
    firstPlayer.name = 'Lanier'
    console.log(firstPlayer.formatName())

return (
<div>
<Head lang="en">
    <meta charset="UTF-8"/>
    <title>MultiMath</title>
</Head>
<div className="flex flex-grow bg-orangered h-14 text-lg rounded 
text-white">
    <div className="py-3">
    <h1 className="px-2" >MultiMath</h1>
    </div>
</div>
<div className="md:px-52">
<div className="-space-y-8 md: text-sm">
    <div className="flex flex-row px-5 py-6">
        <h1 className="flex items-center text-right w-20 whitespace-nowrap 
        font-medium">Player Name</h1>
        <div className="px-5" >
        <input onChange={e => setPlayerName(e.target.value)} className="rounded border pl-2 md:w-60 text-left border-gray-300 
        h-10 w-28" placeholder="Player Name" />
        </div>
    </div>
        <div className="flex flex-row px-5 py-6">
        <h1 className="flex items-center w-20 font-medium">Factor</h1>
        <div className="px-5" >
        <input className="rounded border pl-2 text-left border-gray-300 
        placeholder-black h-10 w-28 md:w-60" placeholder="5" disabled />
        </div>
    </div>
        <div className="flex flex-row px-5 py-6">
        <h1 className="flex break-normal w-20 items-center font-medium">
            Number of Problems</h1>
        <div className="px-5" >
        <input className="rounded border md:w-60 border-gray-300 pl-2 text-left h-10 w-28" 
        placeholder="Number of Problems" />
        </div>
    </div>
</div>
<div className="px-28">
    <div className="px-2 flex flex-row space-x-1 text-white">
    <div>
        <button onClick={() => startGame()} className=" px-2 bg-orangered rounded 
        px h-9">Start Game</button>
    </div>
        <div>
        <button className=" bg-green-300 w-32 rounded px h-9">Calculate Score</button>
    </div>
    </div>
</div>
<div className="px-32 py-10">
    <div>
        <h1 className="text-3xl">ScoreBoard</h1>
    </div>
        <div className="py-3">
        {renderName}
    </div>
</div>
<div className="px-32">
    {starter}
</div>
</div>
</div>
    )
}
export default Home;
