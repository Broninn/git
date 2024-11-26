function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute('src', "https://github.com/broninn.png")
    img.setAttribute('alt', "Profile Image Light")
  } else {
    img.setAttribute('src', "https://github.com/broninn.png")
    img.setAttribute('alt', "Profile Image Dark")
  }
}
