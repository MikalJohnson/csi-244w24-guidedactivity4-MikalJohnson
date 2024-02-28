class Requests {
  // This library will use fetch API to make requests to the server

  // Get Request
  // This is an async function
  async get(url) {
    // await the fetch
    const response = await fetch(url);
    // await the response to be converted to json
    const resData = await response.json();
    // return the data
    return resData;
  }

  //Post request
  //This is an async function. It returns a promise
  async post(url, data) {
    //await the fetch
    //the second parameter of fetch method is an object that defines information
    //about the request. Here we are setting the method to POST and the headers
    //to specify that we are sending JSON data
    //The data is passed to the body of the request
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    //await the response to be converted to json
    const resData = await response.json();
    //return the data
    return resData;
  }

  //Put request
  //This is an async function. It returns a promise
  async put(url, data) {
    //await the fetch
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    //await the response to be converted to json
    const resData = await response.json();
    //return the data
    return resData;
  }
  //Delete request
  //This is an async function. It returns a promise
  async delete(url) {
    //await the fetch
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    //Depending on the API there may not be a response body
    //for a delete request. So we can just return a message
    const resData = await "Resource deleted...";
    //return the data
    return resData;
  }
}
