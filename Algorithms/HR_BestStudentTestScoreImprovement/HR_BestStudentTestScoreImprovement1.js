// students = ordered array of students, e.g. ['Mary', 'Steve', 'Steve', 'Mary', 'Steve']
// scores = ordered array of their corresponding scores, e.g. [19, 70, 99, 80, 100]
function calculateMostImprovement(students, scores) {
    console.log("students = ", students);
    console.log("scores = ", scores);
    let studentScoresObject = {};
    let OverallMaxImprovement = 0;
    for (let i = 0; i < students.length; i++) {
        console.log("");
        console.log("i = ", i);
        // console.log("studentScoresObject = ", studentScoresObject);
        // if (!studentScoresObject[students[i]] || scores[i] < studentScoresObject[students[i].CurrentLowBase]) { //Bad syntax
        // if (!studentScoresObject[students[i]] || scores[i] < studentScoresObject[students[i]].CurrentLowBase) {
        if (!studentScoresObject[students[i]]) {
            console.log("Add new student to studentScoresObject");    
            studentScoresObject[students[i]] = { "CurrentLowBase": scores[i], "MaxImprovement": 0 };
            // console.log("studentScoresObject[" + students[i] + ".CurrentLowBase] = ", studentScoresObject[students[i].CurrentLowBase])
            console.log("if: studentScoresObject = ", studentScoresObject);
            console.log("if: studentScoresObject[students[i]] = ", studentScoresObject[students[i]]);
            console.log("if: studentScoresObject[students[i].CurrentLowBase]) = ", studentScoresObject[students[i].CurrentLowBase]); //BadSyntax
            console.log("if: studentScoresObject[students[i]].CurrentLowBase) = ", studentScoresObject[students[i]].CurrentLowBase); //GoodSyntax
        // } else if (!studentScoresObject[students[i].MaxImprovement] || (scores[i] < studentScoresObject[students[i].CurrentLowBase])) {
        } else if (scores[i] < studentScoresObject[students[i]].CurrentLowBase) {
            console.log("Found a lower CurrentLowBase for student = ", students[i]);
            studentScoresObject[students[i]].CurrentLowBase = scores[i]
            console.log("else if1: studentScoresObject = ", studentScoresObject);
            console.log("else if1: studentScoresObject[students[i]].CurrentLowBase) = ", studentScoresObject[students[i]].CurrentLowBase);
        } else if (scores[i] - studentScoresObject[students[i]].CurrentLowBase > studentScoresObject[students[i]].MaxImprovement) {
            console.log("Found a higher MaxImprovement for student = ", students[i]);
            // studentScoresObject[students[i].MaxImprovement] = scores[i] - studentScoresObject[students[i].CurrentLowBase];
            studentScoresObject[students[i]].MaxImprovement = scores[i] - studentScoresObject[students[i]].CurrentLowBase;
            // console.log("studentScoresObject[" + students[i] + ".MaxImprovement] = ", studentScoresObject[students[i].MaxImprovement])
            console.log("else if2: studentScoresObject = ", studentScoresObject);
            console.log("else if2: studentScoresObject[students[i]].MaxImprovement) = ", studentScoresObject[students[i]].MaxImprovement);
            if (studentScoresObject[students[i]].MaxImprovement > OverallMaxImprovement) {
                OverallMaxImprovement = studentScoresObject[students[i]].MaxImprovement
                console.log("OverallMaxImprovement = ", OverallMaxImprovement);
            }
        };
    };
    console.log("studentScoresObject = ", studentScoresObject);
    return OverallMaxImprovement;
};
console.log("calculateMostImprovement(['Mary', 'Steve', 'Steve', 'Mary', 'Steve'],[19, 70, 99, 80, 100]) = ", calculateMostImprovement(['Mary', 'Steve', 'Steve', 'Mary', 'Steve'],[19, 70, 99, 80, 100]))
console.log("calculateMostImprovement(['Mary', 'Steve', 'Mary', 'Steve', 'Mary', 'Steve', 'Mary', 'Steve', 'Mary', 'Steve'],[89, 70, 87, 72, 85, 74, 83, 60, 81, 65]) = ", calculateMostImprovement(['Mary', 'Steve', 'Mary', 'Steve', 'Mary', 'Steve', 'Mary', 'Steve', 'Mary', 'Steve'],[89, 70, 87, 72, 85, 74, 83, 60, 81, 65]))