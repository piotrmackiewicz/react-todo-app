import React from 'react';
import List from 'Pages/Todo/List';
import Create from 'Pages/Todo/Create';
import Edit from 'Pages/Todo/Edit';
import { Router } from "@reach/router"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
        <h1>Todo App</h1>
      </header>
      <main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Container>
          <Router>
            <List path="/"/>
            <Create path="/create"/>
            <Edit path="/edit/:todoId"/>
          </Router>
        </Container>
      </main>
    </div>
  );
}

export default App;
