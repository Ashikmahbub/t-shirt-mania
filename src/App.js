 
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './components/Home/Home';
import Order from './components/Orders/Order';

function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:() =>fetch('tshirts.json'),
          element:<Home></Home>
        },
        {
          path:'orders',
          element:<Order></Order>
        },

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
