function circleAreaPerimeter() {
    const PI = Math.PI;
    const readLineYo = readLine();
    console.log("readLineYo=", readLineYo);
    const readLineYoPlus = +readLineYo;
    console.log("readLineYoPlus=", readLineYoPlus);

    // Check if valid radius before proceed:
    if (readLineYoPlus>0 && readLineYoPlus<=100) {
        const radius = readLineYoPlus.toFixed(3);
        console.log("radius=", radius);
        let area = PI * Math.pow(radius, 2);
        console.log("area=", area);
        let perimeter = 2 * PI * radius;
        console.log("perimeter=", perimeter);
    }
}