import recentScores from './modules/recent-scores.js';
import addScore from './modules/add-score.js';
import './style.css';

const mainSection = document.getElementById('main');
recentScores(mainSection);
addScore(mainSection);
