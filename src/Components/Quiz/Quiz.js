import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quizData = useLoaderData().data
    console.log(quizData.name)
    return (
        <div className='py-5'>
            <h2 className='mb-5'>Topic name: {quizData.name}</h2>
            {
                quizData.questions.map((quizes) => <QuizDetails key={quizes.id} quizes={quizes}></QuizDetails>)
            }
        </div>
    );
};

export default Quiz;