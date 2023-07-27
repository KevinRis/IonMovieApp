import React from 'react';
import { 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle, 
    IonContent,
    IonHeader,
    IonPage
} from '@ionic/react';
import CardComponent from '../CardComponent/CardComponent';
import moviesJSON from './../../assets/movies.json';
import './Home.css';

const Home: React.FC<{}>=()=>{
    const movies = moviesJSON.slice(0, 5);
    const listMovies = movies.map((pelicula)=>{
        return(<CardComponent key={pelicula.id} pelicula={pelicula}/>);
    });
    
    return(
    <IonPage>
        <IonContent>
            <div className="fixit"> 
                {listMovies}
            </div>  
        </IonContent>
    </IonPage>
    );
};

export default Home;