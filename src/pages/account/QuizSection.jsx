import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  Clock,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  AlertCircle,
  Home,
} from "lucide-react";

export default function QuizSection() {
  const [currentStep, setCurrentStep] = useState("intro"); // intro, quiz, results
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes in seconds
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Example quiz data - in a real app, you'd fetch this from your backend
  const quiz = {
    title: "JavaScript Fundamentals",
    description: "Test your knowledge of JavaScript basics with this quiz.",
    timeLimit: 300, // seconds
    questions: [
      {
        id: 1,
        question: "Which of the following is not a JavaScript data type?",
        options: [
          { id: "a", text: "String" },
          { id: "b", text: "Float" },
          { id: "c", text: "Boolean" },
          { id: "d", text: "Undefined" },
        ],
        correctAnswer: "b",
      },
      {
        id: 2,
        question: "What does DOM stand for?",
        options: [
          { id: "a", text: "Document Object Model" },
          { id: "b", text: "Digital Ordinance Model" },
          { id: "c", text: "Data Object Management" },
          { id: "d", text: "Document Oriented Middleware" },
        ],
        correctAnswer: "a",
      },
      {
        id: 3,
        question: "Which method adds an element to the end of an array?",
        options: [
          { id: "a", text: "shift()" },
          { id: "b", text: "unshift()" },
          { id: "c", text: "push()" },
          { id: "d", text: "pop()" },
        ],
        correctAnswer: "c",
      },
      {
        id: 4,
        question: "What is the correct way to declare a JavaScript variable?",
        options: [
          { id: "a", text: "variable name = value;" },
          { id: "b", text: "var name = value;" },
          { id: "c", text: "v name = value;" },
          { id: "d", text: "int name = value;" },
        ],
        correctAnswer: "b",
      },
      {
        id: 5,
        question: "Which operator is used for strict equality comparison?",
        options: [
          { id: "a", text: "==" },
          { id: "b", text: "===" },
          { id: "c", text: "=" },
          { id: "d", text: "!==" },
        ],
        correctAnswer: "b",
      },
    ],
  };

  // Timer effect
  useEffect(() => {
    if (currentStep !== "quiz" || quizCompleted) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setQuizCompleted(true);
          setCurrentStep("results");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentStep, quizCompleted]);

  // Format time as mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Calculate the quiz results
  const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    quiz.questions.forEach((question) => {
      if (!selectedAnswers[question.id]) {
        unanswered++;
      } else if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const score = Math.round((correct / quiz.questions.length) * 100);

    return {
      totalQuestions: quiz.questions.length,
      correct,
      incorrect,
      unanswered,
      score,
    };
  };

  const handleAnswerSelect = (questionId, optionId) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    setQuizCompleted(true);
    setCurrentStep("results");
  };

  const handleStartQuiz = () => {
    setCurrentStep("quiz");
    setTimeRemaining(quiz.timeLimit);
    setSelectedAnswers({});
    setCurrentQuestion(0);
    setQuizCompleted(false);
  };

  const handleRetakeQuiz = () => {
    setCurrentStep("intro");
  };

  // Intro screen
  if (currentStep === "intro") {
    return (
      <div className="max-w-4xl p-6 mx-auto mt-5 bg-white rounded-lg shadow-lg h-fit">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">{quiz.title}</h1>
          <p className="mt-2 text-gray-600">{quiz.description}</p>
        </div>

        <div className="p-6 mb-6 rounded-lg bg-blue-50">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Quiz Instructions
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <Clock className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
              <span>Time Limit: {Math.floor(quiz.timeLimit / 60)} minutes</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
              <span>Total Questions: {quiz.questions.length}</span>
            </li>
            <li className="flex items-start">
              <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
              <span>
                You can navigate between questions and review your answers
                before submitting.
              </span>
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleStartQuiz}
            className="flex items-center justify-center px-6 py-3 font-medium text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <span>Start Quiz</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    );
  }

  // Quiz interface
  if (currentStep === "quiz") {
    const question = quiz.questions[currentQuestion];

    return (
      <div className="max-w-4xl p-6 mx-auto mt-5 bg-white rounded-lg ">
        {/* Quiz header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-800 md:text-2xl">
            {quiz.title}
          </h1>
          <div className="flex items-center px-4 py-2 bg-gray-100 rounded-lg">
            <Clock className="w-5 h-5 mr-2 text-gray-600" />
            <span className="font-medium text-gray-800">
              {formatTime(timeRemaining)}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{
              width: `${
                ((currentQuestion + 1) / quiz.questions.length) * 100
              }%`,
            }}
          ></div>
        </div>

        {/* Question card */}
        <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </span>
            {selectedAnswers[question.id] && (
              <span className="flex items-center text-sm font-medium text-green-600">
                <CheckCircle className="w-4 h-4 mr-1" />
                Answered
              </span>
            )}
          </div>

          <h2 className="mb-6 text-lg font-medium text-gray-800">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option) => (
              <div
                key={option.id}
                onClick={() => handleAnswerSelect(question.id, option.id)}
                className={`p-4 rounded-lg border cursor-pointer transition duration-200 ${
                  selectedAnswers[question.id] === option.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`h-5 w-5 rounded-full mr-3 flex items-center justify-center border ${
                      selectedAnswers[question.id] === option.id
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedAnswers[question.id] === option.id && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span
                    className={`${
                      selectedAnswers[question.id] === option.id
                        ? "text-gray-900"
                        : "text-gray-700"
                    }`}
                  >
                    {option.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevQuestion}
            disabled={currentQuestion === 0}
            className={`px-4 py-2 flex items-center rounded-lg ${
              currentQuestion === 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Previous
          </button>

          <div className="flex space-x-2">
            {quiz.questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
                  currentQuestion === index
                    ? "bg-blue-600 text-white"
                    : selectedAnswers[quiz.questions[index].id]
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {currentQuestion === quiz.questions.length - 1 ? (
            <button
              onClick={handleSubmitQuiz}
              className="flex items-center px-4 py-2 font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              Submit Quiz
              <CheckCircle className="w-5 h-5 ml-2" />
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="flex items-center px-4 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Results screen
  if (currentStep === "results") {
    const results = calculateResults();

    return (
      <div className="max-w-4xl p-6 mx-auto mt-5 bg-white rounded-lg shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Quiz Results</h1>
          <p className="mt-2 text-gray-600">{quiz.title}</p>
        </div>

        {/* Score overview */}
        <div className="p-6 mb-8 rounded-lg bg-blue-50">
          <div className="flex flex-col items-center justify-center mb-6 md:flex-row">
            <div className="relative w-32 h-32 mb-4 md:mb-0 md:mr-8">
              <div className="flex items-center justify-center w-full h-full bg-blue-100 rounded-full">
                <span className="text-4xl font-bold text-blue-600">
                  {results.score}%
                </span>
              </div>
              {results.score >= 70 ? (
                <CheckCircle className="absolute w-8 h-8 text-green-500 bg-white rounded-full -top-2 -right-2" />
              ) : (
                <XCircle className="absolute w-8 h-8 text-red-500 bg-white rounded-full -top-2 -right-2" />
              )}
            </div>

            <div className="grid w-full max-w-md grid-cols-1 gap-4 md:grid-cols-3">
              <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-1 text-green-600">
                  <CheckCircle className="w-5 h-5 mr-1" />
                  <span className="font-semibold">Correct</span>
                </div>
                <p className="text-3xl font-bold text-gray-800">
                  {results.correct}
                </p>
              </div>

              <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-1 text-red-600">
                  <XCircle className="w-5 h-5 mr-1" />
                  <span className="font-semibold">Incorrect</span>
                </div>
                <p className="text-3xl font-bold text-gray-800">
                  {results.incorrect}
                </p>
              </div>

              <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-1 text-gray-600">
                  <AlertCircle className="w-5 h-5 mr-1" />
                  <span className="font-semibold">Unanswered</span>
                </div>
                <p className="text-3xl font-bold text-gray-800">
                  {results.unanswered}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            {results.score >= 70 ? (
              <p className="text-lg font-medium text-green-600">
                Congratulations! You have passed the quiz.
              </p>
            ) : (
              <p className="text-lg font-medium text-red-600">
                You did not pass this time. Keep learning and try again!
              </p>
            )}
          </div>
        </div>

        {/* Question review */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Question Review
          </h2>
          <div className="space-y-4">
            {quiz.questions.map((question, index) => {
              const userAnswer = selectedAnswers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              const correctOption = question.options.find(
                (opt) => opt.id === question.correctAnswer
              );

              return (
                <div key={question.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-gray-800">
                      Q{index + 1}: {question.question}
                    </h3>
                    {userAnswer ? (
                      isCorrect ? (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Correct
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                          <XCircle className="w-3 h-3 mr-1" />
                          Incorrect
                        </span>
                      )
                    ) : (
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Unanswered
                      </span>
                    )}
                  </div>

                  {userAnswer && !isCorrect && (
                    <div className="mb-2 text-sm">
                      <p className="text-red-600">
                        Your answer:{" "}
                        {
                          question.options.find((opt) => opt.id === userAnswer)
                            ?.text
                        }
                      </p>
                      <p className="text-green-600">
                        Correct answer: {correctOption?.text}
                      </p>
                    </div>
                  )}

                  {userAnswer && isCorrect && (
                    <div className="mb-2 text-sm">
                      <p className="text-green-600">
                        Your answer: {correctOption?.text} ✓
                      </p>
                    </div>
                  )}

                  {!userAnswer && (
                    <div className="mb-2 text-sm">
                      <p className="text-gray-600">
                        You did not answer this question.
                      </p>
                      <p className="text-green-600">
                        Correct answer: {correctOption?.text}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleRetakeQuiz}
            className="flex items-center justify-center px-6 py-3 font-medium text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <span>Retake Quiz</span>
          </button>
          <button
            onClick={() => (window.location.href = "/dashboard")}
            className="flex items-center justify-center px-6 py-3 font-medium text-gray-800 transition duration-200 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <Home className="w-5 h-5 mr-2" />
            <span>Back to Dashboard</span>
          </button>
        </div>
      </div>
    );
  }

  return null;
}
