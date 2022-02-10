// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt="";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if Number is Valid
    if (isNaN(num) || num.toString().length == 0 || num<0 || num>1000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 0 and 1000.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Zeckendorf Number Representation of ${num} is ${zeckendorf(num)}`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Function to Get the Zeckendorf Number Representation
function zeckendorf(n) {
    if (n==0) return n.toString();
    let fib = [2,1];
    while (fib[0]<n) {
        fib.unshift(fib[0]+fib[1]);
    }
    let dig = [];
    fib.forEach(function(f) {
        if (f<=n) {
            dig = dig + [1];
            n = n - f;
        } else {
            dig += [0];
        }
    });

    // If the first digit is 1 return all the digits, otherwise remove the zero
    return dig[0]==1 ? dig : dig.slice(1);
}