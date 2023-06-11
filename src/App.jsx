import { Provider } from "react-redux";
import { store } from "./store";
import { MainRoutes } from "./routes/MainRoutes";
// import { AdminLayoat } from "./layout/AdminLayoat";
// import { SignIn } from "./pages/SignIn";
// import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  );
};

export default App;
