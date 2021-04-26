//This will run every 2 seconds you can test the increase to a mintue

setInterval(function () {
  fetchData();
}, 2000);
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      // The API call was successful!
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then(function (data) {
      // This is the JSON from our response
      console.log(data);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}
