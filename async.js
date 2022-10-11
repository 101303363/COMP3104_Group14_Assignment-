async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 5000)
  });

  let result = await promise; 

  console.log(result); 
}

f();