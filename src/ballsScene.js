import Player from './player.js';

/**
 * Escena principal del juego. La escena se compone de una serie de plataformas 
 * sobre las que se sitúan las bases en las podrán aparecer las estrellas. 
 * El juego comienza generando aleatoriamente una base sobre la que generar una estrella. 
 * Cada vez que el jugador recoge la estrella, aparece una nueva en otra base.
 * El juego termina cuando el jugador ha recogido 10 estrellas.
 * @extends Phaser.Scene
 */
export default class BallsScene extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'ballsscene' });
  }

  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() 
  {
    //FONDO
    this.add.rectangle(0, 0, 640, 640, 0xffffff).setOrigin(0,0);

    /*
    //CON RECTANGULOS
    this.walls = this.add.group();

    this.walls.add(this.add.rectangle(0, 0, 640, 32, 0x0000ff).setOrigin(0,0));
    this.walls.add(this.add.rectangle(0, 640 - 32, 640, 32, 0x0000ff).setOrigin(0,0));
    this.walls.add(this.add.rectangle(0, 0, 32, 640, 0x0000ff).setOrigin(0,0));
    this.walls.add(this.add.rectangle(640 - 32, 0, 32, 640, 0x0000ff).setOrigin(0,0));


    //ITERAR UN GRUPO
    this.walls.children.iterate(child =>
    {
      this.add.existing(child);
      this.physics.add.existing(child);
    })    
    */

    //CON TILEMAP
    const mapd = this.make.tilemap({ key: 'balls_map' });
    const tilesetd = mapd.addTilesetImage('spritesheet_ball');
    this.walls = mapd.createStaticLayer('paredes', tilesetd, 0, 0);

    this.walls.setCollisionByExclusion(-1, true);
    this.debugDraw(this.walls, this);

    this.player = new Player(this, 200, 200);
  }

  debugDraw(layer, scene)
  {
    const debugGraphics = scene.add.graphics().setAlpha(0.7)
    layer.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
      faceColor: new Phaser.Display.Color(40, 39, 37, 255)
    })
  }

}