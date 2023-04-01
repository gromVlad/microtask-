import React from 'react';
import './App.css';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Main } from './main/main';
import { ShowPeople } from './showPeople/showPeople';

function App() {

  const listPeopleInfo = [
    { naming: "Vlad", age: 28, country: "Bel" },
    { naming: "Ciril", age: 29, country: "Bel" },
    { naming: "Oleg", age: 20, country: "RUS" },
    { naming: "Dmitry", age: 18, country: "Bel" },
    { naming: "Alex", age: 25, country: "RUS" },
    { naming: "Vova", age: 36, country: "Bel" },
    { naming: "Andrea", age: 65, country: "UKR" },
    { naming: "Ulia", age: 12, country: "Bel" },
    { naming: "Mark", age: 18, country: "KZX" },
  ];

  return (
    <>
      <Header titleHeader={"Hello my friends"} />
      <Main titleMain={"I am from Belarus"} />
      <Footer titleFooter={"My name is Vlad"} />
      <ShowPeople people = {listPeopleInfo} />
    </>
  );
}
export default App;
