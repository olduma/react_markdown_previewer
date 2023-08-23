// App.jsx
import React from 'react';
import './App.css';
import TextEditor from "./components/Editor/Editor";
import { Provider } from 'react-redux';
import { store } from './app/store';
import Preview from "./components/Preview/Preview";
import HeaderInfo from "./components/HeaderInfo/HeaderInfo";
import FooterInfo from "./components/FooterInfo/FooterInfo";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <HeaderInfo />
                <TextEditor />
                <Preview />
                <FooterInfo />
            </Provider>
        </div>
    );
}

export default App;
