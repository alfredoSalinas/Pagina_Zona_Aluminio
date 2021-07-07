
import './App.css';
import { Container, CssBaseline } from '@material-ui/core';
import Header from './components/header'
import ContentMain from './components/contentMain';
import Promociones from './components/promociones'
import ContentCards from './components/contentCards'
import DataTable from './components/tabla';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import productReducer from './store/reducers/product.reducer'
import quoteReducer from './store/reducers/quote.reducer'
import authReducer from './store/reducers/auth.reducer';
import List from './components/List';
import Login from './components/login';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

const allReducers = combineReducers({
  auth: authReducer,
  product: productReducer,
  quote: quoteReducer,
});

const middleWares = [ReduxThunk];

const rootReducer = (state, action)=>{
  return allReducers(state, action)
}

function App() {

  const store = createStore(
    rootReducer,
    applyMiddleware(...middleWares),
  )

  return (
    <Provider store={store}>
      <CssBaseline />
      
        <Router>
          <Header />
          
          <div className="App">
            <Route exact path="/" component={ContentMain} />
            <Route exact path="/productos" component={DataTable} />
            <Route exact path="/pedidos" component={List} />
          </div>
        </Router>
      
    </Provider>
  );
}

export default App;
