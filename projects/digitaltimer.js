function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = dateTime.getElementById('session');
     if(hrs >=12){
        session.innerHtml = 'PM';
     }else{
        session.innerHtml = 'AM';
     }
     if(hrs > 12){
        hrs = hrs-12;
     }
     document.getElementById('hours').innerHtml = hrs;
     document.getElementById('mintues').innerHtml = min;
     document.getElementById('seconds').innerHtml = sec;

  setInterval()   
}