let tl = gsap.timeline();

tl.from(".header-bg", {x: '100%', duration: 0.5});
tl.to(".header-bg", {height: '90vh', width: '95%', duration: 0.5, delay: 0.3, ease: 'sine'});
tl.from('.detail-container', {x: "120%", duration: 0.5}, "-=.5");
tl.from('.headline__title', {x: -25, opacity: 0, duration: 1, stagger: 0.2}, "-=0.2");
tl.to('#headline', {x: '-110%', fontSize: '1rem',duration: 0.5});
tl.from('.cta', {opacity: 0, duration:1, ease:'power2'}, '<-=0.5');
tl.to(".detail-container",{height: '100vh'});
tl.from('.detail-text', {x: -25, opacity: 0, duration: 1, stagger: 0.2}, "-=0.2");
tl.to(".header-bg", {height: '100vh', width: '100%', duration: 0.5, delay: 0.25, ease: 'power1'});
tl.from('.nav',{opacity: 0, ease: 'power1'});