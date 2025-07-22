
import { Footer } from '../UI/Footer';
import { Header } from '../UI/Header';
import { Outlet } from 'react-router-dom';


function AppLayouts() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AppLayouts;