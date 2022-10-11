import React from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';

const QuizDetails = ({quizes}) => {
    const {question,options} = quizes
    return (
        <div className='container mb-5'>
            <h4 htmlFor="">{question}</h4>
            {
                options.map((option,_idx) => <QuizOptions key={_idx} option={option}></QuizOptions>)
            }
        </div>
    );
};

export default QuizDetails;