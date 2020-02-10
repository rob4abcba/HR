// Complete the sockMerchant function below.
function sockMerchant(ar) {
    console.log(" ")
    console.log("Inside my function sockMerchant Yo");
    const socks1 = {};
    const socks2 = {};

    for (let sock of ar) {
        console.log("Inside 1st loop: for let sock of ar");
        console.log("sock = ", sock);
        socks1[sock] = socks1[sock] + 1 || 1;
        console.log("socks1[sock] = ", socks1[sock]);
    }

    ar.forEach(myFunction); 
    function myFunction(sock, index) { 
        console.log("Inside 2nd loop: ar.forEach(myFunction)");
        console.log("sock = ", sock); 
        socks2[sock] = socks2[sock] + 1 || 1;
        console.log("socks2[sock] = ", socks2[sock]);
    }

    let pairs1 = 0;
    let pairs2 = 0;
    
    for (let sock in socks1) {
        console.log("Inside 3rd loop: for let sock in socks1");
        console.log("sock = ", sock);
        console.log("socks1[sock] = ", socks1[sock]);
        console.log("socks1[sock]/2 = ", socks1[sock]/2);
        console.log("Math.trunc(socks1[sock]/2) = ", Math.trunc(socks1[sock]/2));
        pairs1 = pairs1 + Math.trunc(socks1[sock]/2);
        console.log("pairs1 = ", pairs1);
    }

    for (let sock in socks2) {
        console.log("Inside 4th loop: for let sock in socks2");
        console.log("sock = ", sock);
        console.log("socks2[sock] = ", socks2[sock]);
        console.log("socks2[sock]/2 = ", socks2[sock]/2);
        console.log("Math.trunc(socks2[sock]/2) = ", Math.trunc(socks2[sock]/2));
        pairs2 = pairs2 + Math.trunc(socks2[sock]/2);
        console.log("pairs2 = ", pairs2);
    }

    console.log("Compare method1 vs. method2")
    console.log("pairs1 = ", pairs1);
    console.log("pairs2 = ", pairs2);
    console.log(" ")

    return pairs1;
}

console.log("sockMerchant([10, 20, 20]) = ", sockMerchant([10, 20, 20]) )
console.log("sockMerchant([10, 20, 10, 20]) = ", sockMerchant([10, 20, 10, 20]) )