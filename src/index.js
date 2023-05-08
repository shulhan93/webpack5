import * as $ from 'jquery';
import Post from './Post.js';
import './styles/main.css';
import WebpackLogo from './assets/image.png';
import './sass/main.scss';
const post = new Post('Webpack Post Title', WebpackLogo);

console.log('Post to String', post.toString());


console.log($('h1').text());