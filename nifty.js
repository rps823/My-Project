//getting the div which is declared in html
var div = document.getElementById("firstContainer")
    

//creating elements, setting attributes and textcontent
var firstParent = document.createElement("div")
firstParent.setAttribute("id", "firstParent")

var awarded = document.createElement("h4")
awarded.setAttribute("class", "awardedText")
awarded.textContent = "AWARDED  #1 Project Management App by G2"

var heading = document.createElement("h2")
heading.setAttribute("class", "headingText")
heading.textContent = "Manage projects, not tools."

var text1 = document.createElement("p")
text1.setAttribute("class", "text1Text")
text1.textContent = "Stop switching between Chats, Tasks, Docd, Calendar, &"

var text2 = document.createElement("p")
text2.setAttribute("class", "text2Text")
text2.textContent = "Meeting tools -- automate your team & client work in one"

var text3 = document.createElement("p")
text3.setAttribute("class", "text3Text")
text3.textContent = "simple, yet powerful app."


//appending 
firstParent.append(awarded, heading, text1, text2, text3)
div.append(firstParent)


//company logos
var logosDiv = document.getElementById("logosDiv")

var logoParent = document.createElement("div")
logoParent.setAttribute("class", "logoParentDiv")

var logoHeading = document.createElement("h3")
logoHeading.setAttribute("class", "logoHead")
logoHeading.textContent = "TRUSTED BY THOUSANDS OF REMOTE TEAMS"

var apple = document.createElement("img")
apple.setAttribute("src", "https://niftypm.com/_nuxt/img/logo-apple.90494dc.svg")
apple.setAttribute("id", "appleLogo")

var verizon = document.createElement("img")
verizon.setAttribute("src", "https://niftypm.com/_nuxt/img/logo-verizon.9e31975.svg")
verizon.setAttribute("class", "verizonLogo")

var periData = document.createElement("img")
periData.setAttribute("src", "https://niftypm.com/_nuxt/img/logo-pd.2e75b01.svg")
periData.setAttribute("class", "periDatalogo")

var emovis = document.createElement("img")
emovis.setAttribute("src", "https://niftypm.com/_nuxt/img/logo-emovis.1bc45e8.svg")
emovis.setAttribute("class", "emovisLogo")

var vmware = document.createElement("img")
vmware.setAttribute("src", "https://niftypm.com/_nuxt/img/logo-vmware.61e07e9.svg")
vmware.setAttribute("class", "vmwareLogo")

var ibm = document.createElement("img")
ibm.setAttribute("src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI0MDAiPgogIDxjbGlwUGF0aCBpZD0iYiI+CiAgICA8cGF0aCBkPSJNMC0xdjgzaDU1LjkzN3YyMzZIMS41MjN2ODJoMTk0LjY1di04MmgtNTUuOTM4VjgyaDU0LjQxNFYtMXptNTU0LjAyIDF2ODJoNTUuOTM4djIzNmgtNTQuNDE0djgyaDEzOC43MVYxNzEuODRsODIuNjU2IDIyOC4wOCAxLjY4LjA0IDgxLjE3Mi0yMjguMTJWNDAwaDE0MC4yM3YtODJoLTU1LjkzOFY4Mmg1NC40MTVWMGgtMTU2LjMzbC02NC43MjYgMTgyLjg5TDcxMS44NjYgMHoiLz4KICAgIDxwYXRoIGlkPSJhIiBkPSJNMjIyLjIzIDB2ODJoNTUuOTM3djEzMGgyMTUuMzF2LTI0LjkyOHMxOC4wMTEtMTQuMDQyIDIzLjc1LTI3LjM2N2wxMS41MjMtMjUuODU1czUuMzUyLTE0LjQ3MiA1LjM1Mi0yNy40MDVsLTIuMzA1LTI1Ljg1NXMtMy42MTYtMjEuMDYzLTkuOTIyLTI3LjMyOGwtMjIuMjY2LTI1Ljg5NVM0NzEuMjc2IDAgNDMzLjc1IDB6bTE0MC4yMyA4Mmg4MS45OTJ2NzZIMzYyLjQ2eiIvPgogICAgPHVzZSB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDQwMCkiIHhsaW5rOmhyZWY9IiNhIi8+CiAgPC9jbGlwUGF0aD4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzYTNhM2EiIHN0cm9rZS13aWR0aD0iMjcuMzciIGQ9Ik0wIDEzLjY4M2gxMDMwdjUzLjIzMkgwbTAgNTMuMjMyaDk3NXY1My4yNDJIMHY1My4yMjJoOTc1djUzLjIyMkgwbTAgNTMuMjQyaDEwMzB2NTMuMjQySDAiIGNsaXAtcGF0aD0idXJsKCNiKSIvPgo8L3N2Zz4K")
ibm.setAttribute("class", "ibmLogo")

var loreal = document.createElement("img")
loreal.setAttribute("src", "https://niftypm.com/_nuxt/img/logo-loreal.f0acb48.svg")
loreal.setAttribute("class", "lorealLogo")

var nyu = document.createElement("img")
nyu.setAttribute("src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4OC4yIDMwLjEiPgogIDxwYXRoIGZpbGw9IiMzYTNhM2EiIGQ9Ik0zNy45IDYuN2gzLjVsOCAxMC41VjYuN2gzLjd2MTdoLTMuMmwtOC4zLTEwLjh2MTAuOGgtMy43di0xN3pNNjEuNSAxN0w1NC45IDYuN2g0LjRsNC4xIDYuOCA0LjEtNi44aDQuM2wtNi41IDEwLjJ2Ni44aC0zLjdWMTd6bTExLjktLjZWNi43aDMuN3Y5LjZjMCAyLjggMS40IDQuMiAzLjcgNC4yIDIuMyAwIDMuNy0xLjQgMy43LTQuMVY2LjdoMy43djkuNmMwIDUuMi0yLjkgNy43LTcuNSA3LjdzLTcuMy0yLjYtNy4zLTcuNm0tNjAtLjdjLTMuMS0xLjgtMi44LTQuNS0xLjUtNi40di0uMmMtLjEtLjUtLjYtMS42LS44LTEuOS0uMS0uMS0uMS0uMS0uMSAwIDAgLjUtLjYgMS44LTEuNSAzLjMtMSAxLjctMSA1LjIgMy45IDUuMiAwIC4xIDAgMCAwIDBtLjgtLjFjLTEuOC0zLjkgMS44LTYuNSAyLjQtNyAuMS0uMS4xLS4xLjEtLjIgMC0xLjItLjctMy4yLS45LTMuNWgtLjFjLS4zIDEuMi0yIDMtMi4zIDMuNC0yLjkgMy4zLTIuMiA1LjQuOCA3LjMgMCAuMSAwIDAgMCAwbS42LS4yYy45LTQuMiA0LjMtNC4zIDQuNi01LjEuNS0xLjItLjQtMy40LS42LTMuN2gtLjFjLS41IDEtMS4yIDItMS44IDIuNC0uNy43LTMuNyAyLjktMi4xIDYuNC0uMS4xIDAgLjEgMCAwbS42LjRjNS41LjIgNS45LTQuOCA1LjktNi43IDAtLjEtLjEtLjEtLjEgMC0uMi40LS45IDEuOC0yLjkgMi42LTEuNy44LTIuOCAyLjUtMi45IDQuMS0uMSAwIDAgMCAwIDBtMS4yLjZoLTQuM3YxLjNoNC4zdi0xLjN6bS0yLjUgMTAuMmMwIC4yLjUuMy42IDBsMS04LjNoLTIuNWwuOSA4LjN6bTE2IDMuNUguMVYuMWgzMHYzMHoiLz4KPC9zdmc+Cg==")
nyu.setAttribute("class", "nyuLogo")

//appending logos to its parent
logoParent.append(logoHeading, apple, verizon, periData, emovis, vmware, ibm, loreal, nyu)
logosDiv.append(logoParent)

//violet buttons and "say good bye to meetings" part creating and appending elements
var violetBtnDiv = document.getElementById("violetBtnsHolder")

