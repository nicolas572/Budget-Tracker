let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
//weeklyExpenseQuestions = array
for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
    let stringAnswer = window.prompt(weeklyExpenseQuestions[i])
    console.log("stringAnswer", stringAnswer)
    let numberAnswer = parseFloat(stringAnswer)
    console.log("numberAnswer", numberAnswer)
    weeklyExpenses = weeklyExpenses + numberAnswer
    console.log("weeklyExpenses", weeklyExpenses)
}

//monthlyExpenseQuestions = array
for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
    let stringAnswer = window.prompt(monthlyExpenseQuestions[i])
    console.log("stringAnswer", stringAnswer)
    let numberAnswer = parseFloat(stringAnswer)
    console.log("numberAnswer", numberAnswer)
    monthlyExpenses = monthlyExpenses + numberAnswer
    console.log("monthly", monthlyExpenses)
}

//annualExpenseQuestions = array
for (let i = 0; i < annualExpenseQuestions.length; i++) {
    let stringAnswer = window.prompt(annualExpenseQuestions[i])
    console.log("stringAnswer", stringAnswer)
    let numberAnswer = parseFloat(stringAnswer)
    console.log("numberAnswer", numberAnswer)
    annualExpenses = annualExpenses + numberAnswer
    console.log("annual", annualExpenses)
}