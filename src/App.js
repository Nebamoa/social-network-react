import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter, Routes, Route, useParams  } from "react-router-dom";
import ProfileContainerBiopage from './components/Profile/ProfileContainerBiopage';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='profile' element={<ProfileContainerBiopage />} />
            <Route path='/users/*' element={<UsersContainer />} />
            <Route path='login' element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
