import "../../styles/style.css";
import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Layout } from "./Layout";
import { Sidebar } from "./SIdebar";
import { ContentArea } from "./ContentArea";

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
        <Sidebar />
        <ContentArea />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
