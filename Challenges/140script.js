let employees =  [
    {
        name: 'John',
        yearsOfExperience: 5
    },
    {
        name: 'Susan',
        yearsOfExperience: 2
    },
    {
        name: 'Brock',
        yearsOfExperience: 3
    }
]


function getExp(employe) {
    let totalYears = 0;

  
    for (let i = 0; i < employe.length; i++) {
      totalYears += employe[i].yearsOfExperience;
    }
  
    return totalYears;
  }

  console.log(getExp(employees));