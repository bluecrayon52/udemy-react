import React from 'react'; 

const userOutput = (props) => {
    const style = { 
        backgroundColor: 'gold', 
        font: 'inherit', 
        border: '3px solid black',
        padding: '10px',
        margin: "10px"
    }

    return (
        <div style={style}>
           <p>username: {props.username}</p>
        </div>
    );
}

export default userOutput; 