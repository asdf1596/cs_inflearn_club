function myFunction(number) {
    if (number > 10) return;
    console.log(number);
    myFunction(number);
}

myFunction(1);
