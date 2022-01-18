Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quatily: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("Result").innerHTML = '<img id="capture_img" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
function modelLoaded() {
    console.log('modelLoaded');
}

function check() {
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error)
    {
        console.log(error);
    } else 
    {
        console.log(results);
        document.getElementById("Resut_object_name").innerHTML = results[0].label;
        document.getElementById("Result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}

