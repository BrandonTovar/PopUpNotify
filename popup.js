console.log("PopUp: Update");

if (window.XMLHttpRequest)
{
	// Objeto para IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
}else{
	// Objeto para IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET","/Scripts/Notify/message.xml",false);
xmlhttp.send();

var notifyUp = document.createElement("div"), titleNotifyUp = document.createElement("div"), messageNotifyUp = document.createElement("div");
notifyUp.className="notifyUp";titleNotifyUp.className="titleNotifyUp";messageNotifyUp.className="messageNotifyUp";

 
// Obtenemos un objeto XMLDocument con el contenido del archivo xml del servidor

xmlDoc=xmlhttp.responseXML;

if (xmlDoc.getElementsByTagName("style")[0].innerHTML.includes(".css")){
  var type=xmlDoc.getElementsByTagName("type"), 
    message=xmlDoc.getElementsByTagName("message"), 
    date=xmlDoc.getElementsByTagName("date"),
    styleClass = xmlDoc.getElementsByTagName("style"),
    title = xmlDoc.getElementsByTagName("title");
  var type=type[0].innerHTML, 
    message=message[0].innerHTML,
    date=date[0].innerHTML,
    styleClass=styleClass[0].innerHTML,
    title=title[0].innerHTML;

  console.log("This is a path");
  style = document.createElement("link");
  style.rel="stylesheet";
  style.href=styleClass;
  document.head.insertBefore(style, document.head.childNodes[0]);

}else{
  var type=xmlDoc.getElementsByTagName("type"), 
    message=xmlDoc.getElementsByTagName("message"), 
    date=xmlDoc.getElementsByTagName("date"),
    styleClass = xmlDoc.getElementsByTagName("style"),
    title = xmlDoc.getElementsByTagName("title");
  var type=type[0].innerHTML, 
    message=message[0].innerHTML,
    date=date[0].innerHTML,
    styleClass=styleClass[0].innerHTML,
    title=title[0].innerHTML;

  styleClass = styleClass.replaceAll("\n", '\n');

  style = document.createElement("style");
  style.id="notifyPup";
  document.head.insertBefore(style, document.head.childNodes[0]);
  document.head.children["notifyPup"].innerHTML = styleClass;
}




var pMessage, pType,backDrom;

var today = new Date(), dateA = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

if(dateA == date || dateA == "undefined"){
  console.log("Realease date");
}
else{
  switch (type) {
    case "Alert":
      console.log("Alert");
      notifyAlert(type, date, message);
      console.log(pMessage, pType,backDrom);
      break;
    case "Message":
      console.log("Message");
      notifyMessage(type, date, message);
      console.log(pMessage, pType,backDrom);
      break;
    case "Critical":
      console.log("Critical");
      notifyCritic(type, date, message);
      console.log(pMessage, pType,backDrom);
      break;
    default:
      
      break;
  }
}


function notifyAlert(type, date, message){
  createBackDrom(type, date, message);

}
function notifyMessage(type, date, message){
  createBackDrom(type, date, message);
  
}
function notifyCritic(type, date, message){
  createBackDrom(type, date, message);

}

function createBackDrom(){
  backDrom = document.createElement("div");
  backDrom.className="BackDrom";
  backDrom.id="BackDrom";
  pType =  document.createElement("p");
  pType.className="pType";
  pType.id=type;
  pType.innerText=title;
  pMessage =  document.createElement("p");
  pMessage.className="pMessage";
  pMessage.id="Message";
  backDrom.appendChild(pType);
  backDrom.appendChild(pMessage);
  document.body.insertBefore(backDrom, document.body.childNodes[0]);

  pMessage.innerText=message;
  backDrom.appendChild(notifyUp);
  notifyUp.appendChild(titleNotifyUp);
  notifyUp.appendChild(messageNotifyUp);
  titleNotifyUp.appendChild(pType);
  messageNotifyUp.appendChild(pMessage);

  
}
