import storeData from '../api/storeData.js';

const addScore = (parent) => {
  const add = document.createElement('div');
  add.className = 'add-score';
  const heading = document.createElement('h2');
  heading.innerHTML = 'Add your score';
  add.appendChild(heading);

  const form = document.createElement('form');
  const name = document.createElement('input');
  name.type = 'text';
  name.id = 'name';
  name.placeholder = 'Your name';
  name.required = true;
  form.appendChild(name);
  const score = document.createElement('input');
  score.type = 'number';
  score.id = 'score';
  score.placeholder = 'Your score';
  score.required = true;
  form.appendChild(score);
  const btn = document.createElement('button');
  btn.innerHTML = 'Submit';
  form.appendChild(btn);
  form.onclick = (e) => {
    e.preventDefault();
    const { name, score } = form.elements;
    const userName = name.value;
    const userScore = score.value;
    if (userName.length !== 0 && userScore.length !== 0) {
      storeData(userName, userScore);
      name.value = '';
      score.value = '';
    }
  };
  add.appendChild(form);

  parent.appendChild(add);
};

export default addScore;
