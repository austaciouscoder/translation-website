    // ACCORDIAN START
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.height) {
            panel.style.height = null;
            panel.nextElementSibling.style.display = "grid";

        } else {
            panel.style.height = "calc(100% - 60px)";
            panel.nextElementSibling.style.display = "none";

        }
    });
}
    // ACCORDIAN END
    function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
    do {
    currenttop += obj.offsetTop;
} while ((obj = obj.offsetParent));
    return [currenttop];
}
}

    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if(vw > 1024) {
    desktopJS();
} else {
    mobileJS();
}

    var onresize = function() {
    //your code here
    //this is just an example
    let newWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    if(newWidth > 1024 && vw < 1024 || newWidth < 1024 && vw > 1024) {
    document.location.reload();

}
}

    window.addEventListener("resize", onresize);

    function mobileJS() {

// NAVBAR CODE START
    var menuopen = document.getElementById("navbar-menu-open");
    var menuclose = document.getElementById("navbar-menu-close");
    var quote = document.getElementById("navbar-quote");
    var language = document.getElementById("navbar-languages-mobile");
    var navbarcontainer = document.getElementById("navbar-container");

    var nav = document.getElementsByClassName("navbar");
    let navbarcontent = document.getElementById("navbar-content")
    navbarcontent.style.display = "none";
    menuopen.addEventListener("click", function () {
    document.getElementById("navbar").style.display = "block";
    document.getElementById("site-header").style.height = "100vh";
    quote.style.display = "block";
    language.style.display = "block";
    navbarcontainer.style.display = "grid";
    menuclose.style.display = "block";
    menuopen.style.display = "none";

})
    menuclose.addEventListener("click", function () {
    document.getElementById("navbar").style.display = "block";
    document.getElementById("site-header").style.height = "auto";
    quote.style.display = "none";
    language.style.display = "none";
    navbarcontainer.style.display = "none";
    menuclose.style.display = "none";
    menuopen.style.display = "block";

})
    var sectionsclose = document.getElementById("navbar-sections-close");
    // CHECK IF MOUSE LEAVES NAVBARCONTENT, IF SO RESET NAVBAR
    sectionsclose.addEventListener("click", function () {
    resetNav();

})

    document.getElementById("navbar-languages-mobile").addEventListener("click", function (e) {

    e.preventDefault();
    resetNav()
    quote.style.display = "none";
    language.style.display = "none";
    navbarcontainer.style.display = "none";
    navbarcontent.style.display = "inline-block";
    document.getElementById("site-header").style.height = "auto";
    menuclose.style.display = "none";
    sectionsclose.style.display = "block";
    let show = document.getElementById(this.id + "-content");
    show.style.display = "grid";

})


// CHANGE NAVBAR CONTENT
    for (j = 0; j < nav.length; j++) {
    nav[j].addEventListener("click", function (e) {

    e.preventDefault();

    resetNav()
    quote.style.display = "none";
    language.style.display = "none";
    navbarcontainer.style.display = "none";
    navbarcontent.style.display = "inline-block";
    document.getElementById("site-header").style.height = "auto";
    menuclose.style.display = "none";
    sectionsclose.style.display = "block";
    let show = document.getElementById(this.id + "-content");
    show.style.display = "grid";
    this.style.borderBottom = "2px solid black";

})

}

    // RESET TO ORIGINAL STATE
    function resetNav() {
    navbarcontent.style.display = "none";
    navbarcontainer.style.display = "grid";
    menuclose.style.display = "block";
    sectionsclose.style.display = "none";
    quote.style.display = "block";
    language.style.display = "block";
    document.getElementById("navbar-languages-mobile-content").style.display = "none";
    document.getElementById("site-header").style.height = "100vh";

    for (x = 0; x < nav.length; x++) {
    let others = nav[x].id + "-content";
    document.getElementById(others).style.display = "none";
    nav[x].style.borderBottom = "none";
}
}



}
    function desktopJS() {

// NAVBAR CODE START
    var nav = document.getElementsByClassName("navbar");
    let navbarcontent = document.getElementById("navbar-content")
    navbarcontent.style.display = "none";

    var j;
    // CHECK IF MOUSE LEAVES NAVBARCONTENT, IF SO RESET NAVBAR
    navbarcontent.addEventListener("mouseleave", function () {
    resetNav();

})
    document.getElementById("navbar-logo").addEventListener("mouseover", function () {
    resetNav();

})
    document.getElementById("navbar-quote").addEventListener("mouseover", function () {
    resetNav();
})


// CHANGE NAVBAR CONTENT
    for (j = 0; j < nav.length; j++) {
    nav[j].addEventListener("mouseover", function () {


    resetNav()
    navbarcontent.style.display = "inline-block";

    let show = document.getElementById(this.id + "-content");
    show.style.display = "grid";
    this.style.borderBottom = "2px solid black";

})

}

    // RESET TO ORIGINAL STATE
    function resetNav() {
    navbarcontent.style.display = "none";

    for (x = 0; x < nav.length; x++) {
    let others = nav[x].id + "-content";
    document.getElementById(others).style.display = "none";
    nav[x].style.borderBottom = "none";
}
}

// NAVBAR TRANSPARENT CODE
    document.addEventListener("scroll", (e) => {
    if (window.scrollY !== 0) {
    document.getElementById("site-header").style.backgroundColor = "white";
    document.getElementById("site-header").style.borderBottom = "1px solid black";

} else {
    document.getElementById("site-header").style.backgroundColor = "rgba(255,255,255,0)";
    document.getElementById("site-header").style.borderBottom = "none";

}
})
    //         NAVBAR CODE END
// TEAM CODE START
        // TEAM CODE START
        var team = document.getElementsByClassName("team-card");
        let content = document.getElementsByClassName("team-content")
        let teamarray = [];
        for (let j = 0; j < team.length; j++ ) {
            teamarray.push(team[j].id);
            if (j % 3 === 2) {
                content[j].style.marginRight = "0";
            } else {
                content[j].style.marginRight = "12.5%";

            }
            team[j].addEventListener("click", function (e) {
                let description = document.getElementById(this.id + "-card");
                if (this.style.width === "100%" || this.style.width === "") {
                    let x = teamarray.indexOf(this.id);
                    console.log(x);
                    teamarray.splice(x, 1);
                    console.log(teamarray);
                    for (j = 0; j < teamarray.length; j++) {
                        if (j % 3 === 2) {
                            document.getElementById(teamarray[j]).parentElement.style.marginRight = "0%";

                        } else {
                            document.getElementById(teamarray[j]).parentElement.style.marginRight = "12.5%";
                        }
                    }

                    this.style.width = "auto";
                    this.style.margin = "0";
                    this.parentElement.style.marginLeft = "0";

                    this.parentElement.style.width = "100%";
                    description.style.width = "100%";
                    this.parentElement.parentElement.prepend(this.parentElement);
                    window.scroll({ top: findPosition(this) - 100, behavior: 'smooth'});


                } else {
                    let value =  this.id.toLowerCase().charCodeAt(0) - 97;

                    teamarray.splice(value, 0, this.id);
                    console.log(teamarray)
                    let element = this.parentElement;
                    this.parentElement.parentElement.insertBefore(element, element.parentElement.children[value+1]);
                    for (j = 0; j < teamarray.length; j++) {
                        if (j % 3 === 2) {
                            document.getElementById(teamarray[j]).parentElement.style.marginRight = "0%";

                        } else {
                            document.getElementById(teamarray[j]).parentElement.style.marginRight = "12.5%";
                        }
                    }



                    window.scroll({ top: findPosition(this) - 500, behavior: 'smooth'});
                    this.style.width = "100%";
                    this.parentElement.style.width = "25%";
                }


            })
        }

    }
