const Data = [
    {
        question: " Wardens are behaving very badly and rudely . we don't deserve this behavior paying so much for the hostel.... Hostel timings of girls are not right... Because boys enjoy campus in night but girls can't have that right ... In this era where everyone is facing mental issues, depression etc... Everyone of us also deserve a freedom to move out of hostel premises just to get some fresh air... But that's not the case for us.. whereas boys enjoy without any restrictions…",
        answer: "	Sure, I understand your concern about the wardens and the timing of girls hostel allotment. It's important to follow the rules and policies set by Lovely Professional University when it comes to such matters. However, if you face any issues with the behavior of wardens, you can always reach out to the administration block for assistance and resolution. Being polite while making a complaint is always helpful in getting a quick solution",
        // type: "administration"
    },
    {
        question: "Whatever issue there is, we post on RMS, and they say it will be resolved in 3 to 4 days, but without solving anything, they close the issue requests. This has happened multiple times for me.",
        answer: "If your concern is not resolved by the RMS team and the problem persists, please inform the faculties at the administration block. They will be able to provide further assistance on this matter. It's important to communicate your concerns clearly and respectfully so that they can be addressed effectively.",
        // type: "academics"
    },
    {
        question: "How to change the mess you have opted for?",
        answer: "We understand your concerns. If you are certain about wanting to change your dining hall, please visit Block 32, Cabin 4, and submit a formal request for a mess hall change",
        // type: "timings"
    },
    {
        question: "I am facing issue of internet connectivity .So, I can’t study well on my Laptop. Thank you",
        answer: "We understand that you're facing network issues. If the problem persists, we suggest  heading to the library as their Wi-Fi system is strong and won't interfere with your studies.",
        // type: "academics"
    },
    {
        question: "No cleanliness inside the campus",
        answer: "It is an important initiative to improve the cleanliness of college campuses, and a number of steps can be taken which will lead towards positive change. Here are some practical suggestions, as a fellow student: Help to raise awareness: Talk to your fellow humans about the importance of cleanliness. To spread the message, you can take advantage of social media platforms such as Instagram or create informative posters.",
        // type: "administration"
    },
    {
        question: "	Open the gate towards law gate for student's usage as some students have to commute unnecessarily for kilometres to reach their blocks especially in summer and monsoon . The University denied us access to Law Gate This increases our spending on transport. And the trycircle (auto) is not comfortable and it's costly. They only give access to it on Friday. It has to be increased the working days. This will help us to reduce drudgery and financial issues. Secondly, the staff don't attend to us, especially the staff of international students section. We are not happy the way they treat us.",
        answer: "We understand your concern, and we want to clarify that this policy is a University-wide regulation. If you find that this issue is significantly impacting your academic work, we recommend forming a group with fellow students who are facing similar challenges. Together, you can consider submitting a formal report to the University's administration office to address and potentially resolve the problem.",
        // type: "administration"
    }
];

const mainElement = document.getElementById("main");

const ulElement = mainElement.querySelector("ol");




Data.forEach(item => {
    const liElement = document.createElement("li");
    const questionElement = document.createElement("strong");
    questionElement.textContent = item.question;
    const answerElement = document.createElement("p");
    answerElement.textContent = item.answer;
    liElement.appendChild(questionElement);
    liElement.appendChild(answerElement);
    ulElement.appendChild(liElement);
}) ;