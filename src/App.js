import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Footer from './footer/footer';
import HomePage from './homepage/HomePage';
import React,{useState} from 'react';
function App() {

  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
    <HomePage activeTab={activeTab} onTabChange={handleTabChange} />
  </div>
  );
}

export default App;
