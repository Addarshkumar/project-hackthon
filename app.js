var list = [
    {
        question: "Who are you",
        answer: "I am Adarsh"
    },
    {
        question: "What is your college name",
        answer: "Lovely Professional University"
    },
    {
        question: "What is your college name",
        answer: "Lovely Professional University"
    }


];


var questionsElement = document.getElementById("questions");

list.forEach(function (item) {
    var listItem = document.createElement("li");
    var questionText = document.createElement("strong");
    questionText.textContent = "Q: " + item.question;
    var answerText = document.createElement("p");
    answerText.textContent = "Answer: " + item.answer;

    listItem.appendChild(questionText);
    listItem.appendChild(answerText);

    questionsElement.appendChild(listItem);
});