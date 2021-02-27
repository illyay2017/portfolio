function tansitionNavToInProjectPosition() {
  let nav = document.getElementsByClassName('nav')[0];
  nav.classList.add('in-project-nav');
}

setTimeout(tansitionNavToInProjectPosition, 500);
