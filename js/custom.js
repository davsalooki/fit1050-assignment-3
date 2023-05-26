$('.dark-mode-on').click(darkModeOn);
$('.dark-mode-off').click(darkModeOff);

function darkModeOn() {
  var root = document.querySelector(':root');
  root.style.setProperty('--white-color', '#292828');
  root.style.setProperty('--dark-color', '#FFFFFF');
  root.style.setProperty('--p-color', '#FFFFFF');
}