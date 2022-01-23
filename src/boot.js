/**
 * Escena para la precarga de los assets que se usarán en el juego.
 * Esta escena se puede mejorar añadiendo una imagen del juego y una 
 * barra de progreso de carga de los assets
 * @see {@link https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/} como ejemplo
 * sobre cómo hacer una barra de progreso.
 */
export default class Boot extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'boot' });
  }

  /**
   * Carga de los assets del juego
   */
  preload() {
    // Con setPath podemos establecer el prefijo que se añadirá a todos los load que aparecen a continuación
    
    this.load.setPath('assets/sprites/');
    this.load.image('spritesheet_ball', 'spritesheet_ball.png');

    this.load.spritesheet('balls_sprite', 
    'spritesheet_cruz.png',
    { frameWidth: 32, frameHeight: 32 });
    
    //Cargamos los fondos
    this.load.image('sky', 'sky-clouds.jpg');
    this.load.image('mountains', 'mountains1000.png');
    this.load.image('menuprincipal', 'menuprincipal.png');
        
    //Sonido
    this.load.setPath('assets/audio/');
    this.load.audio('explosion', 'explosion.mp3');

    //Tiled
    this.load.setPath('assets/map/');
    this.load.image('dungeontiles', 'dungeon_tiles.png');
    this.load.tilemapTiledJSON('mapa', 'mapa.json');
    this.load.tilemapTiledJSON('dungeonHidden', 'midungeon_paredoculta.json');
    this.load.tilemapTiledJSON('large_map', 'large_map.json');
    this.load.tilemapTiledJSON('balls_map', 'balls_map.json');
  }

  /**
   * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
   * nivel del juego
   */
  create() {
    this.scene.start('ballsscene');
  }
}