
// For clock To rotate as parallel to time.
setInterval(()=>{
    const currday = new Date();
    const sec = currday.getSeconds()/60;
    const min = (sec + currday.getMinutes())/60;
    const hour =(min+ currday.getHours())/12;
    // To rotate the hands of the clock
    document.getElementById("H").style.transform = "rotate("+hour*360+"deg)";
    document.getElementById("M").style.transform = "rotate("+min*360+"deg)";
    document.getElementById("S").style.transform = "rotate("+sec*360+"deg)";
},1000);

// set Alarm
// for Hours in time to set the set the hours from 0 - 23
var Hours = document.getElementById('box1');
for(i=0;i<24;i++){
    var span = document.createElement('span');
    span.textContent = i;
    Hours.appendChild(span);
}
var h = Hours.getElementsByTagName('span');
// initial Hour setting 
var hh=0;
function Down_H(){
    h[hh].style.display = 'none';
    hh = (hh+1)%h.length;
    h[hh].style.display = 'initial';
}
function Up_H(){
    h[hh].style.display = 'none';
    hh = (hh -1 + h.length)%h.length;
    h[hh].style.display = 'initial';
}

// for Minutes in time to set the minutes from 0 - 59
var Minutes = document.getElementById('box2');
for(i=0;i<60;i++){
    var span = document.createElement('span');
    span.textContent = i;
    Minutes.appendChild(span);
}
var m = Minutes.getElementsByTagName('span');
// initial Minutes setting 
var mm=0;
function Down_M(){
    m[mm].style.display = 'none';
    mm = (mm+1)%m.length;
    m[mm].style.display = 'initial';
}
function Up_M(){
    m[mm].style.display = 'none';
    mm = (mm -1 + m.length)%m.length;
    m[mm].style.display = 'initial';
}

//for Seconds in time to set the seconds from 0 - 59
var Seconds = document.getElementById('box3');
for(i=0;i<60;i++){
    var span = document.createElement('span');
    span.textContent = i;
    Seconds.appendChild(span);
}
var s = Seconds.getElementsByTagName('span');
// initial Seconds setting 
var ss=0;
function Down_S(){
    s[ss].style.display = 'none';
    ss = (ss+1)%s.length;
    s[ss].style.display = 'initial';
}
function Up_S(){
    s[ss].style.display = 'none';
    ss = (ss -1 + s.length)%s.length;
    s[ss].style.display = 'initial';
}

var list = document.getElementById("alarms");

function functionalityOfAlarm(){
//To create a list tag for alarms in a list
    var li = document.createElement("li");
//To set in a list
    lists(li);
// to Alert the when the time is for alarm
    setInterval(()=>{
        const currday = new Date();
        const sec = currday.getSeconds();
        const min = currday.getMinutes();
        const hour =currday.getHours();
        // console.log(hour+""+min+""+sec);
        var currtimee = hour+""+min+""+sec;
        for(var j=0;j<arrOfAlarms.length;j++){
            if(arrOfAlarms[j]== currtimee){
                var chngcolor = document.getElementsByTagName('li');
                for(var k=0;k<chngcolor.length;k++){
                    if(chngcolor[k].getAttribute('class') == listarr[j].getAttribute('class')){
                    chngcolor[k].style.color = 'Orange';
                    break;
                    }
                }
                alert('Its Time !!');
            }
        }
    },1000);
}

// For storing List of Alarms in an array
var arrOfAlarms =[];
var listarr=[];

// Creating Lists 
const lists = function(li){
    // t is taken as unique id to identify which icon we are clicking
    var t = new Date().valueOf();
    list.appendChild(li);
    li.innerHTML=hh+"  :  "+mm+"  :  "+ss;
    // To store in an array as to set an alarm.
    arrOfAlarms.push(hh+""+mm+""+ss);
    //As to delete the entire list ,i have added a class with unique number.
    li.classList.add("del-"+t);
    //To delete a alarm we need a delete icon so element is created.
    var icon = document.createElement("i");
    //Icon feature of a class is added.
    icon.setAttribute("class",'fas fa-minus-circle');
    //data-t is for unique value as to remove it from list.
    icon.setAttribute('data-t', t);
    deleteAlarm(icon);
    li.appendChild(icon);
    listarr.push(li);
}

//To delete an alarm
function deleteAlarm(tag){
    tag.onclick = ()=>{
        var str = tag.getAttribute('data-t');
        var str1 ="del-"+str;
        // console.log(str1);
        document.querySelector(".del-"+str).remove();
        // console.log(listarr.length);
        for(var i=0;i<listarr.length;i++){
            // to skip the deleted array is stored as empty which is undefined
            if(listarr[i] == undefined){
                continue;
            } 
            if(listarr[i].getAttribute("class") == str1){
                //to delete the stored time and list in an array
                delete arrOfAlarms[i];
                delete listarr[i];           
            }
        }
    };
};