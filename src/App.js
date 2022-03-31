import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home, Product, Pay, Pin, PaymentDone} from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/product/:id' component={Product} />
        <Route path='/pay' component={Pay} />
        <Route path='/pin' component={Pin} />
        <Route path='/paymentDone' component={PaymentDone} />
      </Switch>
    </Router>
  );
}

export default App;
