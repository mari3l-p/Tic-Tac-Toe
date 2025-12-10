import './TicTacToe.css'
import React, { useRef, useState } from 'react'

    
const TicTacToe = () => {

    const [data, setData] = useState(Array(9).fill(""));

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false)

    const titleRef = useRef(null)

    const toggle = (e, num) => {

        if (lock || data[num]) {
            return 0;
        }


        const newData = [...data]

        if (count % 2 === 0) {
            e.target.innerHTML = `<span class="xMark">X</span>`
            newData[num] = 'X'
        } else {
            e.target.innerHTML = `<span class="circle">O</span>`
            newData[num] = 'O'
        }

        setData(newData);
        setCount(c => c + 1)
        checkWin(newData)
        
    }

    const winPatter = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal  wins
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical wins
        [0, 4, 8], [2, 4, 6] // diagonal wins
    ]

    const checkWin = (board) => {
        for (let [a, b, c] of winPatter) {

            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                setLock(true)
                titleRef.current.innerHTML = `Congratulations <span>${board[a]}</span> is the winner`

                return;
            }
        }
    }


    const reset = () => {
        setData(Array(9).fill(""));
        setLock(false);
        setCount(0)
        titleRef.current.innerHTML = `Tic Tac Toe Game in <span>React</span>`
        document.querySelectorAll('.boxes').forEach(box => box.innerHTML = "");
    }


  return (
    <div>
        <div className="container">

            <h1 className="title" ref={titleRef} >Tic Tac Toe Game in <span>React</span></h1>

            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e) => toggle(e, 0)} ></div>
                    <div className="boxes" onClick={(e) => toggle(e, 1)} ></div>
                    <div className="boxes" onClick={(e) => toggle(e, 2)} ></div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e) => toggle(e, 3)} ></div>
                    <div className="boxes" onClick={(e) => toggle(e, 4)} ></div>
                    <div className="boxes" onClick={(e) => toggle(e, 5)} ></div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e) => toggle(e, 6)} ></div>
                    <div className="boxes" onClick={(e) => toggle(e, 7)} ></div>
                    <div className="boxes" onClick={(e) => toggle(e, 8)} ></div>
                </div>
            </div>

            <button className='reset' onClick={reset} >Reset</button>
        </div>
    </div>
  )
}

export default TicTacToe