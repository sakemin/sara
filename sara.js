var backgroundImage;
var heads;

var dx;

var ratio;
var thresh;

let permissionGranted = false;

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  backgroundImage = loadImage("assets/background.png");
  heads = loadImage("assets/heads.png");
  imageMode(CENTER);
  angleMode(DEGREES);
  ratio = 4/3;
  thresh=0.017;

  if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function'){
    //ios 13 device
    DeviceOrientationEvent.requestPermission()
      .catch(() => {
        let button = createButton("YAS QUEEEN");
        button.style("font-size", "24px");
        button.center();
        button.mousePressed(requestAccess);
        throw error;
      })
      .then(() => {
        permissionGranted=true;
      })
  }else{
    //non ios13
    permissionGranted=true;
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

function requestAccess(){
  DeviceOrientationEvent.requestPermission()
  .then(response => {
    if(response == 'granted'){
      permissionGranted = true;
    }
    else{
      permissionGranted = false;
    }
  })
  .catch(console.error);

  this.remove();
}


function draw(){
  background(0);

  // if(isMobile()){
    if (!permissionGranted) return;
    dx = rotationY;

    if(dx>thresh*width)dx=thresh*width;
    else if(dx<-thresh*width)dx=-thresh*width;
    image(backgroundImage,width/2,height/2,height/ratio,height);
    image(heads,width/2+dx,height/2,height/ratio,height);
  // }
  // else{
  //   dx = mouseX-width/2;
  //
  //   if(dx>thresh*width)dx=thresh*width;
  //   else if(dx<-thresh*width)dx=-thresh*width;
  //   image(backgroundImage,width/2,height/2,height/ratio,height);
  //   image(heads,width/2+dx,height/2,height/ratio,height);
  // }

  text(rotationY,width/2,height/2);
}
