import Player from './player.js';
import PlayerAnimations from './playerAnimations.js';

/**
 * Escena principal del juego. La escena se compone de una serie de plataformas 
 * sobre las que se sitúan las bases en las podrán aparecer las estrellas. 
 * El juego comienza generando aleatoriamente una base sobre la que generar una estrella. 
 * Cada vez que el jugador recoge la estrella, aparece una nueva en otra base.
 * El juego termina cuando el jugador ha recogido 10 estrellas.
 * @extends Phaser.Scene
 */
export default class AnimationsScene extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'animationsscene' });
  }

  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() 
  {
    this.add.image(0,0,'sky').setOrigin(0,0);
    this.player = new PlayerAnimations(this, 200, 300);
  }
}