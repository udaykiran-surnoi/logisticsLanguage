// LanguageContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from './i18n';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem('appLanguage');
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
        setLanguage(savedLanguage);
      }
    };
    loadLanguage();
  }, []);

  const changeLanguage = async (langCode) => {
    i18n.changeLanguage(langCode);
    setLanguage(langCode);
    await AsyncStorage.setItem('appLanguage', langCode);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};