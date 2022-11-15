const listItem = ['One piece', 'Naruto', 'AOT', 'Hero Academia'];

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
  listItem.map((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = item;
    scoreList.appendChild(listItem);
    return '';
  });

  scores.appendChild(scoreList);
  parent.appendChild(scores);
};

export default recentScores;
