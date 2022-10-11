import React from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizDetails = ({quizes}) => {
    const {question,options,correctAnswer} = quizes
    const rightAnswer = (correctAnswer) => {
        toast(`corect answer is: ${correctAnswer}`,{position: "top-center"})
    }
    return (
        <div className='container mb-5'>
            <div className='quiz-title d-flex justify-content-center'>
                <h4 htmlFor="">{question}</h4>
                <button onClick={() => rightAnswer(correctAnswer)} className='btn btn-success'><i class="bi bi-eye"></i></button>
                
            </div>
            {
                options.map((option,_idx) => <QuizOptions key={_idx} option={option} correctAnswer={correctAnswer}></QuizOptions>)
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizDetails;