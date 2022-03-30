import logo from "../assets/images/logo.svg";
import "./App.scss";
import MyComponents from "./Example/MyComponents";
import ListToDo from "./Todos/ListToDo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigations from "./Navigations/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";
import SignupForm from "./Forms/SignupForm";
import FormTask from "./Task/FormTask";
import ColorBox from "./Hook/UseState-EasyFrontEnd/ColorBox/ColorBox";
import Index from "./Hook/UseState-EasyFrontEnd/ToDoList/Index";

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
            {/* <Route path="/" exact>
              <SignupForm />
            </Route> */}
            <Route path="/formTask">
              <FormTask />
            </Route>
            <Route path="/users" exact>
              <ListUser />
            </Route>
            <Route path="/users/:id">
              <DetailUser />
            </Route>
            <Route path="/colorBox">
              <ColorBox />
            </Route>
            <Route path="/todoList">
              <Index />
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
