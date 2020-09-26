var backgroundImage;
var heads;

var dx;

var ratio;

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  backgroundImage = loadImage("assets/background.png");
  heads = loadImage("assets/heads.png");
  imageMode(CENTER);

  ratio = 2047/1535;
}


function draw(){
  background(0);

  if(isMobile()){
    dx = rotationY;

    if(dx>0.034*width)dx=0.034*width;
    else if(dx<-0.034*width)dx=-0.034*width;
    image(backgroundImage,width/2,height/2,width,width/ratio);
    image(heads,width/2+dx,height/2,width,width/ratio);
  }
  else{
    dx = mouseX-width/2;

    if(dx>0.034*width)dx=0.034*width;
    else if(dx<-0.034*width)dx=-0.034*width;
    image(backgroundImage,width/2,height/2,width,width/ratio);
    image(heads,width/2+dx,height/2,width,width/ratio);
  }

}

function isMobile(){

	var UserAgent = navigator.userAgent;



	if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)

	{

		return true;

	}else{

		return false;

	}

}
