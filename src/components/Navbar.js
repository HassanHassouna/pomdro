import React from 'react';

// This component should receive one function as props:
// changeMode
// The component will have two buttons:
// Work mode
// Break mode
// Both will invoke the changeMode method with a relevant argument ('work' or 'break')

function Navbar({changeMode}) {
    return (
        <div className="navbar">
            <button onClick={() => changeMode('work')}>Work mode</button>
            <button onClick={() => changeMode('break')}>Break mode</button>
        </div>
    )
}

export default Navbar;
