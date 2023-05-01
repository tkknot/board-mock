import "../../styles/style.css";
import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Layout } from "./Layout";
import { Sidebar } from "./SIdebar";
import { ContentArea } from "./ContentArea";

import { Home } from '../../Page/Home'
import { Create } from '../../Page/Create'

import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/user/api")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  console.log(user);

  return (
    <div className='App'>
      <Header />
      <Layout>
        <BrowserRouter>
          <Sidebar />
          <ContentArea>
            <Routes>
              {/* home */}

              <Route path='/' element={<Home />} />

              {/* create-slead */}
              <Route path='/create' element={<Create />} />
            </Routes>
          </ContentArea>
        </BrowserRouter>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
