import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import Statistics from './Components/Statistics/Statistics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
      {
        path: '/', 
        loader: async () => {
        return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Home></Home>
      },
      {
        path: '/quiz/:quizId', loader: async ({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        element: <Quiz></Quiz>
      },
      {path: '/statistics', element: <Statistics></Statistics>},
      {path: '/blog', element: <Blog></Blog>},
      {path: '*', element: <div>Sorry data not found</div>}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
