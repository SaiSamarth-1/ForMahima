  // Classifier Variable
  let classifier;
  // Model URL
  let imageModelURL = 'https://teachablemachine.withgoogle.com/models/SAezrpAMY/';
  
  // Video
  let video;
  let flippedVideo;
  // To store the classification
  let label = "";
  var isMahima;

  // Load the model first
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  }

  function setup() {
    createCanvas(640, 520);
    // Create the video
    video = createCapture(VIDEO);
    video.size(640, 520);
    video.hide();

    flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();
  }

  function draw() {
    background(0);
    // Draw the video
    image(flippedVideo, 0, 0);
    if(label=="Mahima")
    {
     isMahima = true;
    }
    if(isMahima==true){
    video = null;
    fill("#5c0613");
    textSize(30);
    textAlign(CENTER);
    text(`Mahima, you are one of the 
          most confident, stylish, nicest, 
          coolest and one of the most helpful 
          people i know. You have been incredibly 
          supportive and also one of the people 
          who have done their best to keep standing, 
          energy-full and happy. Things in life are 
          gonna be hard but they'll definetly work out. 
          our lives are going forward at this 
          point and its a good thing! i hope your 
          life goes forward towards success, and i 
          wish you a very happy birthday, my dear sister.`, width / 2 - 30, height / 2 - 170);
    }

    // Draw the label
    

  }

  // Get a prediction for the current video frame
  function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();

  }

  // When we get a result
  function gotResult(error, results) {
    // If there is an error
    if (error) {
      console.error(error);
      return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
  }
