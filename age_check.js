
let age = "abc"

const inputValid = (age) => {
    return new Promise((res, rej) => {
        if (!isNaN(age)){
            res(age);
        }else{
            rej("invalid input");
        }
    });
};


inputValid(age).then((value) => { console.log(value)}).catch((error) =>
      console.log(error)
    );
