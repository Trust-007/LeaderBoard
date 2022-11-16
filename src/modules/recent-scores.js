import fetchData from '../api/fetchData.js';

const getScores = (scoreList) => {
  scoreList.replaceChildren();
  fetchData().then((res) => {
    res.result.map((item) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${item.user}: ${item.score}`;
      scoreList.appendChild(listItem);
      return '';
    });
  });
};

const recentScores = (parent) => {
  const scores = document.createElement('div');
  scores.className = 'recent-scores';
  const headingBtn = document.createElement('div');
  headingBtn.className = 'heading-btn';
  const heading = document.createElement('h2');
  heading.innerHTML = 'Recent Scores';
  headingBtn.appendChild(heading);
  const scoreBtn = document.createElement('button');
  scoreBtn.innerHTML = 'Refresh';
  headingBtn.appendChild(scoreBtn);
  scores.appendChild(headingBtn);
  const scoreList = document.createElement('ul');
  getScores(scoreList);
  scoreBtn.onclick = () => {
    getScores(scoreList);
  };
  scores.appendChild(scoreList);
  parent.appendChild(scores);
};

export default recentScores;
