function draw() {
    var triangule = document.querySelector("#triangule");
    var trianguleContext = triangule.getContext("2d");

    //  triangle
    trianguleContext.beginPath();
    trianguleContext.moveTo(190, 70);
    trianguleContext.lineTo(80, 300);
    trianguleContext.lineTo(300, 300);
    trianguleContext.closePath();

    //  outline
    trianguleContext.lineWidth = 10;
    trianguleContext.strokeStyle = '#666666';
    trianguleContext.stroke();

    //  fill color
    trianguleContext.fillStyle = "#FFCC00";
    trianguleContext.fill();

    var circle = document.getElementById('circle');
    var circleContext = circle.getContext('2d');
    var centerX = circle.width / 2;
    var centerY = circle.height / 2;
    var radius = 100;

    //circle
    circleContext.beginPath();
    circleContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    circleContext.fillStyle = '#FFCC00';
    circleContext.fill();
    circleContext.lineWidth = 5;
    circleContext.strokeStyle = '#666666';
    circleContext.stroke();

    var square = document.getElementById('square');
    var squareContext = square.getContext('2d');
    squareContext.fillStyle = '#FFCC00';
    var w = 400;
    var h = 400;
    setInterval(animate, 50);
    var r = 0;
    function animate() {
        squareContext.clearRect(0, 0, w, h);
        squareContext.save();
        squareContext.translate(200, 200);
        squareContext.rotate(r);
        squareContext.fillRect(0, 0, 130, 130);
        squareContext.restore();
        r += 0.1;
    }
}
draw();
