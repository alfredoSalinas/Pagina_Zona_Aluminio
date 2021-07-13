
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
import clientReducer from './store/reducers/client.reducer'
import quoteReducer from './store/reducers/quote.reducer'
import authReducer from './store/reducers/auth.reducer';
import adminReducer from './store/reducers/admin.reducer'
import List from './components/List';
import Login from './components/login';
import Clientes from './components/clientes'
import Root from './components/root'
import { signIn, signOut, authReady } from './store/actions/auth.actions';
import { isAdmin } from './store/actions/admin.actions';
//import { useSelector, useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import GuardRoute from './components/guardRoute'

import { watchUserChanges, watchClientes, getAdmin, salir } from './services/firebase'

const allReducers = combineReducers({
  admin: adminReducer,
  auth: authReducer,
  product: productReducer,
  client: clientReducer,
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
  
  watchUserChanges((user)=>{
    console.log(user)
    store.dispatch(authReady(true))
    if(user !=null){
      store.dispatch(signIn(user))
    }
    if(user != null){
      getAdmin(user, (admin)=>{
        store.dispatch(isAdmin(admin))
      })
    }
  })
 
  return (
    <Provider store={store}>
      <CssBaseline />
          <Router>
            <Root>
            <Header />
            <Switch className="App">
              <GuardRoute exact path="/" component={ContentMain} />
              <Route exact path="/productos" component={DataTable} />
              <Route exact path="/pedidos" component={List} />
              <Route exact path="/clientes" component={Clientes} />
            </Switch>
            </Root>
          </Router>
    </Provider>
  );
}

export default App;
