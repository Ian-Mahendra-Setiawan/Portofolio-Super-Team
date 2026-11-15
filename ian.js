const pfp = document.querySelector("#pfp");
var pfpIndex = 0;
const pfps = ["assets/neopolitan.jpg", "assets/PFP stuff.png"];

function togglePFP()
{
    pfpIndex = 1 - pfpIndex;
    pfp.setAttribute("src", pfps[pfpIndex]);
}

var activePopup = false;
function preventActionsInPopup(e)
{
    if (activePopup && e.target.id != "popupButton") stopImmediatePropagation();
}

const body = document.querySelector("body");
body.addEventListener("click", preventActionsInPopup, true);

const hoverSFX = document.querySelector("#hoverSFX");
const selectSFX = document.querySelector("#selectSFX");

function playHoverSFX(e)
{
    hoverSFX.currentTime = 0;
    if (e.target.classList.contains("interactive")) hoverSFX.play();
}

function playSelectSFX(e)
{
    selectSFX.currentTime = 0;
    if (e.target.classList.contains("interactive")) selectSFX.play();
}

body.addEventListener("mouseenter", playHoverSFX, true);
body.addEventListener("mousedown", playSelectSFX, true);

function toggleScrollable()
{
    body.classList.toggle("unscrollable");
}
toggleScrollable();

const bg = document.querySelector("#bg");
const hidable = document.querySelectorAll(".modal");
var hideIndex = 0;
function toggleHide(e)
{
    if (e.target.classList.contains("interactive") && e.target.dataset.shot != null)
    {
        toggleScrollable();
        if (e.target.dataset.shot != 0)
            hideIndex = e.target.dataset.shot;

        console.log(hideIndex);
        bg.classList.toggle("hidden");
        hidable[1].classList.add("hidden");
        hidable[hideIndex].classList.toggle("hidden");
    }
}

body.addEventListener("click", toggleHide, true);

if ("scrollRestoration" in history)
    history.scrollRestoration = 'manual';

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});