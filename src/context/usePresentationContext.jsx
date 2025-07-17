import React, { createContext, useContext, useState } from 'react';

// 1. Crear el contexto
const PresentationContext = createContext();

// 2. Hook personalizado para usar el contexto
export const usePresentationContext = () => {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error('usePresentationContext debe usarse dentro de PresentationProvider');
  }
  return context;
};

// 3. Provider del contexto
export const PresentationProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({
    name: 'Estudiante',
    level: 'Principiante',
    progress: 0
  });
  const [settings, setSettings] = useState({
    fontSize: 'medium',
    animations: true,
    notifications: true
  });

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const updateUser = (newUserData) => {
    setUser(prev => ({ ...prev, ...newUserData }));
  };

  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const incrementProgress = () => {
    setUser(prev => ({
      ...prev,
      progress: Math.min(prev.progress + 10, 100)
    }));
  };

  const value = {
    // Estados
    theme,
    user,
    settings,
    // Funciones
    toggleTheme,
    updateUser,
    updateSettings,
    incrementProgress
  };

  return (
    <PresentationContext.Provider value={value}>
      {children}
    </PresentationContext.Provider>
  );
};

export default PresentationContext;