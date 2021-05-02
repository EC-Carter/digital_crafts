//make an element add text content and class if needed
function makeEl(elName, classStr = "", txtContStr= ""){
    var el = document.createElement(elName);
    el.textContent = txtContStr;
    el.className += classStr;
    return el;
}
//add other attirbutes
//.setAttribute('href', '#')
//append
// ie- ul.append(li);

//establish base container to append to
var container = document.querySelector(".container-fluid");
//add classes to inital element
container.className += " mt-5 row d-flex justify-content-center mx-0"
//make navbar elements
var nav = makeEl("nav","navbar navbar-expand-lg navbar-dark bg-primary p-4 col-10");
var aBrand = makeEl("a","navbar-brand fs-1","HighOnCoding");
var navUl = makeEl("ul","navbar-nav fs-3");
//make first anchor tag
var li1 = makeEl("li","nav-item");
var aHome = makeEl("a","nav-link active ps-5","Home");
aHome.setAttribute("href", "#");
li1.append(aHome);
//make second anchor tag
var li2 = makeEl("li","nav-item ps-5");
var aCat = makeEl("a", "nav-link","Categories");
aCat.setAttribute("href", "#");
li2.append(aCat);
//append anchors to nav
nav.append(aBrand);
navUl.append(li1);
navUl.append(li2);
nav.append(navUl);
//append nav to container
container.append(nav)

//create article 1 and article children
var article1 = makeEl("article","bg-grey p-3 mt-5 col-9");
var article1h2 = makeEl("h2","","Curse of the Current Reviews");
var article1p = makeEl("p","","When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.");
//append items
article1.append(article1h2);
article1.append(article1p);
container.append(article1);


//create article 2 and article children
var article2 = makeEl("article"," p-3 mt-5 col-9");
var article2h4 = makeEl("h4","text-primary","Hello WatchKit");
var article2p = makeEl("p","","Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.");
var article2div = makeEl("div","d-flex bg-orange align-items-center p-2 text-white fw-bold")
var article2a1 = makeEl("a"," text-decoration-none text-white","12 comments")
article2a1.setAttribute("href","#")
var article2a2 = makeEl("a","text-decoration-none text-white ps-2","124 likes")
article2a2.setAttribute("href","#")
//append items
article2div.append(article2a1);
article2div.append(article2a2);
article2.append(article2h4);
article2.append(article2p);
article2.append(article2div);
container.append(article2);

//create article 3 and article children
var article3 = makeEl("article"," p-3 mt-5 col-9");
var article3h4 = makeEl("h4","text-primary","Introduction to Swift");
var article3p = makeEl("p","","Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.");
var article3div = makeEl("div","d-flex bg-orange align-items-center p-2 text-white fw-bold")
var article3a1 = makeEl("a"," text-decoration-none text-white","15 comments")
article3a1.setAttribute("href","#")
var article3a2 = makeEl("a","text-decoration-none text-white ps-2","45 likes")
article3a2.setAttribute("href","#")
//append items
article3div.append(article3a1);
article3div.append(article3a2);
article3.append(article3h4);
article3.append(article3p);
article3.append(article3div);
container.append(article3);

