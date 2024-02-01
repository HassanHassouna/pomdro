import React from 'react';

function ActionRow({activateAction, resetClicked, currentAction}) {
    return (
        <div className="action-row">
            <button onClick={activateAction}>{currentAction}</button>
            <button onClick={resetClicked}>Reset</button>
        </div>
    )
}

export default ActionRow;
