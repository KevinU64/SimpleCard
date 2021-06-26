import React from 'react';
import "./styles/frame.css";

export default function Frame(props){
    return(
        <>
            <div class="contenedor-perfil">
                <div class="contenido">
                    <div class="perfil">
                        <img src="https://i26.servimg.com/u/f26/20/31/61/35/ellips10.png" alt="" />
                        <p class="nombre">Yarriba Castro</p>
                        <p class="prof">Design Track</p>
                    </div>
                    <div class="descripcion">
                        <p>I chose design track because I love <br />
                            to design neatiful user-centered <br />
                            interfaces. 
                        </p>
                    </div>
                    <div class="redes">
                        <div class="in">
                            <img src="https://i26.servimg.com/u/f26/20/31/61/35/vector11.png" alt="" />
                            <p>Yaretas24</p>
                        </div>
                        <div class="inst">
                            <img src="https://i26.servimg.com/u/f26/20/31/61/35/vector10.png" alt="" />
                            <p>Yaretas24</p>
                        </div>
                    </div>
            
                </div>
                <img class="verde" src="https://i26.servimg.com/u/f26/20/31/61/35/rectan10.jpg" alt="" />
            </div>
        </>
    )
}