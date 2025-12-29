// function showComments(response) {
//   console.log(response.data.comments);
// }

function getKeyByValue(response, value) {
  return Object.keys(response.data).find(
    (comments) => response.data[comments] === value
  );
}

let apiUrl = "https://jsonplaceholder.typicode.com/comments";

axios.get(apiUrl).then(getKeyByValue);
