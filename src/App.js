import React from "react";
import Navbar from './Navbar';
import Main from './Main'
import Footer from './Footer'
import listItem from './list-item.json'

import './style.css'
export default function App({listItem}) {
  return (
    <main>
      <Navbar value={listItem}/>
      <Main/>
      <Footer/>
    </main>
  );
}
