
import './App.css';
import { Container, CssBaseline } from '@material-ui/core';
import Header from './components/header'
import ContentMain from './pages/contentMain';
import Promociones from './components/promociones'
import ContentCards from './components/contentCards'
import DataTable from './pages/tabla';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import productReducer from './store/reducers/product.reducer'
import clientReducer from './store/reducers/client.reducer'
import quoteReducer from './store/reducers/quote.reducer'
import authReducer from './store/reducers/auth.reducer';
import adminReducer from './store/reducers/admin.reducer'
import fotosReducer from './store/reducers/fotos.reducer';
import List from './components/List';
import KitsCards from './pages/kitsCards';
import HerrajesCards from './pages/herrajesCards';
import BasculantesCards from './pages/basculantesCards';
import AbatirCards from './pages/abatirCards';
import FijosCards from './pages/fijosCards';
import MinisCards from './pages/minisCards';
import QuincalleriaTable from './pages/quincalleria';
import JaladoresTable from './pages/jaladores';
import L12Cards from './pages/l12Cards';
import L20Cards from './pages/l20Cards';
import L25Cards from './pages/l25Cards';
import L32Cards from './pages/l32Cards';
import L35Cards from './pages/l35Cards';
import L42Cards from './pages/l42Cards';
import L4000Cards from './pages/l4000Cards';
import VTCards from './pages/vtCards';
import TubosCards from './pages/tubosCards';
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
import BarandasCards from './pages/barandasCards';
import PlacasCards from './pages/placasCards';

const allReducers = combineReducers({
  admin: adminReducer,
  auth: authReducer,
  product: productReducer,
  client: clientReducer,
  quote: quoteReducer,
  fotos: fotosReducer,
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
/*
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
 */
  return (
    <Provider store={store}>
      <CssBaseline />
        <Router>
          <Root>
            <Header />
            <Switch className="App">
              <GuardRoute exact path="/" component={ContentMain} />
              <Route exact path="/productos" component={DataTable} />
              <Route exact path="/kits" component={KitsCards} />
              <Route exact path="/herrajes" component={HerrajesCards} />
              <Route exact path="/basculantes" component={BasculantesCards} />
              <Route exact path="/abatir" component={AbatirCards} />
              <Route exact path="/fijos" component={FijosCards} />
              <Route exact path="/minis" component={MinisCards} />
              <Route exact path="/quincalleria" component={QuincalleriaTable} />
              <Route exact path="/jaladores" component={JaladoresTable} />
              <Route exact path="/linea12" component={L12Cards} />
              <Route exact path="/linea20" component={L20Cards} />
              <Route exact path="/linea25" component={L25Cards} />
              <Route exact path="/linea32" component={L32Cards} />
              <Route exact path="/linea35" component={L35Cards} />
              <Route exact path="/linea42" component={L42Cards} />
              <Route exact path="/linea4000" component={L4000Cards} />
              <Route exact path="/templado" component={VTCards} />
              <Route exact path="/tubos" component={TubosCards} />
              <Route exact path="/barandas" component={BarandasCards} />
              <Route exact path="/placas" component={PlacasCards} />
              <Route exact path="/pedidos" component={List} />
              <Route exact path="/clientes" component={Clientes} />
            </Switch>
          </Root>
        </Router>
    </Provider>
  );
}

export default App;
