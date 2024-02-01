import React from 'react';

function Clock({minutes, seconds}) {

    return (
        <div className="clock">
            <h1>{minutes}:{seconds}</h1>
        </div>
    )
}

export default Clock;
