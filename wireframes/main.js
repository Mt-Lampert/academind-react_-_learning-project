function updateSVG(event) {
  // console.log(`The ID of the button is '${event.target.id}'`);
  const image = document.querySelector("img");
  const buttonID = event.target.id;

  switch (buttonID) {
    case "landing-page":
      image.src = "landing-page__desktop.svg";
      break;
    case "first-user":
      image.src = "first_user_added.svg";
      break;
    case "another-user":
      image.src = "another_user_added.svg";
      break;
    case "another-user":
      image.src = "another_user_added.svg";
      break;
    case "error-modal":
      image.src = "error_modal.svg";
      break;

    default:
      break;
  }
}

const theButtons = document.querySelectorAll("button");

theButtons.forEach((button) => {
  button.addEventListener("click", updateSVG);
});
