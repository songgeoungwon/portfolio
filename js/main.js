// loadingEffect
const loading = {
    percent: document.querySelector('.loading-wrap p:first-child'),
    cnt: 0,

    run: () => {
        loading.percent.innerHTML = `${loading.cnt}%`;
        loading.cnt++;
        
        if(loading.cnt > 100) {
            loading.percent.innerHTML = 'WELCOME!';
            clearInterval(runInterval);
        }
    }
}

// headerScrollEffect
const headerScroll = {
    header: document.querySelector('header'),
    headerStyle: 'header-style',

    run: () => {
        document.addEventListener('scroll', () => {
            if(scrollY > 0) {
                headerScroll.header.classList.add(headerScroll.headerStyle);
            } else {
                headerScroll.header.classList.remove(headerScroll.headerStyle);
            }
        });
    }
}

// mainScrollEffect
const mainScroll = {
    container: document.querySelector('.main-container'),
    titleWrap: document.querySelector('.main-title-wrap'),
    icon: document.querySelector('.main-icon'),

    run: () => {
        document.addEventListener('scroll', () => {
            const top = mainScroll.container.getBoundingClientRect().top;
            const bottom = mainScroll.container.getBoundingClientRect().bottom;
            mainScroll.container.style.opacity = 1 - scrollY / (bottom-top);
            mainScroll.titleWrap.style.transform = `translateX(${-scrollY}px)`;
            mainScroll.icon.style.transform = `translateX(${scrollY}px)`;
        });
    }
}

// aboutScrollEffect
const aboutScroll = {
    container: document.querySelector('.about-container'),
    title: document.querySelector('.about-title'),
    subTitle: document.querySelector('.sub-title'),
    info: document.querySelector('.about-info-wrap'),

    run: () => {
        document.addEventListener('scroll', () => {
           const top =  aboutScroll.container.getBoundingClientRect().top;
           if(top < innerHeight/2) {
                aboutScroll.title.classList.add('down-to-up-active');
                aboutScroll.title.classList.remove('down-to-up');
                aboutScroll.subTitle.classList.add('side-active');
                aboutScroll.subTitle.classList.remove('left-to-right');
                aboutScroll.info.classList.add('side-active2');
                aboutScroll.info.classList.remove('right-to-left');
            } else {
                aboutScroll.title.classList.add('down-to-up');
                aboutScroll.title.classList.remove('down-to-up-active');
                aboutScroll.subTitle.classList.add('left-to-right');
                aboutScroll.subTitle.classList.remove('side-active');
                aboutScroll.info.classList.add('right-to-left');
                aboutScroll.info.classList.remove('side-active2');
           }
        });
    }
}

// skillScrollEffect
const skillScroll = {
    container: document.querySelector('.skill-container'),
    title: document.querySelector('.skill-title'),
    info: document.querySelector('.skill-info-wrap'),
    infos: document.querySelectorAll('.skill-info-wrap ul'),

    run: () => {
        document.addEventListener('scroll', () => {
           const top =  skillScroll.container.getBoundingClientRect().top;
           if(top < innerHeight/2) {
                skillScroll.title.classList.add('down-to-up-active');
                skillScroll.title.classList.remove('down-to-up');
                skillScroll.infos.forEach(e => {
                    e.classList.add('up-to-down-active');
                });
            } else {
                skillScroll.title.classList.add('down-to-up');
                skillScroll.title.classList.remove('down-to-up-active');
                skillScroll.infos.forEach(e => {
                    e.classList.remove('up-to-down-active');
                });
           }
        });
    }
}

// portfolioScrollEffect
const portScroll = {
    container: document.querySelector('.port-container'),
    title: document.querySelector('.port-title'),
    items: document.querySelectorAll('.port-items'),

    run: () => {
        document.addEventListener('scroll', () => {
           const top =  portScroll.container.getBoundingClientRect().top;
           if(top < innerHeight/2) {
                portScroll.title.classList.add('down-to-up-active');
                portScroll.title.classList.remove('down-to-up');
                portScroll.items[0].classList.add('side-active');
                portScroll.items[0].classList.remove('left-to-right');
                portScroll.items[1].classList.add('side-active2');
                portScroll.items[1].classList.remove('right-to-left');
            } else {
                portScroll.title.classList.add('down-to-up');
                portScroll.title.classList.remove('down-to-up-active');
                portScroll.items[0].classList.add('left-to-right');
                portScroll.items[0].classList.remove('side-active');
                portScroll.items[1].classList.add('right-to-left');
                portScroll.items[1].classList.remove('side-active2');
           }
        });
    }
}

const runInterval = setInterval(loading.run, 10);
headerScroll.run();
mainScroll.run();
aboutScroll.run();
skillScroll.run();
portScroll.run();

const hbg = document.querySelector('.mobile-nav-hbg');
const hbgChild = document.querySelectorAll('.mobile-nav-hbg li');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavChild = document.querySelectorAll('.mobile-nav li');
const exit = document.querySelector('.mobile-nav-exit');

hbg.addEventListener('click', () => {
    mobileNav.style.zIndex = '999';
    mobileNav.style.visibility = 'visible';
});

exit.addEventListener('click', () => {
    mobileNav.style.zIndex = '-1';
    mobileNav.style.visibility = 'hidden';
});

mobileNavChild.forEach(e => {
    e.addEventListener('click', () => {
        mobileNav.style.zIndex = '-1';
        mobileNav.style.visibility = 'hidden';
    });
});