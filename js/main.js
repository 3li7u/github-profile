import fetchData from "./util/data.js";
import {
  createGetProfileForm,
  createProfile,
  createSpinner,
} from "./util/markup.js";

// get app root
const app = document.querySelector("main");

// render get-profile form
app.append(createGetProfileForm());

// get form
const formEl = document.querySelector(".get-profile form");

// lesten to form submitions
formEl.addEventListener("submit", (event) => getUserHandler(event));

// handle form submition
const getUserHandler = async (form) => {
  form.preventDefault();
  const username = form.target["username"].value;
  if (username && username.trim().length > 0) {
    app.append(createSpinner());
    const user = await fetchData(`https://api.github.com/users/${username}`);
    const repos = await fetchData(
      `https://api.github.com/users/${username}/repos`
    );
    if (typeof user !== "string" && typeof repos !== "string") {
      app.innerHTML = "";
      app.append(createProfile(user, repos));
    } else {
      errorHandler(user);
    }
  } else {
    errorHandler("Please enter GitHub username");
  }
};

// error handler
const errorHandler = (error) => {
  document.querySelector("main .spinner-bg")?.remove();
  document.querySelector("input[name='username']")?.classList.add("error");
  document.querySelector("span.err-msg").innerHTML = error;
};
