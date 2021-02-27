function tansitionNavToInProjectPosition() {
  let nav = document.getElementsByClassName('nav')[0];
  nav.classList.add('in-project-nav');
}
console.log(
'RUNNING'
);
setTimeout(tansitionNavToInProjectPosition, 500);
