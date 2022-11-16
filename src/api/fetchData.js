const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/s1bkng8zNvf6ZrVsqcVw/scores';

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchData;
