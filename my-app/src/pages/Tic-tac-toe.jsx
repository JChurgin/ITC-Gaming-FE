import axios from "axios";
import React, { useEffect, useState } from "react";
import './Tic-tac-toe.css'
import { io } from "socket.io-client";

let socket;
const TicTacToe = () => {
    const [symbol, setSymbol] = useState('E')
    const [game, setGame] = useState({ board: [] })

    useEffect(() => {
        socket = io('/')
        socket.on('gameState', game => {
            setGame(game)
        })

        socket.on('gameReset', game => {
            setGame(game)
        })

        socket.on('gameStarted', game => {
            setGame(game)
        })

        socket.on('gameOver', game => {
            setGame(game)
        })

        socket.on('symbol', symbol => {
            setSymbol(symbol)
        })

        socket.on('error', ({ error }) => {
            console.error(error)
        })
        
        return () => { socket.disconnect() }
    }, [])

    const handleClick = (pos) => {
        socket.emit('move', { pos });
    }
    
    const renderSquare = (index) => (
        <Square value={game.board[index]} onClick={() => handleClick(index)} />
    );

    return (
        <body className="body-tic">
            <div>
                <div className="status">{game.winner}</div>
                <div></div>
                <div className="one-two-squares">
                    <h1 className="x">X</h1>
                </div>
                <div className="one-two-squares">
                    <h1 className="o">O</h1>
                </div>
                <div className="tic-container">
                    <div className="board-row">
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div>
            </div>
            {/* <button className="restart-btn" onClick={restart}><b>RESTART</b></button> */}
        </body>
    );
};

const Square = ({ value, onClick }) => (
    <button className="square" onClick={onClick}>
        {value}
    </button>
);

export default TicTacToe;