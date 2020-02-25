const ransomNote = (note, magazine) => {
    console.log("note = ", note);
    console.log("magazine = ", magazine);
    const magazineWords = magazine.split(" ");
    console.log("magazineWords = ", magazineWords);
    const magazineHash = {};

    magazineWords.forEach(word => {
        console.log("word = ", word);
        console.log("magazineHash["+word+"] = ", magazineHash[word]);
        if (!magazineHash[word]) { magazineHash[word] = 0; }
        magazineHash[word]++;
        console.log("magazineHash["+word+"] = ", magazineHash[word]);
    });

    const noteWords = note.split(" ");
    console.log("noteWords = ", noteWords);
    let possible = true;

    noteWords.forEach(word => {
        console.log("word = ", word);
        console.log("magazineHash["+word+"] = ", magazineHash[word]);
        if (magazineHash[word]) {
            magazineHash[word]--;
            console.log("magazineHash["+word+"] = ", magazineHash[word]);
            if (magazineHash[word] < 0) { 
                possible = false;
                console.log("possible = ", possible);
                return possible;
            }
        } else { 
            possible = false;
            console.log("possible = ", possible);
            return possible;
        }
    });

    return possible;
};

const magazine =
    "Here are some magazine words so you can cut out words for your ransom note dude";

const note =
    "Here is my ransom note";

console.log("ransomNote(note, magazine) = ", ransomNote(note, magazine));