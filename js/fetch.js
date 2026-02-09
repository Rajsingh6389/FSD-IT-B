const url = "https://api.github.com/users/Rajsingh6389";

const response = fetch(url);
response
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const user = document.querySelector(".UserName");
    user.innerHTML = `<h2>${data.login}</h2>`;
    user.style.color = "red";
  })
  .catch((error) => {
    console.log(error);
  });
