import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import SignUp from 'pages/SignUp';
import { Route } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.AUTH}>
          <Auth />
        </Route>
        <Route path={ROUTES.SIGNUP}>
          <SignUp />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
