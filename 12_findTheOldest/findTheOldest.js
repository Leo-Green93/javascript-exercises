const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestPerson = yearsOld(oldest.yearOfBirth, oldest.yearOfDeath)
        const currentPersonAge = yearsOld(
            currentPerson.yearOfBirth, 
            currentPerson.yearOfDeath
        );
        return oldestPerson < currentPersonAge ? currentPerson : oldest;
     });
    }

    const yearsOld = function(yearOfBirth, yearOfDeath) {
        if (!yearOfDeath) {
            yearOfDeath = new Date().getFullYear();
        } 
        return yearOfDeath - yearOfBirth;
    };

// Do not edit below this line
module.exports = findTheOldest;
