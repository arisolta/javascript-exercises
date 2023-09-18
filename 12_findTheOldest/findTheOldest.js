const findTheOldest = function(arr) {
    return arr.reduce ((oldest, current) => {
        const oldestPers = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentPers = getAge(current.yearOfBirth, current.yearOfDeath);

        return oldestPers > currentPers ? oldest : current;
    });
};
const getAge = (birth, death) => {
    if (!death){
        death = new Date().getFullYear();
    }
    return death - birth
}


// Do not edit below this line
module.exports = findTheOldest;

 const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]