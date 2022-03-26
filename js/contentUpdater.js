let feelsBetter = false;
let shouldAsk = false;
let step = 0;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const buttons = document.querySelector(".buttons"); 
const sidebar = document.querySelector(".sidebar");

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
buttonChoiceCreator = (arg1, arg2) => {
    buttons.innerHTML="";
    btn3 = document.createElement("button");
    btn3.setAttribute("class", "button");
    btn4 = document.createElement("button");
    btn4.setAttribute("class", "button");
    btn3.textContent = arg1;
    btn4.textContent = arg2;
    buttons.appendChild(btn3);
    buttons.appendChild(btn4);
};
choiceHandler = () => {    
    button1.addEventListener("click", () => {
        feelsBetter = false;
        happinessGenerator(step);
    })  
    button2.addEventListener("click", () => {
        feelsBetter = true;
        feelsBetterHandler();
    });
}
feelsBetterHandler = () => {
    if (!feelsBetter) return;
    const text1 = "congratulations! You've solved your problem!";
    const text2 = "come back whenever you need it =)";
    contentUpdater(text1, text2);
    buttons.innerHTML="";
};
function sidebarUpdater (step){
    sidebar.textContent = step;
}
function buttonListenerUpdater () {
    btn3.addEventListener("click", () => {
        if (feelsBetter) {
            feelsBetterHandler();     
        } else intermediaryStep ();
    });
    btn4.addEventListener("click", () => {
        feelsBetter = true;
        feelsBetterHandler();        
    })
}
function intermediaryStep () {
    sidebarUpdater(step);
    contentUpdater("" + "Are you feeling better now?")
    buttonChoiceCreator("No :(", "Yes!");
    btn3.addEventListener("click", () => {
        if (feelsBetter) {
            feelsBetterHandler();     
        } else {
            step++;
            sidebarUpdater(step);
            happinessGenerator(step);
        };
    });
    btn4.addEventListener("click", () => {
        feelsBetter = true;
        feelsBetterHandler();        
    })    
}
/* PLEASE INCLUDE SOURCES! */
function happinessGenerator (step) {
    if (feelsBetter) return;
    switch (step) {
        case 0:
            sidebarUpdater(step);
            contentUpdater("Lack of proper hydration can lead to mood swings, headaches and " +
            "can be tiring", "Did you drink water in the past few hours?")
            buttonChoiceCreator("No - I will drink now", "Yes, I'm hydrated");
            buttonListenerUpdater();
            break;
        case 1:
            sidebarUpdater(step);
            contentUpdater("A well balanced diet can keep you nourished for hours. " + 
            "Some people may feel tired, fatigue and headaches after a few hours from the last meal." + 
            " Some people also feel lack of motivation and mood swings after a few days eating less than ideal calories. Please make sure you have been eating properly!", "Have you been eating well lately?")
            buttonChoiceCreator("No - I will eat something", "Yes, I'm well fed");
            buttonListenerUpdater();            
        }
    }
choiceHandler();





