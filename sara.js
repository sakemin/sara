var backgroundImage;
var heads;

var dx;

var ratio;
var thresh;

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  backgroundImage = loadImage("assets/background.png");
  heads = loadImage("assets/heads.png");
  imageMode(CENTER);

  ratio = 4032/3024;
  thresh=0.017;
}


function draw(){
  background(0);

  if(isMobile()){
    dx = rotationY;

    if(dx>thresh*width)dx=thresh*width;
    else if(dx<-thresh*width)dx=-thresh*width;
    image(backgroundImage,width/2,height/2,height/ratio,height);
    image(heads,width/2+dx,height/2,height/ratio,height);
  }
  else{
    dx = mouseX-width/2;

    if(dx>thresh*width)dx=thresh*width;
    else if(dx<-thresh*width)dx=-thresh*width;
    image(backgroundImage,width/2,height/2,height/ratio,height);
    image(heads,width/2+dx,height/2,height/ratio,height);
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
