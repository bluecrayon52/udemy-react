import React from 'react'; 

const validation = (props) => {

    let message = (null); 

    if (props.textLength > 0 && props.textLength < 5) {
        message = (<p>Text too short</p>)
    } else if (props.textLength >= 5) {
        message = (<p>Text long enough</p>)
    }

    return (
        <div className="">
            {message}
        </div>
    );
}

export default validation; 