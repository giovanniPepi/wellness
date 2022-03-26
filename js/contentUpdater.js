let feelsBetter = false;
let step = 0;

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
        happinessGenerator(step);
    })
    button2.addEventListener("click", () => {
        feelsBetter = true;
        feelsBetterHandler();
    });
}/* 
choiceStepHandler = () => {
    button1.addEventListener("click", () => {
        contentUpdater("if you just drank water, let a few minutes pass so your body can recover its proper hydration. ",
        "Do you feel better now?");
        buttonUpdater("I still feel bad.", "I feel fine!");       
    })
    button2.addEventListener("click", () => {
        feelsBetter = true;
        feelsBetterHandler();
    });
} */
feelsBetterHandler = () => {
    if (!feelsBetter) return;
    const text1 = "congratulations! You've solved your problem!";
    const text2 = "come back whenever you need it =)";
    contentUpdater(text1, text2);
    buttonUpdater("", "");
};

/* PLEASE INCLUDE SOURCES! */
function happinessGenerator (step) {
    if (feelsBetter) return;
    switch (step) {
        case 0:
            contentUpdater("Lack of proper hydration can lead to mood swings, headaches and " +
            "can be tiring", "Did you drink water in the past few hours?");
            buttonUpdater("I will drink water now", "I'm hydrated");
            button1.addEventListener("click", () => {
                contentUpdater("if you just drank water, let a few minutes pass so your body can recover its proper hydration. ",
                "Do you feel better now?");
                buttonUpdater("I still feel bad.", "I feel fine!");  
                button1.addEventListener("click", () => {
                    step++;
                    happinessGenerator(step);
                })     
            });
            break;
        case 1: {
            
        }
        }
    }


choiceHandler();





