import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            contrastText: grey[50],
            main: '#F8A5C2',
        },
        secondary: {
            contrastText: grey[50],
            main: '#3DC1D3',
        },
    },
    typography: {
        fontFamily: `'M PLUS Rounded 1c', sans-serif;`
    }
});

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
