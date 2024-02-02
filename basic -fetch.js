const url = "https://jsonplaceholder.typicode.com/users";
export function getData() {
  fetch(url)
    .then((resp) => {
      //   console.log(resp);
      //error checking
      //   console.log(resp.status)
      if (!resp.ok) throw new Error("was not a valid response");
      return resp.json(); // method to extract JSON string and convert it ot an object
    })
    .then((dataObj) => {
console.log(dataObj);
    })
    .catch((err) => {
      console.warn(err.message);
    });

    // why use then the below will fail
    // i.e let response = fetch(url);
    //let dataObj = response.json()

}