var violetIcon = document.createElement("p")
violetIcon.setAttribute("class", "violetIconStyle")

var violetHeading = document.createElement("h3")
violetHeading.setAttribute("class", "violetHeading")
violetHeading.textContent = "Say good bye to status meetings!"

var violetText = document.createElement("a")
violetText.setAttribute("class", "violetText")
violetText.textContent = "Create a clear plan of action for your projects and automat your progress tracking"

var buttonsDiv = document.createElement("div")
buttonsDiv.setAttribute("class", "buttonsDiv")

var violetBtn1 = document.createElement("button")
violetBtn1.setAttribute("class", "violetBtn1")
var btn1Text = document.createElement("a")
btn1Text.setAttribute("class", "btn1Text")
btn1Text.textContent = "SET GOALS & TIMELINES"
violetBtn1.addEventListener("mouseover", function(){
    btn1Text.style.color = "rgba(245, 77, 245, 0.836)"
    violetBtn1.style.backgroundColor = "rgba(245, 77, 245, 0.836)"
})

var violetBtn2 = document.createElement("button")
violetBtn2.setAttribute("class", "violetBtn2")
var btn2Text = document.createElement("a")
btn2Text.setAttribute("class", "btn2Text")
btn2Text.textContent = "COLLABORATE ON TASKS"
violetBtn2.addEventListener("mouseover", function(){
    btn2Text.style.color = "rgba(245, 77, 245, 0.836)"
    violetBtn2.style.backgroundColor = "rgba(245, 77, 245, 0.836)"
    
})

var violetBtn3 = document.createElement("button")
violetBtn3.setAttribute("class", "violetBtn3")
var btn3Text = document.createElement("a")
btn3Text.setAttribute("class", "btn3Text")
btn3Text.textContent = "ESTABLISH KNOWLEDGE HUB"
violetBtn3.addEventListener("mouseover", function(){
    btn3Text.style.color = "rgba(245, 77, 245, 0.836)"
    violetBtn3.style.backgroundColor = "rgba(245, 77, 245, 0.836)"
})

var violetBtn4 = document.createElement("button")
violetBtn4.setAttribute("class", "violetBtn4")
var btn4Text = document.createElement("a")
btn4Text.setAttribute("class", "btn4Text")
btn4Text.textContent = "CREATE DOCS & NOTES"
violetBtn4.addEventListener("mouseover", function(){
    btn4Text.style.color = "rgba(245, 77, 245, 0.836)"
    violetBtn4.style.backgroundColor = "rgba(245, 77, 245, 0.836)"
})

var violetBtn5 = document.createElement("button")
violetBtn5.setAttribute("class", "violetBtn5")
var btn5Text = document.createElement("a")
btn5Text.setAttribute("class", "btn5Text")
btn5Text.textContent = "BALANCE WORKLOADS"
violetBtn5.addEventListener("mouseover", function(){
    btn5Text.style.color = "rgba(245, 77, 245, 0.836)"
    violetBtn5.style.backgroundColor = "rgba(245, 77, 245, 0.836)"
})

buttonsDiv.append(violetBtn1, violetBtn2, violetBtn3, violetBtn4, violetBtn5, btn1Text, btn2Text, btn3Text, btn4Text, btn5Text)
violetBtnDiv.append(violetIcon, violetHeading, violetText, buttonsDiv)


//creating page with image and text when violet buttons are clicked
//1st button

    var mainParent = document.getElementById("violetBtnItems") 

    var page1 = document.createElement("div")
    page1.setAttribute("id", "page1")

    var serialNo = document.createElement("h1")
    serialNo.setAttribute("class","serialNumber")
    serialNo.textContent = "01."

    var pageHead = document.createElement("h3")
    pageHead.setAttribute("class", "pageHeading")
    pageHead.textContent = "Set goals & timelines"

    var pagePara1 = document.createElement("p")
    pagePara1.setAttribute("class","pagePara1")
    pagePara1.textContent = "Milestones set a visual timeline for your project"

    var pagePara2 = document.createElement("p")
    pagePara2.setAttribute("class","pagePara2")
    pagePara2.textContent = "sprints and create team alignment by automating"

    var pagePara3 = document.createElement("p")
    pagePara3.setAttribute("class","pagePara3")
    pagePara3.textContent = "progress as associate tasks are completed."

    var pagePara4 = document.createElement("a")
    pagePara4.setAttribute("class", "pagePara4")
    pagePara4.textContent = "Learn more about Milestones >"

    var pageTrial = document.createElement("h5")
    pageTrial.setAttribute("class", "pageTrial")
    pageTrial.textContent = "Start Free Trial"

    var pageImg = document.createElement("img")
    pageImg.setAttribute("src", "https://niftypm.com/_nuxt/img/large@1x.ba76fb1.webp")
    pageImg.setAttribute("class", "pageImg")

    page1.append(serialNo, pageHead, pagePara1, pagePara2, pagePara3, pagePara4, pageTrial)
    mainParent.append(page1, pageImg)


//2nd button
function createItem2(){
    var previousPage1 = document.getElementById("page1")
    previousPage1.style.display = "none"
    var pageItem=document.querySelector(".pageImg")
    pageItem.style.display="none"
    var page2 = document.createElement("div")
    page2.setAttribute("id", "page2")

    var serialNo = document.createElement("h1")
    serialNo.setAttribute("class","serialNumber")
    serialNo.textContent = "02."

    var pageHead = document.createElement("h3")
    pageHead.setAttribute("class", "pageHeading")
    pageHead.textContent = "Collaborate on tasks"

    var pagePara1 = document.createElement("p")
    pagePara1.setAttribute("class","pagePara1")
    pagePara1.textContent = "Tasks enable you to flexibly, organize prioritize"

    var pagePara2 = document.createElement("p")
    pagePara2.setAttribute("class","pagePara2")
    pagePara2.textContent = "and manage daily work with high level of detail"

    var pagePara3 = document.createElement("p")
    pagePara3.setAttribute("class","pagePara3")
    pagePara3.textContent = "in list, kanban and swimlane views."

    var pagePara4 = document.createElement("a")
    pagePara4.setAttribute("class", "pagePara4")
    pagePara4.textContent = "Learn more about tasks >"

    var pageTrial = document.createElement("h5")
    pageTrial.setAttribute("class", "pageTrial")
    pageTrial.textContent = "Start Free Trial"

    var pageImg = document.createElement("img")
    pageImg.setAttribute("src", "https://niftypm.com/_nuxt/img/large@2x.c0e68d1.webp")
    pageImg.setAttribute("class", "pageImg8")

    page2.append(serialNo, pageHead, pagePara1, pagePara2, pagePara3, pagePara4, pageTrial,pageImg)
    mainParent.append(previousPage1, page2)
}
violetBtn2.addEventListener("click", createItem2)

//3rd button
function createItem3(){
    var previousPage1 = document.getElementById("page1")
    var previousPage2 = document.getElementById("page2")
    previousPage1.style.display = "none"
    previousPage2.style.display = "none"

    var mainParent = document.getElementById("violetBtnItems") 

    var page3 = document.createElement("div")
    page3.setAttribute("id", "page3")

    var serialNo = document.createElement("h1")
    serialNo.setAttribute("class","serialNumber")
    serialNo.textContent = "03."

    var pageHead = document.createElement("h3")
    pageHead.setAttribute("class", "pageHeading")
    pageHead.textContent = "Establish knowledge hub"

    var pagePara1 = document.createElement("p")
    pagePara1.setAttribute("class","pagePara1")
    pagePara1.textContent = "Discussions empower all project members to"

    var pagePara2 = document.createElement("p")
    pagePara2.setAttribute("class","pagePara2")
    pagePara2.textContent = "share ideas finalize specifications and gather"

    var pagePara3 = document.createElement("p")
    pagePara3.setAttribute("class","pagePara3")
    pagePara3.textContent = "feedback in real time."

    var pagePara4 = document.createElement("a")
    pagePara4.setAttribute("class", "pagePara4")
    pagePara4.textContent = "Learn more about discussions >"

    var pageTrial = document.createElement("h5")
    pageTrial.setAttribute("class", "pageTrial")
    pageTrial.textContent = "Start Free Trial"

    var pageImg = document.createElement("img")
    pageImg.setAttribute("src", "https://niftypm.com/_nuxt/img/large@1x.ba76fb1.webp")
    pageImg.setAttribute("class", "pageImg1")

    page3.append(serialNo, pageHead, pagePara1, pagePara2, pagePara3, pagePara4, pageTrial,pageImg)
    mainParent.append(previousPage1,previousPage2, page3)
}
violetBtn3.addEventListener("click", createItem3)

