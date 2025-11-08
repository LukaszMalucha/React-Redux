import { React } from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

function App() {
    const message = "Bye There"

    return <h1>{ message }</h1>;
}

root.render(<App />);