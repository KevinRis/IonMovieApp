import { useParams, Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { IonApp, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonRow, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './components/Home/Home';
import Barra from './components/Navbar/Barra';
import About from './components/About/About';
import MovieInfo from './pages/MovieInfo';
import CardComponent from './components/CardComponent/CardComponent';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <Barra/>
    <Home/>
      <IonRouterOutlet>
      
        <Route exact path="/Home" component={Home} />
        <Route path="/About" component={About}/>
        <Route path="/MovieInfo/:id/:title/:overview/:vote_average/:vote_count/:release_date/:original_language" component={MovieInfo}/>
        <Route path="/CardComponent" component={CardComponent}/>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

