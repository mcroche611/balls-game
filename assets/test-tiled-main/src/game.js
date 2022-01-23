import Boot from './boot.js';
import End from './end.js';

import TiledScene from './TiledScene.js';
import TiledSceneHidden from './TiledSceneHidden.js';

/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */
let config = {
    type: Phaser.AUTO,
    width:  400,
    height: 400,
    scale: {
        // mode: Phaser.Scale.FIT,  
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    pixelArt: true,
    scene: [Boot, TiledScene, TiledSceneHidden, End],
    physics: { 
        default: 'arcade', 
        arcade: { 
            gravity: { y: 100 }, 
            debug: true 
        } 
    }
};

new Phaser.Game(config);