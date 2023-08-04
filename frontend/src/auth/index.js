import { API } from "../backend";

export const signup = (user) => {
  return fetch(`${API}user/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signin = (user) => {
    const formData = new FormData();
  
    for (const name in user) {
      console.log(user[name]);
      formData.append(name, user[name]);
    }
  
    for (var key of formData.keys()) {
      console.log("MYKEY: ", key);
    }
  
    return fetch(`${API}user/login/`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log("SUCCESS", response);
        return response.json();
      })
      .catch((err) => console.log(err));
  };

export const isAuthenticated = () => {
    
    return false;
};