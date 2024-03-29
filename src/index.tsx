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
            main: '#1e7725',
        },
        secondary: {
            main: '#455a64',
            contrastText: '#fff',
        },
        myColor: {
            main: '#ffffff',
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
