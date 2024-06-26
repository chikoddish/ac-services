let toggleLink = document.querySelectorAll(".toggleLink");
for (i = 0; i < toggleLink.length; i++) {
    let e = toggleLink[i].getAttribute("name"),
        t = toggleLink[i];
    toggleLink[i].addEventListener("click", (() => {
        let i = document.querySelector(".tabActive"),
            r = document.querySelector(".activeLink");
        i.classList.remove("tabActive"), r.classList.remove("activeLink"), t.classList.add("activeLink"), document.getElementById(e).classList.add("tabActive")
    }))
}
window.onscroll = function() {
    myFunction()
};
var header = document.querySelector(".navbarWrapper");

function myFunction() {
    window.pageYOffset > 200 ? header.classList.add("sticky") : header.classList.remove("sticky")
}
$("#ourStories").owlCarousel({
    center: !0,
    items: 2,
    loop: !0,
    nav: !1,
    dots: !1,
    autoplay: !0,
    autoplayTimeout: 3e3,
    smartSpeed: 1e3,
    margin: 0,
    responsive: {
        600: {
            items: 1
        },
        1e3: {
            items: 3
        }
    }
}), $("#recognizedSlider").owlCarousel({
    loop: !0,
    margin: 15,
    autoplay: !0,
    autoplayTimeout: 4e3,
    smartSpeed: 400,
    nav: !1,
    dots: !1,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1e3: {
            items: 6
        }
    }
});
let currentPage = window.location.href.split("/").at(-1);
if ("index.php" == currentPage || "" == currentPage) {
    gsap.registerPlugin(ScrollTrigger);
    const r = gsap.utils.toArray(".slide"),
        o = gsap.timeline();

    function slideTL(e, t = !1) {
        const i = gsap.timeline();
        return t || (i.from(e, {
            yPercent: 100
        }), i.from(e.querySelector(".portfolipLeft"), {
            duration: .5,
            opacity: 0,
            x: 0
        }, .5)), i.from(e.querySelector(".projectCardSlide"), {
            duration: .1,
            opacity: 0,
            x: 0
        }, .5), i.from(e.querySelector(".projectImg"), {
            duration: .5,
            opacity: 0,
            y: 100
        }, .8), i.from(e.querySelector(".projectImg2"), {
            duration: .5,
            opacity: 0,
            y: -100
        }, .8), i.from(e.querySelector(".projectDesc"), {
            duration: .5,
            opacity: 0,
            y: -70
        }, .8), i
    }
    r.forEach(((e, t) => {
        0 === t ? o.add(slideTL(e, !0)) : o.add(slideTL(e), "-=0")
    })), ScrollTrigger.create({
        animation: o,
        trigger: ".slide-container",
        start: "top top",
        end: `+=${100*r.length}%`,
        scrub: 1,
        pin: !0,
        anticipatePin: 1
    })
}
let menuLinks = document.querySelectorAll(".menuLinks");
for (i = 0; i < menuLinks.length; i++) menuLinks[i].addEventListener("click", (e => {
    e.target.classList.toggle("activeMenu"), e.target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    })
}));
document.querySelector(".drawerOverlay").addEventListener("click", (() => {
    $(".navbar-collapse").collapse("hide")
}));