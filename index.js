// Import stylesheets
import './style.css';

//DEPENDENCIES
import 'phaser';

//RUN THE THING

import { config } from './src/configure';
export var game = new Phaser.Game(config);
window.focus();
