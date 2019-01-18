import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#developer', {
    strings: ["Full Stack Developer"],
    typeSpeed: 40,
    loop: false
  });
};

export { loadDynamicBannerText };
