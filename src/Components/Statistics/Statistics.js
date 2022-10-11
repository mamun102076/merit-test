import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const staticData = useLoaderData().data
    return (
        <div className='quiz-chart'>
            <h1>Quiz chart</h1>
            <div className='bar-chart my-5'>
                <BarChart width={450} height={340} data={staticData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;