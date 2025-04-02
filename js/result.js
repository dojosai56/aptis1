const questionContainer = $("#questions-container");
const questions = JSON.parse(localStorage.getItem("questions"));
const userAnswers = JSON.parse(localStorage.getItem("userAnswers"));
const totalScore = localStorage.getItem("totalScore");
const incorrectAnswers = JSON.parse(localStorage.getItem("incorrectAnswers"));
const showFullResult = localStorage.getItem("showFullResult");

// for displaying the user's total score
const totalScoreText = $("<h2>").text(
  `Score: ${totalScore}  /  ${questions.length}`
);
questionContainer.append(totalScoreText);

// function for displaying the question's data(question type, image, correct answer)
function generateQuestionData(q, questionIndex) {
  // for displaying the question
  questionIndex += 1;
  // displays the question number
  const qNumber = $("<p>").text(`Question ${questionIndex}`);
  qNumber.css({
    "font-size": "20px",
    "font-weight": "bold",
    margin: "15px 0px 0px",
  });
  questionContainer.append(qNumber);

  // to display the type of question
  const qText = $("<p>").text(q.question);
  qText.css({
    "font-size": "20px",
    "font-weight": "bold",
    color: "brown",
    margin: "0px",
    padding: "0px",
  });
  questionContainer.append(qText);

  // to display the question image
  if (q.image) {
    const qImage = $("<img>").attr({
      src: q.image,
      alt: `Question Image${questionIndex}`,
    });
    // reducing the width of the images
    if (questionIndex == 4) {
      qImage.css({
        width: "40%",
      });
    } else if (questionIndex == 5) {
      qImage.css({
        width: "300px",
        height: "350px",
        "object-fit": "cover",
      });
    } else {
      qImage.css({
        width: "80%",
      });
    }
    questionContainer.append(qImage);
  }

  //   to display the correct answer
  // if (q.correctAnswer) {
  const qCorrectAns = $("<p>").text(
    "Correct answer:  " + q.choices[q.correctAnswer]
  );
  qCorrectAns.css({
    color: "green",
    "font-size": "26px",
    "font-weight": "bold",
  });
  questionContainer.append(qCorrectAns);
  // }

  // displays correct answer explanation
  if (q.explanation) {
    const qCorrectAnsExplanation = $("<p>").text(
      " Explanation:  " + q.explanation
    );
    qCorrectAnsExplanation.css({
      color: "green",
      "font-size": "23px",
      "font-weight": "bold",
    });
    questionContainer.append(qCorrectAnsExplanation);
  }
}

// Function to display user's answers
function generateUserAnswers(q, questionIndex) {
  questionIndex += 1;
  // since we passed the name of the radio choices, we'll use it to get the index then the text
  const userAnsIndex = userAnswers[`question-${questionIndex}`];
  const userAns = $("<p>").text(
    "Your Answer: You chose " + q.choices[userAnsIndex]
  );
  //   comparing the user's answer index to the correct answer index
  if (userAnsIndex == q.correctAnswer) {
    userAns.css({
      color: "green",
      "font-size": "20px",
      "font-weight": "bold",
    });
  } else {
    userAns.css({
      color: "red",
      "font-size": "20px",
      "font-weight": "bold",
    });
  }
  questionContainer.append(userAns);
}

// function for displaying the result content
function generateFullResult() {
  // We're looping through to display the questions info and user's answers
  questions.forEach((q, questionIndex) => {
    generateQuestionData(q, questionIndex);
    generateUserAnswers(q, questionIndex);
  });
}

// function for generating wrong answer result
function generateWrongAnsResult() {
  const incorrect = $("<h1>").text("Incorrect Answers");
  questionContainer.append(incorrect);

  incorrectAnswers.forEach((incorrectAnswer) => {
    const ansIndex = incorrectAnswer.questionIndex + 1;
    const qNum = $("<p>").text(`Question ${ansIndex}`);
    qNum.css({
      "font-size": "20px",
    });
    questionContainer.append(qNum);

    // to display the type of question
    const qText = $("<p>").text(incorrectAnswer.question);
    qText.css({
      "font-size": "20px",
      "font-weight": "bold",
      color: "brown",
      margin: "0px",
      padding: "0px",
    });
    questionContainer.append(qText);

    // displays image
    if (incorrectAnswer.image) {
      const qImage = $("<img>").attr({
        src: incorrectAnswer.image,
        alt: `Question Image${ansIndex}`,
      });
      // reducing the width of the images
      if (ansIndex == 4) {
        qImage.css({
          width: "40%",
        });
      } else if (ansIndex == 5) {
        qImage.css({
          width: "300px",
          height: "350px",
          "object-fit": "cover",
        });
      } else {
        qImage.css({
          width: "80%",
        });
      }
      questionContainer.append(qImage);
    }

    // displays correct answer
    const qCorrectAns = $("<p>").text(
      "Correct answer:  " + incorrectAnswer.correctAnswer
    );
    qCorrectAns.css({
      color: "green",
      "font-size": "26px",
      "font-weight": "bold",
    });
    questionContainer.append(qCorrectAns);

    // displays correct answer explanation
    if (incorrectAnswer.explanation) {
      const qCorrectAnsExplanation = $("<p>").text(
        " Explanation:  " + incorrectAnswer.explanation
      );
      qCorrectAnsExplanation.css({
        color: "green",
        "font-size": "23px",
        "font-weight": "bold",
      });
      questionContainer.append(qCorrectAnsExplanation);
    }

    // displays user's answer
    const userAns = $("<p>").text(
      "Your Answer: You chose " + incorrectAnswer.userAnswer
    );
    userAns.css({
      color: "red",
      "font-size": "20px",
      "font-weight": "bold",
    });
    questionContainer.append(userAns);
  });
}

// For deciding what will be displayed
if (showFullResult == "true") {
  generateFullResult();
} else {
  generateWrongAnsResult();
}

// For downloading the page in a pdf format
$("#download-pdf").on("click", () => {
    const contentBody = document.querySelector("body");    
    const opt = {
      margin: 1,
      filename: "results.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, scrollY: 0  },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    // New Promise-based usage:
    html2pdf().set(opt).from(contentBody).save();
  //  let pagePdf = html2pdf(contentBody, opt);
  //  console.log(pagePdf);
     console.log("Downloaded successfully!!");
});
