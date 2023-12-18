import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { DarkModeProvider, useDarkMode } from '../context/DarkModeContext';

function MainLayout() {

  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? `dark-mode main-layout` : `light-mode main-layout`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Outlet/>
    </div>
  )
}

export default MainLayout