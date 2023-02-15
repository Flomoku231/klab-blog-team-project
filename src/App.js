import './App.css';
import Home from './Pages/homePage/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './Pages/mlsSearch/Search';
import News from './Pages/News/News';
import { ContactUs } from './Pages/ContactUs/ContactUs';
import ExecutiveHouse from './Pages/ExecutiveHouse/ExecutiveHouse';
import NewsDetails from './Pages/News/NewsDetails/NewsDetails';
import { Dashboard } from './Pages/AdminDashboard/Dashboard';
import ReduxPractice from './Pages/ReduxPractice/ReduxPractice';
// import counter from './Pages/ReduxPractice/CounterSlice';
// import { configureStore } from '@reduxjs/toolkit';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={ <Home/> } path='/' />
          <Route element = { <Search/> } path = '/search' />
          <Route element = { <News/> } path = '/news' />
          <Route element = { <ExecutiveHouse/> } path = '/executiveHouse' />
          <Route element = { <ContactUs/> } path = '/contactUs' />
          <Route element = { <NewsDetails/> } path = '/newsDetails/:id'/>
          <Route element = { <Dashboard/> } path = '/admin/dashboard' />
          
          <Route element = { <ReduxPractice/> } path = '/redux' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
