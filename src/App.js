import Home from './page/Home/Home';
//component
import Auto from './page/Automobile/Automobile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/automobile' component={Auto}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
