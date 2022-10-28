// this function used to creat th countUp  animation for business websites
// use the three parameters to customize it 
// call it for every element
// note that may be small diffrance in the count 100 be 99 so chack it 
function numCounter(tagId,maxCount,speed){
    var initialNumber = 0;
    function counter(){
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
    }
    var counterDelay = setInterval(counter,speed);
    function totalTime(){
        clearInterval(counterDelay);
    }
    var totalPeriod = speed * (maxCount);  
    setTimeout(totalTime, totalPeriod);
}

numCounter("Projects",4,500);

numCounter("Partners",6,500);