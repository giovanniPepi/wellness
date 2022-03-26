let feelsBetter = false;
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
contentUpdater = (arg1, arg2) => {
    const content = document.querySelector(".content");
    const introQuest = document.querySelector(".introQuestion");
    content.textContent = arg1;
    introQuest.textContent = arg2;
}
buttonUpdater = (arg1, arg2) => {
    button1.textContent = arg1;
    button2.textContent = arg2;
}
choiceHandler = () => {    
    button1.addEventListener("click", () => {
        feelsBetter = false;
        alert("sorry!")
    })
    button2.addEventListener("click", () => {
        feelsBetter = true;
        feelsBetter();
    });
}
feelsBetterHandler = () => {
    if (!feelsBetter) return;
    const text1 = "congratulations! You've solved your problem!";
    const text2 = "";
    contentUpdater(text1, text2);
};
choiceHandler();





