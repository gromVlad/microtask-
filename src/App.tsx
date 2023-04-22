import React, { useEffect } from "react";
import "./App.css";
import { NavLink,Navigate,Route, Routes, useNavigate, useParams } from "react-router-dom";

function App() {
  

  return (
    <>
      <div>
        <NavLink to={"/"} style={(par) => { return {color:par.isActive ? 'blue' : 'black'}}}>main </NavLink>
        <NavLink to={"/login"} className={({isActive}) => isActive ? 'act' : 'get' }> Login </NavLink>
        <NavLink to={"/profile"}> profile </NavLink>
      </div>

      <Routes>
        {/* /* */}
        <Route path={"/*"} element={<div>Error 404</div>} />
        <Route path={"/"} element={<div>main</div>} />
        <Route path={"/login"} element={<div>login</div>} />
        <Route path={"/profile"} element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

function Profile ()  {
  const nav = useNavigate()

  //тоесть при первом заспуске если юзер не зареган при попытке войти в профиль его перекидывает на login мол зарегайся дружок
  useEffect( () => {
    if (true) nav("/login");
  },[])

  return (
    <div>
      {/* 2 способ валидации логина или используем тернарный оператор */}
      {true && <Navigate to={"/login"}/>}
      profile
      <button onClick={() => {nav("-1")}}>Logout</button>
    </div>
  )
}