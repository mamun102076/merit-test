import React from 'react';

const QuizOptions = ({ option }) => {
    return (
        <div>
            <input className="m-2" type="radio" name="flexRadioDefault" id={option} />
            <label className="" htmlFor={option}>
            {option}
            </label>
        </div>
    );
};

export default QuizOptions;