import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#developer', {
    strings: ["Full Stack Developer"],
    typeSpeed: 40,
    loop: false
  });
}

export { loadDynamicBannerText };
