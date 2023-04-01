import React from 'react';
import './App.css';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Main } from './main/main';

function App() {
  return (
    <>
      <Header titleHeader={"Hello my friends"} />
      <Main titleMain={"I am from Belarus"} />
      <Footer titleFooter={"My name is Vlad"} />
    </>
  );
}
export default App;
