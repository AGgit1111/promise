// This function returns a promise that will resolve after a 2-second delay
// if passed in value is true, and wil reject otherwise.
function myAsyncOperation(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve('Operation completed succesfully'); // 'resolve' will be caught by '.then' below if successful.
            } else {
                reject('Operation failed'); // 'reject' will be caught by '.catch' if not successful.
            }
        }, 2000); // 2-second delay
    })
}

//Using the promise:
myAsyncOperation(true) // Here, we're using a simple boolean operation for 
    .then((result) => {
        console.log(result); // Logs "Operation completed successfully" after 2 seconds if success is true.
    })
    .catch((error) => {
        console.log(error); // Logs "Operation failed" after 2 seconds if success is false.
    })