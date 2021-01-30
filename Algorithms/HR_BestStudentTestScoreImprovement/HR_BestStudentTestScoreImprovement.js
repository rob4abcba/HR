// students = ['Mary', 'Steve', 'Steve', 'Mary', 'Steve']
// scores = [19, 70, 99, 80, 100]
function calculateMostImprovement(students, scores) {
    console.log("students = ", students);
    console.log("scores = ", scores);
    let studentScoresObject = {};
    for (let i = 0; i < students.length; i++) {
        if (!studentScoresObject[students[i].base] || scores[i] < studentScoresObject[students[i].base]) {
            studentScoresObject[students[i].base] = scores[i];
            console.log("studentScoresObject[" + students[i] + ".base] = ", studentScoresObject[students[i].base])
        } else if (!studentScoresObject[students[i].improvement] || (scores[i] < studentScoresObject[students[i].base]) {
            studentScoresObject[students[i].improvement] = scores[i] - studentScoresObject[students[i].base];
            console.log("studentScoresObject[" + students[i] + ".improvement] = ", studentScoresObject[students[i].improvement])

        } else {

        };
        
    };
    console.log("studentScoresObject = ", studentScoresObject);



};
console.log("calculateMostImprovement(['Mary', 'Steve', 'Steve', 'Mary', 'Steve'],[19, 70, 99, 80, 100]) = ", calculateMostImprovement(['Mary', 'Steve', 'Steve', 'Mary', 'Steve'],[19, 70, 99, 80, 100]))