//4th button
function createItem4(){
    var previousPage1 = document.getElementById("page1")
    var previousPage2 = document.getElementById("page2")
    var previousPage3 = document.getElementById("page3")
    var pageItem=document.querySelector(".pageImg")
    pageItem.style.display="none"
    previousPage1.style.display = "none"
    previousPage2.style.display = "none"
    previousPage3.style.display = "none"
    
    var mainParent = document.getElementById("violetBtnItems") 

    var page4 = document.createElement("div")
    page4.setAttribute("id", "page4")

    var serialNo = document.createElement("h1")
    serialNo.setAttribute("class","serialNumber")
    serialNo.textContent = "04."

    var pageHead = document.createElement("h3")
    pageHead.setAttribute("class", "pageHeading")
    pageHead.textContent = "Create docs & notes"

    var pagePara1 = document.createElement("p")
    pagePara1.setAttribute("class","pagePara1")
    pagePara1.textContent = "Create beautiful docs, notes & wikis for your"

    var pagePara2 = document.createElement("p")
    pagePara2.setAttribute("class","pagePara2")
    pagePara2.textContent = "project and share with anyone. Nifty even"

    var pagePara3 = document.createElement("p")
    pagePara3.setAttribute("class","pagePara3")
    pagePara3.textContent = "integrated natively with Google Docs."

    var pagePara4 = document.createElement("a")
    pagePara4.setAttribute("class", "pagePara4")
    pagePara4.textContent = "Learn more about Docs >"

    var pageTrial = document.createElement("h5")
    pageTrial.setAttribute("class", "pageTrial")
    pageTrial.textContent = "Start Free Trial"

    var pageImg = document.createElement("img")
    pageImg.setAttribute("src", "https://niftypm.com/_nuxt/img/large@2x.6141843.webp")
    pageImg.setAttribute("class", "pageImg9")

    page4.append(serialNo, pageHead, pagePara1, pagePara2, pagePara3, pagePara4, pageTrial,pageImg)
    mainParent.append(previousPage1,previousPage2,previousPage3, page4)
}
violetBtn4.addEventListener("click", createItem4)
//Rudra Code
var clientBtn=document.querySelector(".gotClientsBtn")
function createClientPage(){
var firstCount= document.querySelector(".firstContainerLeftDown")
var google=document.querySelector(".googleBox");
var firstLeftImg=document.querySelector(".firstLeftImg")
var  firstRightImg= document.querySelector(".firstRightImg")
var violetBtnHldr= document.querySelector("#violetBtnsHolder",)
var btnDiv=document.querySelector(".buttonsDiv")
var violetBtnItms=document.querySelector("#violetBtnItems")
var pageImg= document.querySelector(".pageImg")
var firstParnt=document.querySelector("#firstParent")
firstCount.style.display="none"
google.style.display="none"
firstLeftImg.style.display="none"
firstRightImg.style.display="none"
violetBtnHldr.style.display="none"
btnDiv.style.display="none"
violetBtnItms.style.display="none"
pageImg.style.display="none"
firstParnt.style.display="none"

var clientParent=document.getElementById("clientPage")
var pageText=document.createElement("div")
pageText.setAttribute('class','hour')
pageText.innerHTML="<h2>Track Billable Hours</h2><p>Record and export time spent on case efforts<br/> to easily stay on top of the managerial aspects<br/> of the case.</p>"
clientParent.append(pageText)
var picture=document.createElement("div")
picture.setAttribute('class','picturetext')
picture.innerHTML="<img src='https://niftypm.com/_nuxt/img/large@2x.55917e8.webp' alt=logo/>"
clientParent.append(picture)
var picture1=document.createElement("div")
picture1.setAttribute('class','picturetext1')
picture1.innerHTML="<img src='https://niftypm.com/_nuxt/img/large@2x.c55af29.webp' alt=logo/>"
clientParent.append(picture1)
var pageText1=document.createElement("div")
pageText1.setAttribute('class','record')
pageText1.innerHTML="<h2>Keep a Record</h2><p>Keep track of all your interactions and deliverables with timestamps and activity logs on tasks to avoid any miscommunications.</p>"
 clientParent.append(pageText1)
 var stored=document.getElementById("logosDiv")
 var pt=document.createElement('div')
 pt.setAttribute('class','setting')
pt.append(stored)
clientParent.append(pt)
var pageText2=document.createElement("div")
pageText2.setAttribute('class','sr')
pageText2.innerHTML="<h2>Streamline <br/> Responsibilities</h2><p>Assign tasks to your clients to notify them <br/>about what's needed and by when to reduce <br/> unnecessary meetings and naggings.</p>"
clientParent.append(pageText2)
var picture2=document.createElement('div')
picture2.setAttribute('class','picturetext2')
picture2.innerHTML="<img src='https://niftypm.com/_nuxt/img/large@2x.9e18a93.webp' alt=logo/>"
clientParent.append(picture2)
} 
clientBtn.addEventListener('click',createClientPage)


//login page
var loginBtn = document.querySelector(".loginBtn")

function createLoginPage(){
    var firstCont = document.querySelector(".firstContainerLeftDown")
    var googleBox = document.querySelector(".googleBox")
    var firstLeftImg = document.querySelector(".firstLeftImg")
    var firstRightImg = document.querySelector(".firstRightImg")
    var violetBtnHldr = document.querySelector("#violetBtnsHolder")
    var btnDiv = document.querySelector(".buttonsDiv")
    var violetBtnItms = document.querySelector("#violetBtnItems")
    var pageImg = document.querySelector(".pageImg")
    var firstParnt = document.querySelector("#firstParent")
    var yelloLogo = document.querySelector(".cl1")
    var threeBlocks = document.querySelector(".blocks")
    var main_class = document.querySelector(".main")
    var main1_class = document.querySelector(".main1")
    var logos = document.getElementById("logosDiv")
    var top = document.getElementById("topBar")
     threeBlocks.style.display = "none"
    logos.style.display = "none"
    top.style.display = "none"
    firstCont.style.display = "none"
    googleBox.style.display = "none"
    firstLeftImg.style.display = "none"
    violetBtnHldr.style.display = "none"
    btnDiv.style.display = "none"
    violetBtnItms.style.display = "none"
    pageImg.style.display = "none"
    firstParnt.style.display = "none"
    yelloLogo.style.display = "none"
    main_class.style.display = "none"
    main1_class.style.display = "none"

    var loginParent = document.getElementById("loginPage")

    var loginbox = document.createElement("h1")
    loginbox.setAttribute("class","login")
    loginbox.innerHTML = "<h2>Reporting Dashboard</h2><p>Powerful reporting to keep you on top of your business<br/>and workload.Customize your dashboard to gain<br/> insights and make informed decisions.</p><img src='https://nifty.pm/static/media/main.9818dcc5.png' alt=logo/>"
    loginParent.append(loginbox)
    var h=document.createElement('h2')
    h.setAttribute('class','hq')
    h.innerHTML="<h3>Log in to your account</h3>"
    var fm=document.createElement('form')
    fm.setAttribute('id','email')
    fm.innerHTML="<form> <label for='fname'>Email address</label><br/><input type='text' id='fname' placeholder='name@company.com' ><br/><br/><br/> <label for='lname'>Password*</label><br/><input type='text' id='lname' placeholder='Password'></form>"
     var bttn=document.createElement('div')
     bttn.setAttribute('class','d')
     bttn.innerHTML="<button>Log in</button>"
     var lg=document.createElement('div')
     lg.setAttribute('class','logonifty')
     lg.innerHTML="<img src='https://niftypm.com/_nuxt/img/nifty-logo.c577d9d.svg' alt=logo />"
     var google=document.createElement('div')
     google.setAttribute('class','googlelink')
     google.innerHTML="<a href='https://api.niftypm.com/auth/google?state='>Sign in with Google</a>"
     var signup=document.createElement('div')
     signup.setAttribute('class','bottomsignup')
     signup.innerHTML="<p>Do not have an account?</p><br/><button>Sign up for free</button>"
     loginParent.append(h,fm,bttn,lg,google,signup)
}
loginBtn.addEventListener("click",createLoginPage)

