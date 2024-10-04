import Register from './pages/regis.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/login.jsx';
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import RootLayout from './layouts/Rootlayout.jsx';



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
      </Route>

    )
  )
  return (
    <RouterProvider router={router}/>
);

}

export default App
