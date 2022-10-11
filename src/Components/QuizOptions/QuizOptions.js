import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizOptions = ({option, correctAnswer}) => {
    const reviewAnswer = (option) => {
        if (option === correctAnswer) {
            toast("right answer!",{position: "top-center"})
        } else {
            toast("wrong answer!",{position: "top-center"})
        }
    }
    return (
        <div>
            <div>
                <input onClick={() => reviewAnswer(option)} className="m-2" type="radio" name="flexRadioDefault" id={option} />
                <label htmlFor={option}>
                {option}
                </label>
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuizOptions;