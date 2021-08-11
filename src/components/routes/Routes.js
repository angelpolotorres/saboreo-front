import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Home,
  LogIn,
  SignUp,
  ResultsPage,
  AddDish
} from '../pages/PagesComponents';
import { UploadFile } from '../pages/UploadFile/UploadFile';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registro" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/search" component={ResultsPage} />
        <Route exact path="/anadir-plato" component={AddDish} />
        <Route exact path="/subir-imagen" component={UploadFile} />
      </Switch>
    </Router>
  );
};
export default Routes;
