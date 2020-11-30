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

    var mainParent = document.getElementById("violetBtnItems") 

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
    pageImg.setAttribute("src", "https://niftypm.com/_nuxt/img/large@1x.ba76fb1.webp")
    pageImg.setAttribute("class", "pageImg")

    page2.append(serialNo, pageHead, pagePara1, pagePara2, pagePara3, pagePara4, pageTrial)
    mainParent.append(previousPage1, page2, pageImg)
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
    pageImg.setAttribute("class", "pageImg")

    page3.append(serialNo, pageHead, pagePara1, pagePara2, pagePara3, pagePara4, pageTrial)
    mainParent.append(previousPage1,previousPage2, page3, pageImg)
}
violetBtn3.addEventListener("click", createItem3)

//4th button
function createItem4(){
    var previousPage1 = document.getElementById("page1")
    var previousPage2 = document.getElementById("page2")
    var previousPage3 = document.getElementById("page3")
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
    pageImg.setAttribute("src", "https://niftypm.com/_nuxt/img/large@1x.ba76fb1.webp")
    pageImg.setAttribute("class", "pageImg")

    page4.append(serialNo, pageHead, pagePara1, pagePara2, pagePara3, pagePara4, pageTrial)
    mainParent.append(previousPage1,previousPage2,previousPage3, page4, pageImg)
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

    logos.style.display = "none"
    top.style.display = "none"
    firstCont.style.display = "none"
    googleBox.style.display = "none"
    firstLeftImg.style.display = "none"
    firstRightImg.style.display = "none"
    violetBtnHldr.style.display = "none"
    btnDiv.style.display = "none"
    violetBtnItms.style.display = "none"
    pageImg.style.display = "none"
    firstParnt.style.display = "none"
    yelloLogo.style.display = "none"
    threeBlocks.style.display = "none"
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
    firstRightImg.style.display = "none"
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
    googleLogo.setAttribute("src","https://pbs.twimg.com/profile_images/1305883698471018496/_4BfrCaP_200x200.jpg")
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

    var btn2 = document.createElement("button")
    btn2.setAttribute("class", "orangeBtn2")
    var btnFoot2 = document.createElement("p")
    btnFoot2.setAttribute("class", "btnFoot2")
    btnFoot2.textContent = "AUTOMATED REPORTING"
    btn2.addEventListener("mouseover", function(){
        btn2.style.backgroundColor = "rgb(248, 109, 109)"
        btnFoot2.style.color = "rgb(248, 109, 109)"
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

    var orangeBtnsDiv = document.createElement("div")
    orangeBtnsDiv.setAttribute("class","orangeBtnsDiv")

    var btnsTextDiv = document.createElement("div")
    btnsTextDiv.setAttribute("class","btnsTextDiv")

    orangeBtnsDiv.append(btn1, btn2, btn3)
    btnsTextDiv.append(btnFoot1, btnFoot2, btnFoot3)
    secondDiv.append(orangeBtnsDiv, btnsTextDiv)
    // clientParent.append(secondDiv)

    //1st  orange button 
    
    var orangePage1 = document.createElement("div")
    orangePage1.setAttribute("class", "orangePage1")

    var orngSno = document.createElement("h1")
    orngSno.setAttribute("class","orngSno")
    orngSno.textContent = "01."

    var orngHead1 = document.createElement("h3")
    orngHead1.setAttribute("class","orngHead1")
    orngHead1.textContent = "Streamlined"

    var orngHead2 = document.createElement("h3")
    orngHead2.setAttribute("class","orngHead2")
    orngHead2.textContent = "Communication"

    var orngPara1 = document.createElement("p")
    orngPara1.setAttribute("class", "orngPara1")
    orngPara1.textContent = "A Space for your team and client to share ideas,"

    var orngPara2 = document.createElement("p")
    orngPara2.setAttribute("class", "orngPara2")
    orngPara2.textContent = "gather feedback, finalize specs and turn"

    var orngPara3 = document.createElement("p")
    orngPara3.setAttribute("class", "orngPara3")
    orngPara3.textContent = "discussions into actions."

    var orngTrial = document.createElement("p")
    orngTrial.setAttribute("class", "orngTrial")
    orngTrial.textContent = "Start Free Trial"

    var orngImg1 = document.createElement("div")

    var ornImg = document.createElement("img")
    ornImg.setAttribute("src", "https://niftypm.com/_nuxt/img/large@1x.1450581.webp")
    ornImg.setAttribute("class", "ornImg")

    orngImg1.append(ornImg)

    orangePage1.append(orngSno, orngHead1, orngHead2, orngPara1, orngPara2, orngPara3, orngTrial)
    secondDiv.append(orangePage1, orngImg1)
    clientParent.append(secondDiv)

    //2nd orange button
    function createPage2(){
        var prevPage = document.querySelector(".orangePage1")
        prevPage.style.display = "none"
        var prevImg = document.querySelector(".ornImg")
        prevImg.style.display = "none"

        var orangePage2 = document.createElement("div")
        orangePage2.setAttribute("class", "orangePage2")

        var orngSno = document.createElement("h1")
        orngSno.setAttribute("class","orngSno")
        orngSno.textContent = "02."

        var orngHead1 = document.createElement("h3")
        orngHead1.setAttribute("class","orngHead1")
        orngHead1.textContent = "Automated"

        var orngHead2 = document.createElement("h3")
        orngHead2.setAttribute("class","orngHead2")
        orngHead2.textContent = "Reporting"

        var orngPara1 = document.createElement("p")
        orngPara1.setAttribute("class", "orngPara1")
        orngPara1.textContent = "A Space for your team and client to share ideas,"

        var orngPara2 = document.createElement("p")
        orngPara2.setAttribute("class", "orngPara2")
        orngPara2.textContent = "gather feedback, finalize specs and turn"

        var orngPara3 = document.createElement("p")
        orngPara3.setAttribute("class", "orngPara3")
        orngPara3.textContent = "discussions into actions."

        var orngTrial = document.createElement("p")
        orngTrial.setAttribute("class", "orngTrial")
        orngTrial.textContent = "Start Free Trial"

        var orngImg1 = document.createElement("div")

        var ornImg = document.createElement("img")
        ornImg.setAttribute("src", "https://niftypm.com/_nuxt/img/large@1x.ba76fb1.webp")
        ornImg.setAttribute("class", "ornImg")

        orngImg1.append(ornImg)

        orangePage2.append(orngSno, orngHead1, orngHead2, orngPara1, orngPara2, orngPara3, orngTrial)
        secondDiv.append(orangePage2, orngImg1)
        clientParent.append(secondDiv)

    }
    btn2.addEventListener("click", createPage2)
    

    
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

    //three consecutive blocks in down part
    // var threeBlocks = document.querySelector(".blocks")
    // var blocksPart = document.createElement("div")
    // blocksPart.setAttribute("class","blocksPart")
    // blocksPart.append(threeBlocks)
    // clientParent.append(blocksPart)

    //individual div 1
    var indivDiv1 = document.createElement("div")
    indivDiv1.setAttribute("class","indivDiv1")

        var indiv1Text = document.createElement("div")
        indiv1Text.setAttribute("class","indiv1Text")

        var indiv1Head = document.createElement("h2")
        indiv1Head.setAttribute("class","indiv1Head")
        indiv1Head.textContent = "Stay in Control"

        var indiv1Para1 = document.createElement("p")
        indiv1Para1.setAttribute("class","indiv1Para1")
        indiv1Para1.textContent = "Hide specific internal coversations,tasks and"
        var indiv1Para2 = document.createElement("p")
        indiv1Para2.setAttribute("class","indiv1Para2")
        indiv1Para2.textContent = "milestones from your clients to ensure they only"
        var indiv1Para3 = document.createElement("p")
        indiv1Para3.setAttribute("class","indiv1Para3")
        indiv1Para3.textContent = "see what you want them to see"

        var indiv1Img = document.createElement("img")
        indiv1Img.setAttribute("class","indiv1Img")
        indiv1Img.setAttribute("src","https://niftypm.com/_nuxt/img/large@1x.e11831f.webp")

    indiv1Text.append(indiv1Head, indiv1Para1, indiv1Para2, indiv1Para3)
    indivDiv1.append(indiv1Text, indiv1Img)
    clientParent.append(indivDiv1)

    //individual div 2
    var indivDiv2 = document.createElement("div")
    indivDiv2.setAttribute("class","indivDiv2")

        var indiv2Text = document.createElement("div")
        indiv2Text.setAttribute("class","indiv2Text")

        var indiv2Head = document.createElement("h2")
        indiv2Head.setAttribute("class","indiv2Head")
        indiv2Head.textContent = "Automate Progress "
        var indiv2Head1 = document.createElement("h2")
        indiv2Head1.setAttribute("class","indiv2Head1")
        indiv2Head1.textContent = "Tracking"

        var indiv2Para1 = document.createElement("p")
        indiv2Para1.setAttribute("class","indiv2Para1")
        indiv2Para1.textContent = "Automate your projects progress for clients to see"
        var indiv2Para2 = document.createElement("p")
        indiv2Para2.setAttribute("class","indiv2Para2")
        indiv2Para2.textContent = "based on completion of connected tasks."

        var indiv2Img = document.createElement("img")
        indiv2Img.setAttribute("class","indiv2Img")
        indiv2Img.setAttribute("src","https://niftypm.com/_nuxt/img/large@1x.e6ff289.webp")

    indiv2Text.append(indiv2Head, indiv2Head1, indiv2Para1, indiv2Para2)
    indivDiv2.append(indiv2Text, indiv2Img)
    clientParent.append(indivDiv2)

    //individual div 3
    var indivDiv3 = document.createElement("div")
    indivDiv3.setAttribute("class","indivDiv3")

        var indiv3Text = document.createElement("div")
        indiv3Text.setAttribute("class","indiv3Text")

        var indiv3Head = document.createElement("h2")
        indiv3Head.setAttribute("class","indiv3Head")
        indiv3Head.textContent = " Track Billable Hours "
        
        var indiv3Para1 = document.createElement("p")
        indiv3Para1.setAttribute("class","indiv3Para1")
        indiv3Para1.textContent = "Record and export time spent on case efforts to"
        var indiv3Para2 = document.createElement("p")
        indiv3Para2.setAttribute("class","indiv3Para2")
        indiv3Para2.textContent = "easily stay on top of the managerial aspects of the case."

        var indiv3Img = document.createElement("img")
        indiv3Img.setAttribute("class","indiv3Img")
        indiv3Img.setAttribute("src","https://niftypm.com/_nuxt/img/large@1x.55917e8.webp")

    indiv3Text.append(indiv3Head, indiv3Para1, indiv3Para2)
    indivDiv3.append(indiv3Text, indiv3Img)
    clientParent.append(indivDiv3)

    //individual div 4
    var indivDiv4 = document.createElement("div")
    indivDiv4.setAttribute("class","indivDiv4")

        var indiv4Text = document.createElement("div")
        indiv4Text.setAttribute("class","indiv4Text")

        var indiv4Head = document.createElement("h2")
        indiv4Head.setAttribute("class","indiv4Head")
        indiv4Head.textContent = " Keep a Record "
        
        var indiv4Para1 = document.createElement("p")
        indiv4Para1.setAttribute("class","indiv4Para1")
        indiv4Para1.textContent = "keep interactions of all your interactions and deliverables"
        var indiv4Para2 = document.createElement("p")
        indiv4Para2.setAttribute("class","indiv4Para2")
        indiv4Para2.textContent = "withtime stamps and activity logoson tasks to avoid any miscommunication."

        var indiv4Img = document.createElement("img")
        indiv4Img.setAttribute("class","indiv4Img")
        indiv4Img.setAttribute("src","https://niftypm.com/_nuxt/img/large@1x.68c2164.webp")

    indiv4Text.append(indiv4Head, indiv4Para1, indiv4Para2)
    indivDiv4.append(indiv4Text, indiv4Img)
    clientParent.append(indivDiv4)

    //individual div 5
    var indivDiv5 = document.createElement("div")
    indivDiv5.setAttribute("class","indivDiv5")

        var indiv5Text = document.createElement("div")
        indiv5Text.setAttribute("class","indiv5Text")

        var indiv5Head = document.createElement("h2")
        indiv5Head.setAttribute("class","indiv5Head")
        indiv5Head.textContent = " Streamline Responsibilities "
        
        var indiv5Para1 = document.createElement("p")
        indiv5Para1.setAttribute("class","indiv5Para1")
        indiv5Para1.textContent = "Assign tasks to your clients to notify them about"
        var indiv5Para2 = document.createElement("p")
        indiv5Para2.setAttribute("class","indiv5Para2")
        indiv5Para2.textContent = "what's needed and by when to reduce unnecessary meetings and naggings."

        var indiv5Img = document.createElement("img")
        indiv5Img.setAttribute("class","indiv5Img")
        indiv5Img.setAttribute("src","https://niftypm.com/_nuxt/img/large@1x.37ccc78.webp")

    indiv5Text.append(indiv5Head, indiv5Para1, indiv5Para2)
    indivDiv5.append(indiv5Text, indiv5Img)
    clientParent.append(indivDiv5)

    //yellow icon with text
    var yelloParent = document.createElement("div")
    yelloParent.setAttribute("class","yelloParent")

    var yellow_logo = document.createElement("p")
    yellow_logo.setAttribute("class","yellow_logo")
    
    var yellow_logo_text = document.createElement("h2")
    yellow_logo_text.setAttribute("class","yellow_logo_text")
    yellow_logo_text.textContent = "What teams say about Nifty..."

    yelloParent.append(yellow_logo, yellow_logo_text)
    clientParent.append(yelloParent)

    //3 blocks part
    var three_blocks = document.createElement("div")
    three_blocks.setAttribute("class","three_blocks")

    //block1
    var block_1 = document.createElement("div")
    block_1.setAttribute("class","block_1")

    var block1_text = document.createElement("p")
    block1_text.setAttribute("class","block1_text")
    block1_text.textContent = "Nifty is the glue my business was missing. Its one tool that my product team, development team, and clients all use, and now everyone knows exactly where to look for updates."
    
    var block1_foot1 = document.createElement("h4")
    block1_foot1.setAttribute("class","block1_foot1")
    block1_foot1.textContent = "Bhargav Patel"
    var block1_foot2 = document.createElement("p")
    block1_foot2.setAttribute("class","block1_foot2")
    block1_foot2.textContent = "Founder, IQM"

    block_1.append(block1_text, block1_foot1, block1_foot2)
    
    //block2
    var block_2 = document.createElement("div")
    block_2.setAttribute("class","block_2")

    var block2_text = document.createElement("p")
    block2_text.setAttribute("class","block1_text")
    block2_text.textContent = "Nifty is a product that excels in many client environments. Its ease of use makes it a powerful tool for managing our client portfolio."
    
    var block2_foot1 = document.createElement("h4")
    block2_foot1.setAttribute("class","block1_foot1")
    block2_foot1.textContent = "Stefan Schimidt"
    var block2_foot2 = document.createElement("p")
    block2_foot2.setAttribute("class","block1_foot2")
    block2_foot2.textContent = "Executive Partner, Hemmersbach"

    block_2.append(block2_text, block2_foot1, block2_foot2)

    //block3
    var block_3 = document.createElement("div")
    block_3.setAttribute("class","block_3")

    var block3_text = document.createElement("p")
    block3_text.setAttribute("class","block1_text")
    block3_text.textContent = "Nifty is by far the best productivity tool I've ever used. They have consolidated so many tools down to one for my team, without compromising the experience."
    
    var block3_foot1 = document.createElement("h4")
    block3_foot1.setAttribute("class","block1_foot1")
    block3_foot1.textContent = "Rim N. Kay"
    var block3_foot2 = document.createElement("p")
    block3_foot2.setAttribute("class","block1_foot2")
    block3_foot2.textContent = "Engineering Lead, Emovis"

    block_3.append(block3_text, block3_foot1, block3_foot2)

    three_blocks.append(block_1, block_2, block_3)
    clientParent.append(three_blocks)

    //clients page bottom part

    var client_bottom_div = document.createElement("div")
    client_bottom_div.setAttribute("class","clientbot_div")

    //text
    var text_div = document.createElement("div")
    text_div.setAttribute("class","text_div")

    var text_div_h2 = document.createElement("h1")
    text_div_h2.setAttribute("class","text_h2")
    text_div_h2.textContent = "Switch to nifty in minutes!"

    var text_div_para = document.createElement("p")
    text_div_para.setAttribute("class","text_p")
    text_div_para.textContent = "Move your projects, team, tasks, and files from Asana, Basecamp, ClickUp, JIRA, Trello, or Wrike quickly and easily! Nifty allows your team to pick up right where you left off without missing a beat."

    var text_div_foot = document.createElement("h4")
    text_div_foot.setAttribute("class","text_foot")
    text_div_foot.textContent = "Import Projects Now >"

    text_div.append(text_div_h2, text_div_para, text_div_foot)

    //img logo
    var img_div = document.createElement("div")
    img_div.setAttribute("class","img_div")

    var img_logo = document.createElement("img")
    img_logo.setAttribute("src","https://niftypm.com/_nuxt/img/switch.14f27db.svg")
    img_logo.setAttribute("class","img_logo")

    img_div.append(img_logo)

    client_bottom_div.append(text_div, img_div)
    clientParent.append(client_bottom_div)

    //colored background and img
    var color_back = document.createElement("div")
    color_back.setAttribute("class","color_back")

    //text
    var clr_text = document.createElement("div")
    clr_text.setAttribute("class","clr_text")

    clrtxt_h1 = document.createElement("h2")
    clrtxt_h1.setAttribute("class","clrtxt_h1")
    clrtxt_h1.textContent = "Ready to transform your"
    clrtxt_h2 = document.createElement("h2")
    clrtxt_h2.setAttribute("class","clrtxt_h2")
    clrtxt_h2.textContent = "teamwork?"

    clrtxt_p = document.createElement("p")
    clrtxt_p.setAttribute("class","clrtxt_p")
    clrtxt_p.textContent = "Thousands of forward-thinking teams trust Nifty to unite their goals, actions, and communications in one collaborative hub."

    clrtxt_b1 = document.createElement("h3")
    clrtxt_b1.setAttribute("class","clrtxt_b1")
    clrtxt_b1.textContent = "Try Nifty for Free"
    clrtxt_b2 = document.createElement("h3")
    clrtxt_b2.setAttribute("class","clrtxt_b2")
    clrtxt_b2.textContent = "Get a Demo"

    clr_text.append(clrtxt_h1, clrtxt_h2, clrtxt_p, clrtxt_b1, clrtxt_b2)
    color_back.append(clr_text)

    //img
    var clr_img = document.createElement("img")
    clr_img.setAttribute("src","https://niftypm.com/_nuxt/img/large@1x.1450581.webp")
    clr_img.setAttribute("class","clr_img")

    color_back.append(clr_img)

    client_bottom_div.append(color_back)
    clientParent.append(client_bottom_div)

}
clientBtn.addEventListener("click", createClientPage)
