function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wAN24IOYQ/', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('.jpg.jfif')
    img1 = document.getElementById('dog.jpg')
    img2 = document.getElementById('elephant.jpg')
    img3 = document.getElementById('Sparrow')

    if (results[0].label == "Bird") {
      img.src = 'Sparrow.gif';
      img1.src = 'elephant.jpg';
      img2.src = '.jpg.jfif';
      img3.src = 'dog.jpg';
    } else if (results[0].label == "elephant") {
      img.src = 'Sparrow.jpg';
      img1.src = 'elephant.gif';
      img2.src = '.jpg.jfif';
      img3.src = 'dog.jpg';
    } else if (results[0].label == "cat") {
        img.src = 'Sparrow.jpg';
        img1.src = 'elephant.jpg';
        img2.src = 'cat.gif';
        img3.src = 'dog.jpg';

      
    }else{
        img.src = 'Sparrow.jpg';
        img1.src = 'elephant.jpg';
        img2.src = '.jpg.jfif';
        img3.src = 'dog.gif';
    }
  }
}