//got clients page

var clientBtn = document.querySelector(".gotClientsBtn")

function createClientPage(){
    var firstCont = document.querySelector(".firstContainerLeftDown")
    var googleBox = document.querySelector(".googleBox")
    var firstLeftImg = document.querySelector(".firstLeftImg")
    var firstRightImg = document.querySelector(".firstRightImg")
    var violetBtnHldr = document.querySelector("#violetBtnsHolder")
    var btnDiv = document.querySelector(".buttonsDiv")
    var violetBtnItms = document.querySelector("#violetBtnItems")
    var pageImg = document.querySelector(".pageImg")
    var firstParnt = document.querySelector("#firstParent")
    var yelloLogo = document.querySelector(".cl1")
    var threeBlocks = document.querySelector(".blocks")
    var main_class = document.querySelector(".main")
    var main1_class = document.querySelector(".main1")
    // var logos = document.getElementById("logosDiv")

    // logos.style.display = "none"
    firstCont.style.display = "none"
    googleBox.style.display = "none"
    firstLeftImg.style.display = "none"
    violetBtnHldr.style.display = "none"
    btnDiv.style.display = "none"
    violetBtnItms.style.display = "none"
    pageImg.style.display = "none"
    firstParnt.style.display = "none"
    yelloLogo.style.display = "none"
    threeBlocks.style.display = "none"
    main_class.style.display = "none"
    main1_class.style.display = "none"

    var clientParent = document.getElementById("clientPage")

    //first part in top area clients page
    var firstDiv = document.createElement("div")
    firstDiv.setAttribute("class", "firstDiv")

    var redText = document.createElement("h3")
    redText.setAttribute("class", "redText")
    redText.textContent = "CLIENT PROJECT MANAGEMENT"

    var firstHead = document.createElement("h1")
    firstHead.setAttribute("class", "firstHead")
    firstHead.textContent = "Automated progress reporting for your clients."

    var firstPara1 = document.createElement("p")
    firstPara1.setAttribute("class", "firstpara1")
    firstPara1.textContent = "Never lose a client due to poor communication again. Manage client projects,"

    var firstPara2 = document.createElement("p")
    firstPara2.setAttribute("class", "firstpara2")
    firstPara2.textContent = "delivers, and communications in one place."

    var input = document.createElement("input")
    input.setAttribute("placeholder","name@company.com")
    input.setAttribute("class", "input")

    var tryFree = document.createElement("h3")
    tryFree.setAttribute("class","tryFree")
    tryFree.textContent = "Try Nifty For Free"

    var googleLogo = document.createElement("img")
    googleLogo.setAttribute("src","https://lh3.googleusercontent.com/-URJHYOtHEdQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclzO7DpDu_9HO2y3udDS_5BkhCKZw/s128-c/photo.jpg")
    googleLogo.setAttribute("class","googleLogo")

    var firstFooter = document.createElement("p")
    firstFooter.setAttribute("class","firstFooter")
    firstFooter.textContent = "No credit card required.Available on Mac, Windows, iOS, & Android."

    firstDiv.append(redText, firstHead, firstPara1, firstPara2, input, tryFree, googleLogo, firstFooter)
    clientParent.append(firstDiv)


    //second part in top area clients page
    var secondDiv = document.createElement("div")
    secondDiv.setAttribute("class", "secondDiv")

    var btn1 = document.createElement("button")
    btn1.setAttribute("class", "orangeBtn1")
    var btnFoot1 = document.createElement("p")
    btnFoot1.setAttribute("class", "btnFoot1")
    btnFoot1.textContent = "STREAMLINED COMMUNICATION"
    btn1.addEventListener("mouseover", function(){
        btn1.style.backgroundColor = "rgb(248, 109, 109)"
        btnFoot1.style.color = "rgb(248, 109, 109)"
         })
         var text11=document.createElement('h1')
         text11.setAttribute('class','text11')
         text11.innerHTML="<h1>01.</h1>"
         var text12=document.createElement('p')
         text12.setAttribute('class','text12')
         text12.innerHTML="<h2>Streamlined <br/> Communication</h2>"
         var text13=document.createElement('p')
         text13.setAttribute('class','text13')
         text13.innerHTML="A space for your team and clients to share ideas,<br/> gather feedback, finalize specs, and turn<br/> discussions into actions."
         var ug=document.createElement('img')
         ug.setAttribute('class','ug')
         ug.setAttribute('src','https://niftypm.com/_nuxt/img/large@2x.637a71d.webp')
         secondDiv.append(text11,text12,text13,ug)
       
    var btn2 = document.createElement("button")
    btn2.setAttribute("class", "orangeBtn2")
    var btnFoot2 = document.createElement("p")
    btnFoot2.setAttribute("class", "btnFoot2")
    btnFoot2.textContent = "AUTOMATED REPORTING"
    btn2.addEventListener("mouseover", function(){
         btn2.style.backgroundColor = "rgb(248, 109, 109)"
         btnFoot2.style.color = "rgb(248, 109, 109)"
    })
     btn2.addEventListener('click',function(){
         text11.style.display='none'
         text12.style.display='none'
         text13.style.display='none'
         ug.style.display='none'
         //var pot=document.getElementById("poc")
         //poc.style.display='none'
         var pp=document.createElement('div')
         pp.setAttribute("id","ppo")
         var text111=document.createElement('h1')
         text111.setAttribute('class','text111')
         text111.innerHTML="<h1>02.</h1>"
         var text121=document.createElement('p')
         text121.setAttribute('class','text121')
         text121.innerHTML="<h2> Automated <br/> Reporting</h2>"
         var text131=document.createElement('p')
         text131.setAttribute('class','text131')
         text131.innerHTML="Set your project milestones and Nifty will<br/> automate your progress reporting based on the <br/>completion of associated tasks."
        var ug1=document.createElement('img')
        ug1.setAttribute('class','ug1')
        ug1.setAttribute('src','https://niftypm.com/_nuxt/img/large@2x.dfbc8bd.webp')
        pp.append(text111,text121,text131,ug1)
        secondDiv.append(pp)
    })
    var btn3 = document.createElement("button")
    btn3.setAttribute("class", "orangeBtn3")
    var btnFoot3 = document.createElement("p")
    btnFoot3.setAttribute("class", "btnFoot3")
    btnFoot3.textContent = "CENTRALIZED DELIVERABLES"
    btn3.addEventListener("mouseover", function(){
        btn3.style.backgroundColor = "rgb(248, 109, 109)"
        btnFoot3.style.color = "rgb(248, 109, 109)"
     })
     btn3.addEventListener('click',function(){
        text11.style.display='none'
        text12.style.display='none'
        text13.style.display='none'
        ug.style.display='none'
        var pp=document.getElementById("ppo")
        pp.style.display='none'
        var poc=document.createElement('div')
        poc.setAttribute("id","poc")
        var text111=document.createElement('h1')
        text111.setAttribute('class','text111')
        text111.innerHTML="<h1>03.</h1>"
        var text121=document.createElement('p')
        text121.setAttribute('class','text121')
        text121.innerHTML="<h2> Centralized<br/> Deliverables</h2>"
        var text131=document.createElement('p')
        text131.setAttribute('class','text131')
        text131.innerHTML="Share, store, and retrieve project assets to let<br/> your clients see and grab whatever they need<br/>without asking."
       var ug1=document.createElement('img')
       ug1.setAttribute('class','ug1')
       ug1.setAttribute('src','https://niftypm.com/_nuxt/img/large@2x.c55d67f.webp')
        poc.append(text111,text121,text131,ug1)
       secondDiv.append(poc)
   })
    secondDiv.append(btn1, btn2, btn3,btnFoot1, btnFoot2, btnFoot3)
     clientParent.append(secondDiv)
     //1st  orange button 
     //logos part in clients page
    var logosPart = document.getElementById("logosDiv")
    var logoHolder = document.createElement("div")
    logoHolder.setAttribute("class", "logos")
    logoHolder.append(logosPart)
    clientParent.append(logoHolder)
    

    // //orange circle logo part
    var orange_logo_div = document.createElement("div")
    orange_logo_div.setAttribute("class", "orng_logo_div")

    var orng_logo = document.createElement("p")
    orng_logo.setAttribute("class","orng_logo")

    var orng_logo_head = document.createElement("h2")
    orng_logo_head.setAttribute("class","orng_head")
    orng_logo_head.textContent = "Client Project Management Made Easy"

    var orng_logo_para = document.createElement("p")
    orng_logo_para.setAttribute("class","orng_para")
    orng_logo_para.textContent = "Enhance your project management process and build stronger client relationships"

    orange_logo_div.append(orng_logo, orng_logo_head, orng_logo_para)
    clientParent.append(orange_logo_div)
    var stay=document.createElement('div')
    stay.setAttribute('class','stay')
    stay.innerHTML="<h2>Stay in Control</h2>"
    var pr1=document.createElement('div')
    pr1.setAttribute('class','pr1')
    pr1.innerHTML="Hide specific internal conversations, tasks, and<br/>milestones from your clients to ensure they<br/>only see what you want them to see."
    var ime1=document.createElement('div')
    ime1.setAttribute("class","ime1")
    ime1.innerHTML="<img src='https://niftypm.com/_nuxt/img/large@2x.0d93820.webp' alt=logo/>"
    var stay1=document.createElement('div')
    stay1.setAttribute('class','stay1')
    stay1.innerHTML="<h2>Automate Progress <br/>Tracking</h2>"
    var pr2=document.createElement('div')
    pr2.setAttribute('class','pr2')
    pr2.innerHTML="Automate your project's progress for clients to<br/> see based on the completion of connected <br/>tasks."
    var ime2=document.createElement('div')
    ime2.setAttribute("class","ime2")
    ime2.innerHTML="<img src='https://niftypm.com/_nuxt/img/large@2x.55fa669.webp' alt=logo/>"
    var stay2=document.createElement('div')
    stay2.setAttribute('class','stay2')
    stay2.innerHTML="<h2>Track Billable Hours</h2>"
    var pr3=document.createElement('div')
    pr3.setAttribute('class','pr3')
    pr3.innerHTML="Record and export time spent on case efforts<br/> to easily stay on top of the managerial aspects<br/> of the case."
    var ime3=document.createElement('div')
    ime3.setAttribute("class","ime3")
    ime3.innerHTML="<img src='https://niftypm.com/_nuxt/img/large@2x.55917e8.webp' alt=logo/>"
    var stay3=document.createElement('div')
    stay3.setAttribute('class','stay3')
    stay3.innerHTML="<h2>Keep a Record</h2>"
    var pr4=document.createElement('div')
    pr4.setAttribute('class','pr4')
    pr4.innerHTML="Keep track of all your interactions and<br/> deliverables with timestamps and activity logs<br/> on tasks to avoid any miscommunications."
    var ime4=document.createElement('div')
    ime4.setAttribute("class","ime4")
    ime4.innerHTML="<img src='https://niftypm.com/_nuxt/img/large@2x.c55af29.webp' alt=logo/>"
    var stay4=document.createElement('div')
    stay4.setAttribute('class','stay4')
    stay4.innerHTML="<h2>Streamline <br/>Responsibilities</h2>"
    var pr5=document.createElement('div')
    pr5.setAttribute('class','pr5')
    pr5.innerHTML="Assign tasks to your clients to notify them<br/> about what's needed and by when to reduce <br/>unnecessary meetings and naggings."
    var ime5=document.createElement('div')
    ime5.setAttribute("class","ime5")
    ime5.innerHTML="<img src='https://niftypm.com/_nuxt/img/large@2x.9e18a93.webp' alt=logo/>"
    var stay5=document.createElement('div')
    stay5.setAttribute('class','stay5')
    stay5.innerHTML="<h2>Expedite Feedback <br/> Gathering</h2>"
    var pr6=document.createElement('div')
    pr6.setAttribute('class','pr6')
    pr6.innerHTML="Engage in real-time discussions that travel<br/> with you on our mobile apps to speed up<br/> discussions and feedback gathering."
    var ime6=document.createElement('div')
    ime6.setAttribute("class","ime6")
    ime6.innerHTML="<img src='https://niftypm.com/_nuxt/img/large@2x.04a1126.webp' alt=logo/>"
    //var line=document.createElement('div')
    //line.setAttribute('id','lq')
    //line.innerHTML="<hr>"
     var circle=document.createElement('div')
        circle.setAttribute('class','ccl')
     var heading=document.createElement('div')
     heading.setAttribute('class','hdg')
     heading.innerHTML="<h2>What teams say about Nifty</h2>"
     var longdiv=document.createElement('div')
     longdiv.setAttribute('class','long')
     var d1=document.createElement('div')
     d1.setAttribute('class','d1')
     d1.innerHTML="Nifty is a product that excels in many client<br/>environments. Its ease of use makes it a powerful<br/> tool for managing our client portfolio.<br/><br/><br/><br/><h3>Stefan Schmidt</h3><p>Executive Partner, Hemmersbach<p/>"
     var d2=document.createElement('div')
     d2.setAttribute('class','d2')
     d2.innerHTML="Nifty is by far the best productivity tool I've ever<br/> used. They have consolidated so many tools down to<br/> one for my team, without compromising the<br/> experience.<br/><br/><br/><h3>Rim N. Kay</h3><p>Engineering Lead, Emovis</p>"
     var d3=document.createElement('div')
     d3.setAttribute('class','d3')
     d3.innerHTML="Nifty is the glue my business was missing. Its one<br/> tool that my product team, development team, and<br/> clients all use, and now everyone knows exactly<br/> where to look for updates.<br/><br/><br/><h3>Bhargav Patel</h3><p>Founder,IQM"
     longdiv.append(d1,d2,d3)
     var rm=document.createElement('div')
     rm.setAttribute('class','rm')
     rm.innerHTML="<a href='https://www.capterra.com/p/172519/Nifty/'>Read more reviews on Capterra  ></a>"
     var picdiv=document.createElement('div')
     picdiv.setAttribute('class','picdiv')
     var dv1=document.createElement('img')
     dv1.setAttribute('class','dv1')
     dv1.setAttribute('src','https://images.g2crowd.com/uploads/report_medal/image/1248/medal.svg')
     var dv2=document.createElement('img')
     dv2.setAttribute('class','dv2')
     dv2.setAttribute('src','https://images.g2crowd.com/uploads/report_medal/image/1239/medal.svg')
     var dv3=document.createElement('img')
     dv3.setAttribute('class','dv3')
     dv3.setAttribute('src','https://images.g2crowd.com/uploads/report_medal/image/1279/medal.svg')
     var dv4=document.createElement('img')
     dv4.setAttribute('class','dv4')
     dv4.setAttribute('src','https://images.g2crowd.com/uploads/report_medal/image/1276/medal.svg')
     var dv5=document.createElement('img')
     dv5.setAttribute('class','dv5')
     dv5.setAttribute('src','https://images.g2crowd.com/uploads/report_medal/image/1236/medal.svg')
     var dv6=document.createElement('img')
     dv6.setAttribute('class','dv6')
     dv6.setAttribute('src','https://my.g2.com/assets/product-badges/users-love-us-2008b519df49af90dcfa7db4b5fe13c8ec24ced0348f0a6bd039711ad8bbffc7.svg')
     var bckcolor=document .createElement('div')
     bckcolor.setAttribute('class','bckcolor')
     var textcolor=document.createElement('div')
     textcolor.setAttribute('class','textcolor')
     textcolor.innerHTML="<h1>Switch to Nifty in minutes!</h1><p>Move your projects, team, tasks, and files from <strong>Asana, Basecamp,<br/> ClickUp, JIRA, Trello,</strong> or <strong>Wrike</strong> quickly and easily! Nifty allows your team<br/> to pick up right where you left off without missing a beat.</p><a href='https://nifty.pm/signup/email?_ga=2.249773254.1755110897.1607317473-617117086.1607317323'> Import projects now ></a>"
     var imgcolor=document.createElement('img')
     imgcolor.setAttribute('class','imgcolor')
     imgcolor.setAttribute('src','https://niftypm.com/_nuxt/img/switch.14f27db.svg')
     var colorbg=document.createElement('div')
     colorbg.setAttribute('class','colorbg')
     colorbg.innerHTML="<h1>Ready to transform your<br/>teamwork?</h1><p>Thousands of forward-thinking teams trust Nifty to unite their<br/> goals, actions, and communications in one collaborative hub.</p>"
     var colorimg=document.createElement('img')
     colorimg.setAttribute('class','colorimg')
     colorimg.setAttribute('src','https://niftypm.com/_nuxt/img/large@2x.637a71d.webp')
     var cb=document.createElement("button")
     cb.setAttribute('id','cb')
     cb.innerHTML="Try nifty for free"
     var ipt=document.createElement('input')
     ipt.setAttribute('placeholder','name@company.com')
     ipt.setAttribute('class','ipt')
     var fotter=document.createElement('div')
     fotter.setAttribute('class','fotter')
     var ft1=document.createElement('div')
     ft1.setAttribute('class','ft1')
     ft1.innerHTML="<h2>Product</h2><a href='https://niftypm.com/discussions'>Dicussions</a><br/><a href='https://niftypm.com/milestones'>Milestones</a><br/><a href='https://niftypm.com/tasks'>Task</a><br/><a href='https://niftypm.com/docs'>Docs & Files</a><br/><a href='https://niftypm.com/time-tracking'>Time tracking</a><br/><a href='https://niftypm.com/overview'>Reporting</a><br/><a href='https://niftypm.com/project-home'>Project Home</a><br/><a href='https://niftypm.com/portfolios'></a>"
     var ft2=document.createElement('div')
     ft2.setAttribute('class','ft2')
     ft2.innerHTML="<h2>Resources</h2><a href='https://blog.niftypm.com/?_ga=2.101016257.1368079419.1606214564-1179758648.1606214564'>Blog</a><br/><a href='https://changelog.niftypm.com/?_ga=2.33882593.1368079419.1606214564-1179758648.1606214564'>Change Log</a><br/><a href='https://niftypm.com/integrations'>Integrations</a><br/><a href='https://niftypm.com/apps'>Apps</a><br/><a href='https://niftypm.com/pricing'>Pricing</a><br/><a href='https://niftypm.com/partners'>Affiliates</a>"
     var ft3=document.createElement('div')
     ft3.setAttribute('class','ft3')
     ft3.innerHTML="<h2>Trust</h2><a href='https://help.niftypm.com/?_ga=2.34934241.1368079419.1606214564-1179758648.1606214564'>Help Centre</a><br/><a href='https://niftypm.com/privacy'>Privacy</a><br/><a href='https://niftypm.com/terms'>Terms of use</a><br/><a href='https://niftypm.com/security'>Security</a><br/><a href='https://status.niftypm.com/?_ga=2.265619151.1368079419.1606214564-1179758648.1606214564'>Status</a>"
     var ft4=document.createElement('div')
     ft4.setAttribute('class','ft4')
     ft4.innerHTML="<h2>Made For</h2><a href='https://niftypm.com/case/agile-development'>Agille Development</a><br/><a href='https://niftypm.com/got-clients'>Client Management</a><br/><a href='https://niftypm.com/case/digital-agency-project-management-software'>Digital Agencies</a><br/><a href='https://niftypm.com/legal-case-management'>Legal Case Management</a><br/><a href='https://niftypm.com/case/marketing-and-communication'>Marketing Teams</a><br/><a href='https://niftypm.com/case/product-teams'>Product Teams</a>"
     var ft5=document.createElement('div')
     ft5.setAttribute('class','ft5')
     ft5.innerHTML="<h2>Comparisons</h2><a href='https://niftypm.com/airtable-alternative'>Airtable Alternative</a><br/><a href='https://niftypm.com/asana-alternative'>Asana Alternative</a><br/><a href='https://niftypm.com/basecamp-alternative'>Basecamp Alternative</a><br/><a href='https://niftypm.com/clarizen-alternative'>Clarizen-Alternative</a><br/><a href='https://niftypm.com/clickup-alternative'>Click Up Alternative</a><br/><a href='https://niftypm.com/confluence-alternative'>Confluence Alternative</a><br/><a href='https://niftypm.com/flow-alternative'>Flow Alternative</a><br/><a href='https://niftypm.com/hive-alternative'>Hive Alternative</a><br/><a href='https://niftypm.com/jira-alternative'>Jira Alternative</a><br/><a href='https://niftypm.com/monday-alternative'>Monday.com Alternative</a>"
     var ft6=document.createElement('div')
     ft6.setAttribute('class','ft6')
     ft6.innerHTML="<h3>From The Blog</h3><a href='https://blog.niftypm.com/why-project-management-is-broken-and-how-to-fix-it-b13b92eb33?_ga=2.54469096.1368079419.1606214564-1179758648.1606214564'>Why project management is broken.</a><br/><a href='https://blog.niftypm.com/remote-collaboration-is-more-than-just-communication-e0a69b3702a7?_ga=2.268783281.1368079419.1606214564-1179758648.1606214564'>Why Remote Collaboration is more than</a><br/><a href='https://blog.niftypm.com/how-to-improve-productivity-with-project-portfolio-management-ppm-6aa334139c77?_ga=2.30212863.1368079419.1606214564-1179758648.1606214564'>How to improve productivity</a><br/><a href='https://blog.niftypm.com/stay-on-top-of-your-workload-and-mental-health-with-a-time-tracker-dc95384c314d?_ga=2.100477278.1368079419.1606214564-1179758648.1606214564'>Staying on top of your workload</a><br/><a href='https://blog.niftypm.com/best-legal-case-management-software-for-law-firms-2ea3f47795ab?_ga=2.42568357.1887482352.1606216368-1179758648.1606214564'>Best Legal Case Management</a>"
     fotter.append(ft1,ft2,ft3,ft4,ft5,ft6)
     colorbg.append(colorimg,ipt,cb)
     bckcolor.append(textcolor,imgcolor,colorbg,fotter)
     picdiv.append(dv1,dv2,dv3,dv4,dv5,dv6)
     clientParent.append(stay,pr1,ime1,stay1,pr2,ime2,stay2,pr3,ime3,stay3,pr4,ime4,stay4,pr5,ime5,stay5,pr6,ime6,circle,heading,longdiv,rm,picdiv,bckcolor)
     }

