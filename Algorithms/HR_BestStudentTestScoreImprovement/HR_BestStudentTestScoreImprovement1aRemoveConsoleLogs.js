// students = ordered array of students, e.g. ['Mary', 'Steve', 'Steve', 'Mary', 'Steve']
// scores = ordered array of their corresponding scores, e.g. [19, 70, 99, 80, 100]
function calculateMostImprovement(students, scores) {
    let studentScoresObject = {};
    let OverallMaxImprovement = 0;
    for (let i = 0; i < students.length; i++) {
      if (!studentScoresObject[students[i]]) {  
            studentScoresObject[students[i]] = { "CurrentLowBase": scores[i], "MaxImprovement": 0 };
        } else if (scores[i] < studentScoresObject[students[i]].CurrentLowBase) {
            studentScoresObject[students[i]].CurrentLowBase = scores[i]
        } else if (scores[i] - studentScoresObject[students[i]].CurrentLowBase > studentScoresObject[students[i]].MaxImprovement) {
            studentScoresObject[students[i]].MaxImprovement = scores[i] - studentScoresObject[students[i]].CurrentLowBase;
            if (studentScoresObject[students[i]].MaxImprovement > OverallMaxImprovement) {
                OverallMaxImprovement = studentScoresObject[students[i]].MaxImprovement
            }
        };
    };
    return OverallMaxImprovement;
};
console.log("calculateMostImprovement(['Mary', 'Steve', 'Steve', 'Mary', 'Steve'],[19, 70, 99, 80, 100]) = ", calculateMostImprovement(['Mary', 'Steve', 'Steve', 'Mary', 'Steve'],[19, 70, 99, 80, 100]))
console.log("calculateMostImprovement(['Mary', 'Steve', 'Mary', 'Steve', 'Mary', 'Steve', 'Mary', 'Steve', 'Mary', 'Steve'],[89, 70, 87, 72, 85, 74, 83, 60, 81, 65]) = ", calculateMostImprovement(['Mary', 'Steve', 'Mary', 'Steve', 'Mary', 'Steve', 'Mary', 'Steve', 'Mary', 'Steve'],[89, 70, 87, 72, 85, 74, 83, 60, 81, 65]))