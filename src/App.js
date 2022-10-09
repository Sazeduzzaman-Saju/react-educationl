import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Main from './layout/Main';
import Home from './components/Home/Home';
import HowToWorks from './components/HowToWorks/HowToWorks.';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        { path: '/', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'howtoworks', element: <HowToWorks /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