clientBtn.addEventListener("click", createClientPage)

//pricing page
function pricingPage(){
    var firstCont = document.querySelector(".firstContainerLeftDown")
    var googleBox = document.querySelector(".googleBox")
    var firstLeftImg = document.querySelector(".firstLeftImg")
    var firstRightImg = document.querySelector(".firstRightImg")
    var violetBtnHldr = document.querySelector("#violetBtnsHolder")
    var btnDiv = document.querySelector(".buttonsDiv")
    var violetBtnItms = document.querySelector("#violetBtnItems")
    var pageImg = document.querySelector(".pageImg")
    var firstParnt = document.querySelector("#firstParent")
    var yelloLogo = document.querySelector(".cl1")
    var threeBlocks = document.querySelector(".blocks")
    var main_class = document.querySelector(".main")
    var main1_class = document.querySelector(".main1")
    var logos = document.getElementById("logosDiv")

    logos.style.display = "none"
    firstCont.style.display = "none"
    googleBox.style.display = "none"
    firstLeftImg.style.display = "none"
    violetBtnHldr.style.display = "none"
    btnDiv.style.display = "none"
    violetBtnItms.style.display = "none"
    pageImg.style.display = "none"
    firstParnt.style.display = "none"
    yelloLogo.style.display = "none"
    threeBlocks.style.display = "none"
    main_class.style.display = "none"
    main1_class.style.display = "none"
    var pp=document.getElementById("pp")
    var ht=document.createElement('div')
    ht.innerHTML="<h1>Simple Pricing.</h1>I need nifty for <input type=number id='ipt1'/> users, billed"
    ht.setAttribute('class','ht')
    var ht1=document.createElement('div')
    ht1.setAttribute('class','ht1')
    ht1.innerHTML="<select ><option value=annually>Annuall</option> <option value=monthly>monthly</option></select>"
    var leftDiv1=document.createElement('div')
    leftDiv1.setAttribute('class','leftDiv1')
    leftDiv1.innerHTML="<ul> <li>Upgrade, downgrade,<br/> or cancel anytime.</li><br/> <li>7-day free trial.</li> <br/> <li>No credit card required.</li></ul>"
    var parent1=document.createElement('div')
    parent1.setAttribute('class','parent1')
    var starter=document.createElement('div')
    starter.setAttribute('class','starter')
    starter.innerHTML="<h3>Starter</h3>Includes all the core features.<br/>Basic to get you started."
    var starter1=document.createElement('div')
    starter1.setAttribute('id','starter1')
    starter1.innerHTML="<p>$39<br/> per month billed annually</p><p><u>Get Started</u></p><hr><br><a>10<br><br>100 GB<br><br>10<br><br>Unlimited<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br>+$20/mo<br><br>+$20/mo<br><br>+$20/mo<br><br><br><br><br><br><br><br><br>&#x2714<br><br><br><br><br><br><br><br><br><br><br><br>&#x2714</a><br><br><br><br><br><br><br><p><u>Get Started</u></p>"
    starter.append(starter1)
    var pro=document.createElement('div')
    pro.setAttribute('class','pro')
    pro.innerHTML="<h3>Pro</h3>Step up with our pro features.<br/> Simple yet powerful."
    var pro1=document.createElement('div')
    pro1.setAttribute('id','pro1')
    pro1.innerHTML="<p>$79<br/>per month, billed annually</p><p><u>Get Started</u></p><hr><br><a>20<br><br>500 GB<br><br>Unlimited<br><br>Unlimited<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br>&#x2714<br><br>+$20/mo<br><br>+$20/mo<br><br>&#x2714<br><br><br><br><br><br>&#x2714<br><br><br><br><br><br><br><br><br><br><br><br><br>&#x2714</a><br><br><br><br><br><br><br><p><u>Get Started</u></p>"
    //var pro2=document.createElement('div')
    //pro2.setAttribute('id','pro2')
   // pro2.innerHTML="20"
    pro.append(pro1)
    var business=document.createElement('div')
    business.setAttribute('class','business')
    business.innerHTML="<h3>Business</h3>For ultimate team productivity.<br/> Access to power features."
    var business1=document.createElement('div')
    business1.setAttribute('id','business1')
    business1.innerHTML="<p>$124<br/>per month, billed annually</p><p><u>Get Started</u></p><hr><br><a>30<br><br>1TB<br><br>Unlimited<br><br>Unlimited<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br><br>&#x2714<br><br>&#x2714<br><br><br><br><br><br><br><br><br><br>&#x2714<br><br>&#x2714</a><br><br><br><br><br><p><u>Get Started</u></p>"
    business.append(business1)
    var enterprise=document.createElement('div')
    enterprise.setAttribute('class','enterprise')
    enterprise.innerHTML="<h3>Enterprise</h3>A fully customizable solution<br/> for the most advanced teams.<p>Contact <br/>for custom quote</p><p><u>Contact Us</u></p><hr><br>Unlimited<br><br>Custom<br><br>Unlimited<br><br>Unlimited<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><p><u>Contact Us</u></p>"
    parent1.append(starter,pro,business,enterprise)
    
    ht1.addEventListener("click",function(){
      starter1.innerHTML="<p>$49<br/> per month,billed monthly</p><p><u>Get Started<u/></p><hr><br><a>10<br><br>100 GB<br><br>10<br><br>Unlimited<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br>+$20/mo<br><br>+$20/mo<br><br>+$20/mo<br><br><br><br><br><br><br><br><br>&#x2714<br><br><br><br><br><br><br><br><br><br><br><br>&#x2714</a>"
     pro1.innerHTML="<p>$99<br/> per month,billed monthly</p><p><u>Get Started<u/></p><hr><br><a>20<br><br>500 GB<br><br>Unlimited<br><br>Unlimited<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br>&#x2714<br><br>+$20/mo<br><br>+$20/mo<br><br>&#x2714<br><br><br><br><br><br>&#x2714<br><br><br><br><br><br><br><br><br><br><br><br><br>&#x2714</a>"
      business1.innerHTML="<p>$149<br/> per month,billed monthly</p><p><u>Get Started<u/></p><hr><br><a>30<br><br>1TB<br><br>Unlimited<br><br>Unlimited<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br><br>&#x2714<br><br>&#x2714<br><br><br><br><br><br><br><br><br><br>&#x2714<br><br>&#x2714</a>"
      enterprise.innerHTML="<h3>Enterprise</h3>A fully customizable solution<br/> for the most advanced teams.<p>Contact <br/>for custom quote</p><p><u>Contact Us</u></p><hr><br>Unlimited<br><br>Custom<br><br>Unlimited<br><br>Unlimited<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714</a>"
     ht1.innerHTML="monthly &#x2B07"
     ht1.addEventListener('dblclick',function(){
         ht1.innerHTML="annually"
         starter1.innerHTML="<p>$39<br/> per month billed annually</p><p><u>Get Started</u></p><hr><br><a>10<br><br>100 GB<br><br>10<br><br>Unlimited<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br>+$20/mo<br><br>+$20/mo<br><br>+$20/mo<br><br><br><br><br><br><br><br><br>&#x2714<br><br><br><br><br><br><br><br><br><br><br><br>&#x2714</a>"
         pro1.innerHTML="<p>$79<br/>per month, billed annually</p><p><u>Get Started</u></p><hr><br><a>20<br><br>500 GB<br><br>Unlimited<br><br>Unlimited<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br>&#x2714<br><br>+$20/mo<br><br>+$20/mo<br><br>&#x2714<br><br><br><br><br><br>&#x2714<br><br><br><br><br><br><br><br><br><br><br><br><br>&#x2714</a>"
         business1.innerHTML="<p>$124<br/>per month, billed annually</p><p><u>Get Started</u></p><hr><br><a>30<br><br>1TB<br><br>Unlimited<br><br>Unlimited<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br><br>&#x2714<br><br>&#x2714<br><br><br><br><br><br><br><br><br><br>&#x2714<br><br>&#x2714</a>"
         enterprise.innerHTML="<h3>Enterprise</h3>A fully customizable solution<br/> for the most advanced teams.<p>Contact <br/>for custom quote</p><p><u>Contact Us</u></p><hr><br>Unlimited<br><br>Custom<br><br>Unlimited<br><br>Unlimited<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br>&#x2714<br><br><br><br>&#x2714<br><br>&#x2714<br><br>&#x2714"
         })
    })
    var be=document.createElement('div')
    be.setAttribute('class','be')
    be.innerHTML="<h3>Business Essential</h3>Team Members<br><br>Storage Space<br><br>Active Projects<br><br>Guest and Clients<br>"
    var cf=document.createElement('div')
    cf.setAttribute('class','cf')
    cf.innerHTML="<h3>Core Features</h3>Task<br><br>Milestone<br><br>Discussion<br><br>Docs<br><br>Files<br><br>Team Chat<br><br>Portfolios<br><br>Recurring Tasks<br><br>Task Dependencies<br><br>Milestone Dependencies"
    var aft=document.createElement('div')
    aft.setAttribute('class','aft')
    aft.innerHTML="<h3>Advance Features</h3>Cross-Project Overviews<br><br>Team Workloads<br><br>Time Tracking & Reporting<br><br>Custom Fields<br><br>Budget Tracking"
     var ah=document.createElement('div')
     ah.setAttribute('class','ah')
     ah.innerHTML="<h3>Account & Hosting</h3>Google Single Sign-On (SSO)<br><br>Open API<br><br>Microsoft SSO<br><br>Microsoft Active Directory<br><br>Custom SAML (SSO)"
     var s=document.createElement('div')
     s.setAttribute('class','s')
     s.innerHTML="<h3>Support</h3>Self-Serve Help Center<br><br>Priority Support<br><br>Dedicated Success Manager"
     var clgm=document.createElement('div')
     clgm.setAttribute('class','clgm')
     var clg=document.createElement('div')
     clg.setAttribute('class','clg')
     clg.innerHTML="<h2> &#x2764 Trusted by</h2>"
     var clg1=document.createElement('img')
     clg1.setAttribute('class','clg1')
     clg1.setAttribute('src','https://niftypm.com/_nuxt/img/logo-apple.90494dc.svg')
     var clg2=document.createElement('img')
     clg2.setAttribute('class','clg2')
     clg2.setAttribute('src','https://niftypm.com/_nuxt/img/logo-verizon.9e31975.svg')
     var clg3=document.createElement('img')
     clg3.setAttribute('class','clg3')
     clg3.setAttribute('src','https://niftypm.com/_nuxt/img/logo-pd.2e75b01.svg')
     var clg4=document.createElement('img')
     clg4.setAttribute('class','clg4')
     clg4.setAttribute('src','https://niftypm.com/_nuxt/img/logo-emovis.1bc45e8.svg')
     var clg5=document.createElement('img')
     clg5.setAttribute('class','clg5')
     clg5.setAttribute('src','https://niftypm.com/_nuxt/img/logo-vmware.61e07e9.svg')
     var clg6=document.createElement('img')
     clg6.setAttribute('class','clg6')
     clg6.setAttribute('src','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI0MDAiPgogIDxjbGlwUGF0aCBpZD0iYiI+CiAgICA8cGF0aCBkPSJNMC0xdjgzaDU1LjkzN3YyMzZIMS41MjN2ODJoMTk0LjY1di04MmgtNTUuOTM4VjgyaDU0LjQxNFYtMXptNTU0LjAyIDF2ODJoNTUuOTM4djIzNmgtNTQuNDE0djgyaDEzOC43MVYxNzEuODRsODIuNjU2IDIyOC4wOCAxLjY4LjA0IDgxLjE3Mi0yMjguMTJWNDAwaDE0MC4yM3YtODJoLTU1LjkzOFY4Mmg1NC40MTVWMGgtMTU2LjMzbC02NC43MjYgMTgyLjg5TDcxMS44NjYgMHoiLz4KICAgIDxwYXRoIGlkPSJhIiBkPSJNMjIyLjIzIDB2ODJoNTUuOTM3djEzMGgyMTUuMzF2LTI0LjkyOHMxOC4wMTEtMTQuMDQyIDIzLjc1LTI3LjM2N2wxMS41MjMtMjUuODU1czUuMzUyLTE0LjQ3MiA1LjM1Mi0yNy40MDVsLTIuMzA1LTI1Ljg1NXMtMy42MTYtMjEuMDYzLTkuOTIyLTI3LjMyOGwtMjIuMjY2LTI1Ljg5NVM0NzEuMjc2IDAgNDMzLjc1IDB6bTE0MC4yMyA4Mmg4MS45OTJ2NzZIMzYyLjQ2eiIvPgogICAgPHVzZSB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDQwMCkiIHhsaW5rOmhyZWY9IiNhIi8+CiAgPC9jbGlwUGF0aD4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzYTNhM2EiIHN0cm9rZS13aWR0aD0iMjcuMzciIGQ9Ik0wIDEzLjY4M2gxMDMwdjUzLjIzMkgwbTAgNTMuMjMyaDk3NXY1My4yNDJIMHY1My4yMjJoOTc1djUzLjIyMkgwbTAgNTMuMjQyaDEwMzB2NTMuMjQySDAiIGNsaXAtcGF0aD0idXJsKCNiKSIvPgo8L3N2Zz4K')
     var clg7=document.createElement('img')
     clg7.setAttribute('class','clg7')
     clg7.setAttribute('src','https://niftypm.com/_nuxt/img/logo-loreal.f0acb48.svg')
     var clg8=document.createElement('img')
     clg8.setAttribute('class','clg8')
     clg8.setAttribute('src','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4OC4yIDMwLjEiPgogIDxwYXRoIGZpbGw9IiMzYTNhM2EiIGQ9Ik0zNy45IDYuN2gzLjVsOCAxMC41VjYuN2gzLjd2MTdoLTMuMmwtOC4zLTEwLjh2MTAuOGgtMy43di0xN3pNNjEuNSAxN0w1NC45IDYuN2g0LjRsNC4xIDYuOCA0LjEtNi44aDQuM2wtNi41IDEwLjJ2Ni44aC0zLjdWMTd6bTExLjktLjZWNi43aDMuN3Y5LjZjMCAyLjggMS40IDQuMiAzLjcgNC4yIDIuMyAwIDMuNy0xLjQgMy43LTQuMVY2LjdoMy43djkuNmMwIDUuMi0yLjkgNy43LTcuNSA3LjdzLTcuMy0yLjYtNy4zLTcuNm0tNjAtLjdjLTMuMS0xLjgtMi44LTQuNS0xLjUtNi40di0uMmMtLjEtLjUtLjYtMS42LS44LTEuOS0uMS0uMS0uMS0uMS0uMSAwIDAgLjUtLjYgMS44LTEuNSAzLjMtMSAxLjctMSA1LjIgMy45IDUuMiAwIC4xIDAgMCAwIDBtLjgtLjFjLTEuOC0zLjkgMS44LTYuNSAyLjQtNyAuMS0uMS4xLS4xLjEtLjIgMC0xLjItLjctMy4yLS45LTMuNWgtLjFjLS4zIDEuMi0yIDMtMi4zIDMuNC0yLjkgMy4zLTIuMiA1LjQuOCA3LjMgMCAuMSAwIDAgMCAwbS42LS4yYy45LTQuMiA0LjMtNC4zIDQuNi01LjEuNS0xLjItLjQtMy40LS42LTMuN2gtLjFjLS41IDEtMS4yIDItMS44IDIuNC0uNy43LTMuNyAyLjktMi4xIDYuNC0uMS4xIDAgLjEgMCAwbS42LjRjNS41LjIgNS45LTQuOCA1LjktNi43IDAtLjEtLjEtLjEtLjEgMC0uMi40LS45IDEuOC0yLjkgMi42LTEuNy44LTIuOCAyLjUtMi45IDQuMS0uMSAwIDAgMCAwIDBtMS4yLjZoLTQuM3YxLjNoNC4zdi0xLjN6bS0yLjUgMTAuMmMwIC4yLjUuMy42IDBsMS04LjNoLTIuNWwuOSA4LjN6bTE2IDMuNUguMVYuMWgzMHYzMHoiLz4KPC9zdmc+Cg==')
     clgm.append(clg1,clg2,clg3,clg4,clg5,clg6,clg7,clg8,clg)
     pp.append(ht,leftDiv1,parent1,ht1,be,cf,aft,ah,s,clgm)
}
var pricing=document.getElementById('pricingBtn')
pricing.addEventListener('click',pricingPage)