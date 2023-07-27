import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRouterLink } from '@ionic/react';
import './CardComponent.css';

const CardComponent:React.FC<{pelicula: any}> = (props) => {
  const image = "https://image.tmdb.org/t/p/w220_and_h330_face/" + props.pelicula.poster_path;
  return (
    <IonCard>      
      <img 
      alt="Caratula" 
      src={image}/>
      <IonCardHeader>
        <IonButton routerLink={`/MovieInfo/
        ${props.pelicula.id}/
        ${props.pelicula.title}/
        ${props.pelicula.overview}/
        ${props.pelicula.vote_average}/
        ${props.pelicula.vote_count}/
        ${props.pelicula.release_date}/
        ${props.pelicula.original_language}`}>
            +info
        </IonButton>
      </IonCardHeader>
    </IonCard>
  );
}
export default CardComponent;

