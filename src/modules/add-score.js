const addScore = (parent) => {
  const add = document.createElement('div');
  add.className = 'add-score';
  const heading = document.createElement('h2');
  heading.innerHTML = 'Add your score';
  add.appendChild(heading);

  const form = document.createElement('form');
  const name = document.createElement('input');
  name.type = 'text';
  name.placeholder = 'Your name';
  name.required = true;
  form.appendChild(name);
  const score = document.createElement('input');
  score.type = 'number';
  score.placeholder = 'Your score';
  score.required = true;
  form.appendChild(score);
  const btn = document.createElement('button');
  btn.type = 'submit';
  btn.innerHTML = 'Submit';
  form.appendChild(btn);
  add.appendChild(form);

  parent.appendChild(add);
};

export default addScore;
