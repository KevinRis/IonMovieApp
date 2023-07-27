import React from 'react';
import {IonButton, IonContent, IonPage} from '@ionic/react';
import { RouteComponentProps, useParams } from 'react-router';
import {useState, useEffect} from "react";
import './MovieInfo.css';


const MovieInfo:React.FC<{pelicula: any}> =(props: any)=>{
    let {title, 
        overview,
        vote_average,
        vote_count,
        release_date,
        original_language
    } = useParams<{
        title: string,
        overview: any
        vote_average: any,
        vote_count: any,
        release_date: any,
        original_language: any
    }>();

    return(
        <IonPage>
            <IonContent>
                <div className="description">
                    <h1>{title}</h1>
                    <div>
                        <p>{overview}</p>
                        <IonButton routerLink='/Home'>
                            Volver
                        </IonButton>
                        <div className='table'>
                            <h3>Fecha de publiación</h3>
                            <p>{release_date}</p>
                        </div>
                        <div>
                            <h3>Idioma original</h3>
                            <p>{original_language}</p>
                        </div>
                        <div>
                            <h3>Evaluación</h3>
                            <p>Nota global de {vote_average} en base de {vote_count} votos</p>
                        </div>
                    </div>  
                </div>
            </IonContent>
        </IonPage>
    );
};

export default MovieInfo;


