import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Header from '../Header/Header';

const Home = () => {
    const category = useLoaderData().data
    return (
        <div>
            <Header></Header>
            <div className='category-container my-5'>
                <div className='container'>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {
                            category.map( (category) => <Card key={category.id} category={category}></Card>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;