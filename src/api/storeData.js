const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/s1bkng8zNvf6ZrVsqcVw/scores';

const storeData = async (name, score) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default storeData;
