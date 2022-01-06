var ulDOM = document.querySelector("#list");
var tsk = document.querySelector("#task");
var tasks = []; 
var id = 0;
var checked = false;
var savedData = [];

/*
function saveData(){
    savedData = JSON.parse(localStorage.getItem("tasks"));
    for(let i=0; i<savedData.length;++i)
    {
        var liDOM = document.createElement("li");
        liDOM.innerHTML = savedData[i];
        var spanDOM = document.createElement("span");
        spanDOM.innerHTML = `<span id=${Math.floor(Math.random() * 100000)} onclick="removeElement(this.id)"style="float: right; margin-left:5px;">X</span>`;
        spanDOM.style.float = "right";
        liDOM.setAttribute('id',"l"+id);
        var spanDOM2 = document.createElement("span");
        spanDOM2.innerHTML = `<span id=r${Math.floor(Math.random() * 100000)} onclick="dene(this.id)"style="float: right;">✓ </span>`;
        
        liDOM.append(spanDOM);
        liDOM.append(spanDOM2);    
        ulDOM.appendChild(liDOM);
    }
}

saveData();
*/
function saveData()
{
    savedData = JSON.parse(localStorage.getItem("tasks"));
    //console.log(savedData);
}

saveData();
function showData(){
    //savedData = JSON.parse(localStorage.getItem("tasks"));
    for(let i=0; i<savedData.length;++i)
    {
        var liDOM = document.createElement("li");
        liDOM.innerHTML = savedData[i];
        var spanDOM = document.createElement("span");
        spanDOM.innerHTML = `<span id=${Math.floor(Math.random() * 100000)} onclick="removeElement(this.id)"style="float: right; margin-left:5px;">X</span>`;
        spanDOM.style.float = "right";
        liDOM.setAttribute('id',"l"+id);
        var spanDOM2 = document.createElement("span");
        spanDOM2.innerHTML = `<span id=r${Math.floor(Math.random() * 100000)} onclick="dene(this.id)"style="float: right;">✓ </span>`;
        
        liDOM.append(spanDOM);
        liDOM.append(spanDOM2);    
        ulDOM.appendChild(liDOM);
    }
}

showData();

function newElement()
{
//console.log(task.value);
if(tsk.value.length > 0 && tsk.value != " ")
{
    var liDOM = document.createElement("li");
    liDOM.innerHTML = tsk.value;
    var spanDOM = document.createElement("span");
    spanDOM.innerHTML = `<span id=${id} onclick="removeElement(this.id)"style="float: right; margin-left:5px;">X</span>`;
    spanDOM.style.float = "right";
    liDOM.setAttribute('id',"l"+id);
    var spanDOM2 = document.createElement("span");
    spanDOM2.innerHTML = `<span id=r${id} onclick="dene(this.id)"style="float: right;">✓ </span>`;
    savedData.push(tsk.value);    
    liDOM.append(spanDOM);
    liDOM.append(spanDOM2);    
    ulDOM.appendChild(liDOM);
    tasks.push(tsk.value);
    //savedData.push(tsk.value);
    //console.log(tasks);
    //if(!localStorage.getItem("tasks")) localStorage.setItem("tasks",JSON.stringify(tasks));
    localStorage.setItem("tasks",JSON.stringify(tasks));
    tsk.value = "";
    id++;
    //console.log(savedData);
}
else
{
    alert("Boş ekleme yapılamaz");
}
}


function removeElement(id)
{
    var liDOM = document.getElementById(id).parentElement.parentElement;
    liDOM.remove();
    //console.log(liDOM.textContent);
    //X'e kadar al.
    let txtContent = [];
    for(let i=0; i < liDOM.textContent.length; i++)
    {
        txtContent.push(liDOM.textContent[i]);
        if(liDOM.textContent[i] == "X") break;
    }
    txtContent.pop();
    let wantedWord = txtContent.join("");
    console.log(wantedWord);
    savedData.splice(savedData.indexOf(wantedWord), 1);
}

function dene(id)
{
    checked = !checked;
//    console.log(checked);
    var liDOM = document.getElementById(id).parentElement.parentElement;
    if(checked) liDOM.classList.add("checked");
    else liDOM.classList.remove("checked");
}


setInterval(() => {
    localStorage.setItem("tasks",JSON.stringify(savedData));    
    console.log(JSON.parse(localStorage.getItem("tasks"))); // tasks sıkıntısız şekilde doluyor.
}, 1000);


