import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderComponents from './components/HeaderComponents';
import LoginButton from './components/LoginButton';

// react -> html in js
// plain -> js in html

// 1. Redundancy
// 2. State management

// JSX
function App() {
    const test = "ajksndfkjasdnfkasjnfsdakjfnak";
    const arrayOfZeros = Array.from({ length: 10 }, (_, id) => id);
    const descriptions = [
        "descrition 1",
        "ini deskripsi 2"
    ]

    const [number, setNumber] = useState(0);
    const [double, setDouble] = useState(0);
    const [a, setA] = useState("test");

    // kita bisa track sebuah state (dependency), dan melakukan sesuatu apabila dependency berubah
    useEffect(() => {
        setNumber(12)
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <LoginButton number={number} />
                <button
                    onClick={
                        function() {
                            setNumber(number + 1)
                        }
                    }
                >
                    Increment number
                </button>
            </header>
        </div>
    );
}
export default App;
