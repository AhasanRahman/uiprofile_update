const img = document.getElementById("profileimg");
const imgform = document.getElementById("img");
const image_input = document.querySelector("#image_input");

image_input.addEventListener("change", () => {
  imgform.src = URL.createObjectURL(image_input.files[0]);
});



let repeat1 = document.getElementById("repeat1");
let countId = 0;
const handleaddInput = () => {

  const newinput = ` 

      <input class="firstinputchild" type="text" name="" id="inputid${(countId += 1)}" placeholder="Repeat hire" >
      
      <input class="firstinputchild" type="text" name="" id="inputid${countId}" placeholder="job success ">
      <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>`;

  repeat1.innerHTML += newinput;
};

const removeFunction = (event, id) => {
  event.preventDefault();

  document.getElementById(`inputid${id}`).remove();
  document.getElementById(`btn${id}`).remove();
  document.getElementById(`inputid${id}`).remove();
};

let repeat2 = document.getElementById("repeat2");

const handleaddInput2 = (event) => {
  event.preventDefault();
  const newinput = ` 

      <input class="firstinputchild"  type="text" name="" id="inputid${(countId += 1)}" placeholder="work time" >
      
      <input class="firstinputchild"  type="text" name="" id="inputid${countId}" placeholder="work hours ">
      <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>`;

  repeat2.innerHTML += newinput;
};

let repeat3 = document.getElementById("repeat3");

const handleaddInput3 = (event) => {
  event.preventDefault();
  const newinput = ` 

      <input class="firstinputchild"   type="text" name="" id="inputid${(countId += 1)}" placeholder="new task ">
      <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>

      <input class="firstinputchild"  type="text" name="" id="inputid${(countId += 1)}" placeholder="previous work ">
      <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>

      <input class="firstinputchild"  type="text" name="" id="inputid${(countId += 1)}" placeholder=" another ">
      <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>`;

  repeat3.innerHTML += newinput;
};

function takevalue(e) {
  e.preventDefault();
  var name = document.getElementById("hname").value;
  var position = document.getElementById("hPosition").value;
  var address = document.getElementById("Address").value;
  var activities1 = document.getElementById("Activities1").value;
  var activities2 = document.getElementById("Activities2").value;
  var activities3 = document.getElementById("Activities3").value;
  var activities4 = document.getElementById("Activities4").value;

  var workfield1 = document.getElementById("workfield1").value;
  var workfield2 = document.getElementById("workfield2").value;
  var workfield3 = document.getElementById("workfield3").value;
  var workfield4 = document.getElementById("workfield4").value;

  var special1 = document.getElementById("special1").value;
  var special2 = document.getElementById("special2").value;
  var special3 = document.getElementById("special3").value;
  var special4 = document.getElementById("special4").value;


  document.getElementById("headername").innerText = name;
  document.getElementById("Position").innerText = position;
  document.getElementById("country").innerText = address;

  document.getElementById("myactivity1").innerText = activities1;
  document.getElementById("myactivity2").innerText = activities2;
  document.getElementById("myactivity3").innerText = activities3;
  document.getElementById("myactivity4").innerText = activities4;

  document.getElementById("workhistory1").innerText = workfield1;
  document.getElementById("workhistory2").innerText = workfield2;
  document.getElementById("workhistory3").innerText = workfield3;
  document.getElementById("workhistory4").innerText = workfield4;


  document.getElementById("pspecial1").innerText = special1;
  document.getElementById("pspecial2").innerText = special2;
  document.getElementById("pspecial3").innerText = special3;
  document.getElementById("pspecial4").innerText = special4;


  document.getElementById("fromcontainer").classList.add("showfrom");
  document.getElementById("container").classList.remove("showfrom");
  img.src = URL.createObjectURL(image_input.files[0]);

  // const firstinputchild = document.getElementsByClassName("firstinputchild");
  // if(firstinputchild[0]){
  //     for(let i=0;i<firstinputchild.length;i++){
  //         console.log(firstinputchild[i].value);
  //     }
  // }

}

document.getElementById("fromcontainer").classList.add("showfrom");
document.getElementById("container").classList.remove("showfrom");


const showFrom = (e) => {
  e.preventDefault();
  document.getElementById("fromcontainer").classList.remove("showfrom");
  document.getElementById("container").classList.add("showfrom");

};


