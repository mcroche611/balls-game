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
    this.load.image('background', 'background.png');
    this.load.image('platform', 'platform.png');
    this.load.image('base', 'base.png');
    this.load.image('star', 'star.png');
    this.load.image('player', 'player.png');

    this.load.setPath('assets/');
    this.load.image('tiles', 'tilesets/platformPack_tilesheet.png');
    this.load.image('dungeontiles', 'tilemaps/dungeon_tiles.png');
    this.load.tilemapTiledJSON('mymap', 'tilemaps/nivel1.json');
    //this.load.tilemapTiledJSON('dungeon', 'tilemaps/dungeon-01.json');
    this.load.tilemapTiledJSON('dungeon', 'tilemaps/midungeon.json');
    this.load.tilemapTiledJSON('dungeonHidden', 'tilemaps/midungeon_paredoculta.json');
  }

  /**
   * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
   * nivel del juego
   */
  create() {
    this.scene.start('TiledSceneHidden');
  }
}
