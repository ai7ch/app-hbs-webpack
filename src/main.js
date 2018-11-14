// 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import {library, dom} from '@fortawesome/fontawesome-svg-core';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {faReadme} from '@fortawesome/free-brands-svg-icons'

library.add(faReadme, faClock);
dom.watch();


// 
require('./main.css');
require('./app/app.js');
require('./index.html');