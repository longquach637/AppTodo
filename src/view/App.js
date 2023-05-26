import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import DragAndDrop from "./DragAndDrop/DragAndDrop";
import MyComponents from "./Example/MyComponents";
import Home from "./Home/Home";
import ColorBox from "./Hook/UseState-EasyFrontEnd/ColorBox/ColorBox";
import Navigations from "./Navigations/Navigation";
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
            <Route path="/dragDrop">
              <DragAndDrop />
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
