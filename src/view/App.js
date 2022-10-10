import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import MyComponents from "./Example/MyComponents";
import SignupForm from "./Forms/SignupForm";
import Home from "./Home/Home";
import PostListIndex from "./Hook/UseEffect-EasyFrontEnd/PostList/PostListIndex";
import Index from "./Hook/UseState-EasyFrontEnd/ToDoList/Index";
import Navigations from "./Navigations/Navigation";
import IndexSaga from "./Saga_hook";
import FormTask from "./Task/FormTask";
import ListToDo from "./Todos/ListToDo";
import DetailUser from "./Users/DetailUser";
import ListUser from "./Users/ListUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigations />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/MyComponents">
              <MyComponents />
            </Route>
            <Route path="/listToDo">
              <ListToDo />
            </Route>
            <Route path="/SignupForm" exact>
              <SignupForm />
            </Route>
            <Route path="/formTask">
              <FormTask />
            </Route>
            <Route path="/users" exact>
              <ListUser />
            </Route>
            <Route path="/users/:id">
              <DetailUser />
            </Route>
            {/* <Route path="/colorBox">
              <ColorBox />
            </Route> */}
            <Route path="/todoList">
              <Index />
            </Route>
            <Route path="/postList">
              <PostListIndex />
            </Route>
            <Route path="/saga">
              <IndexSaga />
            </Route>
          </Switch>

          {/* <MyComponents /> */}
          {/* <ListToDo /> */}
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
