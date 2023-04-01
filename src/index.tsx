import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/redux-store';
import App from './App';
import {Provider} from 'react-redux';
import { createTheme } from '@mui/material/styles'
import {ThemeProvider} from '@mui/material';


const theme = createTheme({
    components:{

    },
    palette: {
        primary: {
            main: '#1b5e20',
        },
        secondary: {
            main: '#455a64',
        },
        myColor: {
            main: '#efebeb',
        },

    },

});

ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                <App/>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
