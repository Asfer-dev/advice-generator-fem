import React from 'react';
import logoDividerDesk from './pattern-divider-desktop.svg';
import iconDice from './icon-dice.svg';
import axios from 'axios';

function AdviceBox() {

    const [advice, setAdvice] = React.useState({});

    React.useEffect(() => {
        axios.get("/advice")
        .then((res) => {
            setAdvice(res.data);
        });
    }, []);


    return (
        <div className="advice-box">
            <h1 className="advice-heading">Advice #{advice.id}</h1>
            <p className="advice-text">"{advice.advice}"</p>
            <img className="pattern-divider" src={logoDividerDesk} />
            <button className="btn-dice" onClick={() => {
                axios.get("/advice")
                    .then((res) => {
                        setAdvice(res.data);
                    });
            }}>
                <img src={iconDice} />
            </button>
        </div>
    );
}

export default AdviceBox;