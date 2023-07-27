import React from 'react';
import Home from './../Home/Home';
import About from '../About/About';
import {
    IonMenu, 
    IonHeader, 
    IonToolbar, 
    IonTitle,
    IonContent,
    IonPage,
    IonButtons,
    IonMenuButton,
    IonItem,
    IonLabel,
    IonRouterOutlet,
    IonList,
} from '@ionic/react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import './Barra.css';

const Barra: React.FC=()=>{

    return(
    <>
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    <IonItem routerLink="/Home">
                        <IonLabel>Home</IonLabel>
                    </IonItem>
                    <IonItem routerLink='/About'>
                        <IonLabel>About</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
        <IonHeader id="main-content">
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle><Link to='/Home' className="Link">MovieApp</Link></IonTitle>
            </IonToolbar>
        </IonHeader>
    </>
  );
};

export default Barra;