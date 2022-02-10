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
        txt += `${zeckendorf(num)}`
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}