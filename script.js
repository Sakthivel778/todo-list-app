let inputBox = document.querySelector("#input-box");
let subButton = document.querySelector("#but");
let showList = document.querySelector("#list");
let myTasks = JSON.parse(localStorage.getItem("savedTasks")) || [];

subButton.addEventListener("click", () => {
    let getText = inputBox.value;
    let addElement = document.createElement("li");
    let deltBut = document.createElement("button");

    deltBut.id = "myButton";
    addElement.id = "myTask";

    if (getText === "") {
        alert("Enter any task!");
        return;
    }

    myTasks.push(getText);
    localStorage.setItem("savedTasks", JSON.stringify(myTasks));

    addElement.textContent = getText;
    deltBut.textContent = "Clear";
    addElement.appendChild(deltBut);
    showList.appendChild(addElement);

    inputBox.value = "";

    deltBut.addEventListener("click", () => {
        let taskIndex = myTasks.indexOf(getText); 

        if (taskIndex !== -1) {
            myTasks.splice(taskIndex, 1);
            localStorage.setItem("savedTasks", JSON.stringify(myTasks));
            addElement.remove();
        }
    });
});




