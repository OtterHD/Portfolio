
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,MotionPathPlugin,TextPlugin);
    const headerText = document.getElementsByClassName('span');
    const cursor2 = document.getElementsByName('.cursor2');
    function scene1() {
        let tl = gsap.timeline();
        tl.from("#name1", {
            text: {
                value:"",
                delimiter:"",
            },
            duration: 0.5,
        })
        tl.from("#name2", {
            text: {
                value:"",
                delimiter:"",
            },
            duration: 0.5,
            
        })
        tl.from("#name3", {
            text: {
                value:"",
                delimiter:"",
            },
            duration: 0.5,
            
        })
        tl.set(".space", {
            delay: 0.2,
            width: 15,
        })
        tl.from("#name4", {
            text: {
                value:"",
                delimiter:"",
            },
            duration: 0.5,  
        })
        tl.from("#name5", {
            text: {
                value:"",
                delimiter:"",
            },
            duration: 0.5,
            
        })
        tl.from("#name6", {
            text: {
                value:"",
                delimiter:"",
            },
            duration: 0.5,
        })
        tl.to(".cursor", {
            opacity: 0, 
            duration: 0.5,
            repeat: 1,
            ease: "steps(1)",
        })
        tl.set(".cursor2", {
            display: "inline-flex",
          })
        tl.set(headerText, {
            delay: 1,
            display: "inline-flex",
            backgroundColor: "rgba(139, 200, 253, 0.356)",
        })
        tl.set(".cursor2", {
            display: "none",
        })
        tl.set(".cursor3", {
            delay: 1,
            display: "inline-flex",
        })
        tl.set(headerText, {
            backgroundColor: "transparent",
            onComplete: () => {
                gsap.to(".CSS-logo", {
                    duration: 10,
                    ease: "power4.out",
                    motionPath: {
                        path: "#CSS-path",
                        align: "#CSS-path",
                        alignOrigin: [0.5, 0],
                    },
                })
                gsap.to(".HTML-logo", {
                    duration: 10,
                    ease: "power4.out",
                    motionPath: {
                        path: "#HTML-path",
                        align: "#HTML-path",
                        alignOrigin: [0.5, 0],
                    },
                })
                gsap.to(".GSAP-logo", {
                    duration: 10,
                    ease: "power4.out",
                    motionPath: {
                        path: "#GSAP-path",
                        align: "#GSAP-path",
                        alignOrigin: [0.5, 0],
                    },
                })
                gsap.to(".JS-logo", {
                    duration: 10,
                    ease: "power4.out",
                    motionPath: {
                        path: "#JS-path",
                        align: "#JS-path",
                        alignOrigin: [0.5, 0],
                    },
                })
            },
        })
        tl.to(".cursor3", {
            opacity: 0, 
            duration: 0.75,
            repeat: -1,
            ease: "steps(1)",
        })
        return tl;
      }
      
      function scene2() {
        let tl = gsap.timeline();
        tl.to("#car", {
            duration: 10,
            ease: "none",
            repeat: -1,
            motionPath: {
                path: "#services-path",
                align: "#services-path",
                alignOrigin: [0.5,0.5],
                autoRotate: true,
            }
        })
        tl.to("#car-2", {
            delay: -(Math.floor(Math.random() * 8)),
            duration: 10,
            ease: "none",
            repeat: -1,
            motionPath: {
                path: "#services-path",
                align: "#services-path",
                alignOrigin: [0.5,0.5],
                autoRotate: true,
            }
        })
        tl.to("#car-3", {
            delay: -(Math.floor(Math.random() * 9)),
            duration: 10,
            ease: "none",
            repeat: -1,
            motionPath: {
                path: "#services-path",
                align: "#services-path",
                alignOrigin: [0.5,0.5],
                autoRotate: true,
            }
        })
        tl.to("#car-4", {
            delay: -(Math.floor(Math.random() * 9)),
            duration: 10,
            ease: "none",
            repeat: -1,
            motionPath: {
                path: "#services-path",
                align: "#services-path",
                alignOrigin: [0.5,0.5],
                autoRotate: true,
            }
        })
        tl.to("#car-5", {
            delay: -(Math.floor(Math.random() * 9)),
            duration: 10,
            ease: "none",
            repeat: -1,
            motionPath: {
                path: "#services-path",
                align: "#services-path",
                alignOrigin: [0.5,0.5],
                autoRotate: true,
            }
        })
        return tl;
      }
      
      let master = gsap.timeline()
        .add(scene1())
        .add(scene2(), ScrollTrigger.create({
            trigger: "#services-path"
        }))
        gsap.set('#service-text', {
            y: 100,
        })
        gsap.to("#service-text", {
            scrollTrigger: ".services-text",
            duration: 0.6,
            fontSize: "2em",
            ease: "bounce",
        })
    gsap.from(".headshot-container", {
        scrollTrigger: ".headshot-container",
        opacity: 0,
        duration:1,
        x: -80,
    })
    gsap.from(".about-text" , {
        scrollTrigger: ".headshot-container",
        opacity: 0,
        duration:1,
        x: 80,
    })
});
