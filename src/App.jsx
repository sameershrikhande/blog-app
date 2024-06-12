import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from "./store/authSlice"
import './App.css'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const [key, setKey] = useState(0); // Add a key state
  useEffect(() => {
    setKey(prevKey => prevKey + 1); // Update the key to force re-render

    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error('Failed to fetch current user:', error);
        dispatch(logout());
      })
      .finally(() => {
        setLoading(false);
        // setKey(prevKey => prevKey + 1); // Update the key to force re-render
      });
  }, [dispatch]);

  return !loading ? (
    <>
    <div className='min-h-screen flex flex-wrap content-between base-100'>
      <div className='w-full block'>
       <Header />
       <main>
        <Outlet key={key}/>
       </main>
       <Footer />
     </div>
    </div>

    </>
  ) : null

}

export default App
