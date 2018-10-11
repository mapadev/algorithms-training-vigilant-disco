function harmlessRansomNote(noteText, magazineText) {
    const noteArr = noteText.split(" ");
    const magazineArr = magazineText.split(" ");
    const magazineObj = {};

    magazineArr.forEach(word => {
        if (!magazineObj[word]) {
            magazineObj[word] = 0;
        }

        magazineObj[word]++;
    });

    let noteIsPossible = true;

    noteArr.forEach(word => {
        if (!magazineObj[word]) {
            noteIsPossible = false;
            return;
        } else {
            magazineObj[word]--;

            if (magazineObj[word] < 0) {
                noteIsPossible = false;
                return;
            }
        }
    });

    return noteIsPossible;
}

console.log(
    harmlessRansomNote("test", "this is some test to test if function works")
);

module.exports = harmlessRansomNote;
