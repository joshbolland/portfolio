import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Learn to code"],
    typeSpeed: 40,
    loop: false
  });
};

export { loadDynamicBannerText };
