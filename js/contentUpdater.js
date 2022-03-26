contentCleaner = () => {
    const introQuest = document.querySelector(".introQuestion");
    const content = document.querySelector(".content");

    introQuest.innerHTML = "";
    content.innerHTML = "";
}
buttonUpdater = (arg1, arg2) => {
    button1 = document.querySelector("#button1");
    button2 = document.querySelector("#button2");
    button1.textContent = arg1; // add
    button2.textContent = arg2; //add
}



