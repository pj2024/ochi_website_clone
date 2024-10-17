function init() {

        // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
    // console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.to('#marque-con',{
        y: '-100%',
        duration:10,
        scrollTrigger:{
            trigger: '#marque-con',
            scroller: 'body',
          
            start: 'top 100%',
            end: 'top -200%',
            scrub: 4
        }
    },'anim')
    
    gsap.to('#about-con',{
        y: '-70%',
        duration:10,
        scrollTrigger:{
            trigger: '#about-con',
            scroller: 'body',
            
            start: 'top 150%',
            end: 'top -150%',
            scrub: 4
        }
    },'anim')
    
}

function menuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuContainer = document.getElementById('menu-container');
    const logo = document.querySelector('#logo svg');
    const menu_child_1 = document.getElementById('menu-toggle-one');
    const menu_child_2 = document.getElementById('menu-toggle-two');
    menuToggle.addEventListener('click', () => {
        console.log('menu btn clicked'); 
        logo.classList.toggle('logo-after');
        menuContainer.classList.toggle('menu-close');
        menuToggle.classList.toggle('menu-toggle-after');
        menu_child_1.classList.toggle('menu-toggle-one-after');
        menu_child_2.classList.toggle('menu-toggle-two-after');
        
    })
}

function counter() {
    let percentage = 0;
    const loadingText = document.getElementById('counder');

    const interval = setInterval(() => {
        percentage++;
        loadingText.textContent = percentage;
    
        if (percentage === 100) {
            clearInterval(interval);
            const tl = gsap.timeline()
            tl.to('#mid-sec-down', {
                display:'none'
            })
            tl.to('#inner-sec', {
                width: '100%',
                height: '100vh',
                duration: .6,
                borderRadius: '0'
            })
            tl.to('#upper-con', {
                display: 'none',
                duration: .3
            })

            tl.from('#heading-h2',{
                left: '0',
                duration: 1
            })
        }
    }, 15); // Adjust the speed by changing this number

}

function marquee() {
    document.querySelectorAll('.m-con').forEach((elem) =>{
        gsap.to(elem, {
            transform: 'translateX(-100%)',
            duration: 8,
            repeat: -1,
            ease: "linear",
            
        })
    })
}

function navBar() {
    let lastScrollY = window.scrollY; // Store the initial scroll position
    

    window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY; // Get current scroll position
    
    if (currentScrollY > lastScrollY) {
        // If scrolling down, hide the navbar
        gsap.to('#nav', {
            transform: 'translateY(-100%)',
            duration:.4,
            ease:'linear'
        })
        // navbar.style.transform = 'translateY(-100%)'; // Move navbar up
    } else {
        // If scrolling up, show the navbar
        gsap.to('#nav', {
            transform: 'translateY(0%)',
            duration:.4,
            ease:'linear'
        })
        // navbar.style.transform = 'translateY(0)'; // Move navbar back down
    }

    lastScrollY = currentScrollY; // Update last scroll position
    });
}

function eye(){
    line1 = document.getElementById('line1')
    line2 = document.getElementById('line2')
    line3 = document.getElementById('line3')
    line4 = document.getElementById('line4')
    window.addEventListener('mousemove', (e) =>{
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        
        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerHeight/2;

        var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)

        let letestAngle = (angle - 180)

        gsap.to(line1,{
            rotate: ` ${letestAngle}`,
        })
        gsap.to(line2,{
            rotate: ` ${letestAngle}`,
        })

        gsap.to(line3,{
            rotate: ` ${letestAngle}`,
        })
        gsap.to(line4,{
            rotate: ` ${letestAngle}`,
        })
    })

    
    
    
}

function eye_bg_vedio() {
   const empty_con = document.getElementById('empty-con')
   const vedio_con = document.getElementById('vedio-Con')
   const video = document.querySelector('video')
   empty_con.addEventListener('click', ()=>{
        video.play()
        vedio_con.style.display = 'flex'
   }) 
   vedio_con.addEventListener('click', ()=>{
        video.pause()
        vedio_con.style.display = 'none'
    }) 
}

init()
clients()
counter()
eye();
navBar();
marquee();
menuToggle();
eye_bg_vedio()
