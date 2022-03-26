let feelsBetter = false;
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
    sidebarUpdater();
    const text1 = "congratulations! You've solved your problem! Remember, well being is a process. If you're not feeling well most of the times, you " + 
    "may need to put more thought into what you can do on your routine to feel better often.";
    const text2 = "come back whenever you need it =)";
    contentUpdater(text1, text2);
    buttons.innerHTML="";
};
function sidebarUpdater (step){
    sidebar.textContent = step;
    sidebar.textContent += feelsBetter;
}
function buttonListenerUpdater () {
    btn3.addEventListener("click", () => {
        if (feelsBetter) {
            feelsBetterHandler();     
        } else intermediaryStep ();
    });
    btn4.addEventListener("click", () => {
        step++
        sidebarUpdater(step)
        happinessGenerator(step);        
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
            break;
        case 2:
            sidebarUpdater(step);
            contentUpdater("Everyone needs to sleep well and most people need from 6 to 9 hours of sleep a day to feel rested - how much hours for you, you probably can estimate. " + 
            "It may not be possible to sleep as many hours as you wish everyday, but overrall on your week, you need to be rested on a weekly or even monthly basis " + 
            "to avoid being stressed and burned out." + "If you are in a stressfull and demanding moment of your life, "
             + "such as raising a newborn or workingovertime, it can be challenging or not possible at all to sleep more hours, " + 
             "however if you are not feeling well - and that's why you're here - you may try to squeeze a few minutes of sleep on your routine. " + 
             "These minutes can add up to some hours over weeks and contribute to your well being.", "Have you been sleeping well?");
            buttonChoiceCreator("No - I will take a nap or try to sleep more", "Yes, I've been sleeping well");
            buttonListenerUpdater();            
            break;
        case 3:
            sidebarUpdater(step);
            contentUpdater("Resistance trainning, at least twice a week, and aerobic trainning at least 120 minutes a week, is essential for well being " + 
            "in a modern sedentary lifestyle.", "Have you been doing resistance and aerobic exercises in the past days?");
            buttonChoiceCreator("No - I will start right away", "Yes");
            buttonListenerUpdater();            
            break;
        case 4:
            sidebarUpdater(step);
            contentUpdater("Caffeine is a double edged sword - while it may help you with energy and mood throughout your morning and work day, " + 
            "it can cause headaches and induce stress at certain levels. For some people, caffeine may look like it doesn't affect them at all, " + 
            "but the absence of caffeine can induce withdrawal symptoms like headaches and tiredness. If you need to take much more " + 
            "than the equivalent of a few cups of espresso a day, it may be affecting your overrall mood and/or sleep quality. Please note that " + 
            "Coke, Green and Black Tea, Chocolate and other beverages also have a non negligible amount of caffeine in them and can add up to your intake.", 
            "Have you been intaking a lot of caffeine in the past days?");
            buttonChoiceCreator("Yes - I will try to reduce my intake", "No, I don't drink too much/at all caffeine.");
            buttonListenerUpdater();            
            break; 
            case 5:
                sidebarUpdater(step);
                contentUpdater("Alcohol consumption can lead to anxiety and stress as the brain tries to counter act the " + 
                "depressive effects it has. Mentally, alcohol may lower sleep quality, lower inhibitions and lead to awkward social situations, short term memory loss and unexpected" + 
                "2AM calls. While most people can moderate and drink socially, some people may not notice how much alcohol consumption - specially " + 
                "daily - may be affecting their quality of life.", "Have you been drinking more than the equivalent of a beer daily for the past days?");
                buttonChoiceCreator("Yes - I will try to reduce my intake", "No, I drink sparingly/not at all");
                buttonListenerUpdater();            
                break;
            case 6:
                sidebarUpdater(step);
                contentUpdater("Other drugs can also lead to anxiety, stress and mental unwellness, specially when deprived of their use. " + 
                "If this applies to you, and considering you're here to try to feel better, you may consider asking for professional help to " +
                "reduce intake and get better.", "Do you use any other drug or substance?");
                buttonChoiceCreator("Yes - I will call a doctor to help me", "No");
                buttonListenerUpdater();            
            break;
            case 7:
                sidebarUpdater(step);
                contentUpdater("Humans are social creatures! Some people may need a lot of social contact and interaction daily, while others feel better " + 
                "when they're alone in their house relaxing. However, everyone eventually need social contact, specially form their friends and loved " + 
                "ones. Having at least someone you can talk to and share experiences together helps you feel mentally better in the long run. " + 
                "If you ever felt lonely at home, but also felt like you wanted to go home when you're at social gatherings, you understand " + 
                "how you need at least a little social contact. If you don't have anyone, you could try picking out hobbies that are of your interest " + 
                "and can also be social - such as team sports, cycling, running, gym (these will also solve your need for exercise) " + 
                "or working and helping a charity/cause you have interested. You're not alone! It can be overwhelmingly at the beggnining, but " + 
                "A psycologist may help you and complement on your quest to social well being." + "Do you have friends or people you can talk to and share a bond?");
                buttonChoiceCreator("No - I will work on getting more social contact", "Yes, I have someone");
                buttonListenerUpdater();            
            break;
            case 8:
                sidebarUpdater(step);
                contentUpdater("Working is a huge part of the modern life. We often spend much more time working than on leisure time, or time " +
                "with family and friends, may it be a conscious choice - working more to get a promotion - or an mandatory one by the employer. " + 
                "Work-life balance has only recently been the focus of research, and the COVID pandemic's increase in remote working has led to a lot fo people " + 
                "realizing that they could have a better work-life balance." + "If you're currently under stress from work, if possible, you may try to ease a little " + 
                "bit. There's diminishing returns in work too many hours, and if possible you may reduce hours for some time to get better - which in the end can end " +
                "up increasing your productivity. If you're stuck because of employer schedules, there may not be an instant choice that will " + 
                "reduce your work time right now, but realizing that this is affecting you can put you in a path to make choices that wil eventually lead " + 
                "to a better work life, such as looking for a better employer, better pay, or chaning careers entirely - it's up to you!", 
                "Has your work-life been unbalanced lately? ");
                buttonChoiceCreator("Yes - I will work on what I can change to a better work-life balance", "No, I have a good work-life balance");
                buttonListenerUpdater();            
            break; 
            
            


        /* case 10:
            sidebarUpdater(step);
            contentUpdater("Even though rarely, some medications could have side effects that may affect your energy levels and mood. " + 
            "If you take any medication, please contact your doctor to check out if they could be affecting you.", "Do you take any kind of medications?");
            buttonChoiceCreator("Yes - I will contact my doctor", "No");
            buttonListenerUpdater();            
            break;
 */
/*         case x:
            sidebarUpdater(step);
            contentUpdater("");
            buttonChoiceCreator("", "");
            buttonListenerUpdater();            
            break; */
        }
    }
choiceHandler();





