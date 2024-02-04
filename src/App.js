import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Clock from "./components/Clock";
import ActionRow from "./components/ActionRow";

function App() {

    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("04");
    const [timer, setTimer] = useState(null);
    const [isWorkMode, setIsWorkMode] = useState(true);
    const [isActive, setIsActive] = useState(false);

    const start = () => {
        setTimer(setInterval(tick, 1000));
        setIsActive(true);
    }

    const pause = () => {
        clearInterval(timer);
        setIsActive(false);
    }

    const reset = () => {
        pause();
        if (isWorkMode) {
            setMinutes("25");
            setSeconds("00");
        } else {
            setMinutes("05");
            setSeconds("00");
        }
    }

    const finished = () => {
        pause();
        if (isWorkMode) {
            setIsWorkMode(false);
            setMinutes("05");
            setSeconds("00");
        } else {
            setIsWorkMode(true);
            setMinutes("25");
            setSeconds("00");
        }
    }

    const changeMode = (mode) => {
        pause();
        if (mode === "work") {
            setIsWorkMode(true);
            setMinutes("25");
            setSeconds("00");
        } else {
            setIsWorkMode(false);
            setMinutes("05");
            setSeconds("00");
        }
    }

    const tick = () => {
        setSeconds((prevSeconds) => {
            if (prevSeconds === "00" || prevSeconds === "0") {
                if (minutes === "00" || minutes === "0") {
                    finished();
                    return;
                }
                setMinutes((minutes) => String(Number(minutes) - 1));
                return "59";
            } else {
                return String(Number(prevSeconds) - 1);
            }
        });
    };


    return (
        <div className="App">
            <Navbar changeMode={changeMode}/>
            <Clock minutes={minutes} seconds={seconds}/>
            <ActionRow activateAction={isActive ? pause : start} resetClicked={reset}
                       currentAction={isActive ? "Pause" : "Start"}/>
        </div>
    );
}

export default App;
