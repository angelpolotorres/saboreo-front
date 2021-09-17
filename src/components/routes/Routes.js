import { Switch, Route } from 'react-router-dom';
import {
  Home,
  LogIn,
  SignUp,
  ResultsPage,
  AddDish,
  DishPage
} from '../pages/index';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/registro" component={SignUp} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/search" component={ResultsPage} />
      <Route exact path="/anadir-plato" component={AddDish} />
      <Route exact path="/plato/:id" component={DishPage} />
    </Switch>
  );
};
export default Routes;
