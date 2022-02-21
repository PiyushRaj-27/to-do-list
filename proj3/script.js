function reveal(){
    document.getElementById("layer1").style.display = "block";
    document.getElementById("formlayer").style.display = "block";
}
function hide(){
    document.getElementById("layer1").style.display = "none";
    document.getElementById("formlayer").style.display = "none";
    document.getElementById("ftitle").value = '';
    document.getElementById("ftime").value = '';
    document.getElementById("fdesc").value = '';
    document.getElementById("fdate").value = '';
}
function hide2(){
    document.getElementById("layer1").style.display = "none";
    document.getElementById("formlayer2").style.display = "none";
}
function addEvent(){
    document.getElementById("layer1").style.display = "none";
    document.getElementById("formlayer").style.display = "none"; 
    let title = document.getElementById("ftitle").value;
    let time = document.getElementById("ftime").value;
    let date = document.getElementById("fdate").value;
    let desc = document.getElementById("fdesc").value;
    // this will create the card
    let card = document.createElement("div"); 
    card.classList.add("eventcard");
    let eventcardid = "card" + document.getElementById("events").children.length;
    card.id = eventcardid;
    //title div
    let cardtitle = document.createElement("div");
    cardtitle.classList.add("eventtitle"); 
    cardtitle.innerHTML = title; 
    cardtitle.id = "title"+ document.getElementById("events").children.length
    card.appendChild(cardtitle);
    //time div
    let cardtime = document.createElement("div");
    cardtime.classList.add("eventtime");
    cardtime.innerHTML = time;
    cardtime.id = "time"+ document.getElementById("events").children.length;
    card.appendChild(cardtime);
    //date
    let carddate = document.createElement("div");
    carddate.classList.add("eventdate");
    carddate.innerHTML = date;
    carddate.id = "date"+ document.getElementById("events").children.length;
    card.appendChild(carddate);
    //desc div
    let carddesc = document.createElement("div");
    carddesc.classList.add("eventdesc");
    carddesc.innerHTML = desc;
    carddesc.id = "desc"+ document.getElementById("events").children.length;
    card.appendChild(carddesc);
    // del button
    let cardbtn = document.createElement("button");
    cardbtn.classList.add("delete");
    cardbtn.innerHTML = "Delete";
    cardbtn.setAttribute("onclick","deleteEvent(this)")
    card.appendChild(cardbtn);
    //edit button 
    let editbtn = document.createElement("button");
    editbtn.classList.add("delete");
    editbtn.innerHTML = "Edit";
    editbtn.setAttribute("onclick","editEvent(this)")
    card.appendChild(editbtn);
    // adding card to event
    document.getElementById("events").appendChild(card);
    //resseting the value of form inputs:
    document.getElementById("ftitle").value = '';
    document.getElementById("ftime").value = '';
    document.getElementById("fdesc").value = '';
    document.getElementById("fdate").value = '';

}
function deleteEvent(a){
    let parentelem = a.parentNode;
    document.getElementById("events").removeChild(parentelem);
}
function editEvent(a){
    console.log(a.parentNode);
    let title = a.parentNode.children[0].innerHTML;
    let time = a.parentNode.children[1].innerHTML;
    let date = a.parentNode.children[2].innerHTML;
    let desc = a.parentNode.children[3].innerHTML;
    document.getElementById("ftitle2").value = title;
    document.getElementById("ftime2").value = time;
    document.getElementById("fdesc2").value = desc;
    document.getElementById("fdate2").value = date;
    document.getElementById("layer1").style.display = "block";
    document.getElementById("formlayer2").style.display = "block";
    document.getElementById("abut").addEventListener("click",function(){
    a.parentNode.children[0].innerHTML =document.getElementById("ftitle2").value;
    a.parentNode.children[1].innerHTML = document.getElementById("ftime2").value;
    a.parentNode.children[2].innerHTML =document.getElementById("fdate2").value; 
    a.parentNode.children[3].innerHTML =document.getElementById("fdesc2").value;   
    document.getElementById("layer1").style.display = "none";
    document.getElementById("formlayer2").style.display = "none";
    var clone = document.getElementById("abut").cloneNode(true);
    document.getElementById("abut").replaceWith(clone);
    });
}