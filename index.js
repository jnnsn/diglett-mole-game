const gameContainer = document.querySelector("#game-container");

let score = 0;

//Step 1
function createGrid(){
    //create 3 "div" rows and add class of .row 
    for(let i=0; i<3; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        //create 3 "div" cells per row within this loop. add class .cell
        for(let j=0; j<3; j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            //create a holeImg as a child of cell. add src img of hole
            const holeImg = document.createElement("img");
            holeImg.src = "images/hole.png";
            //append holeImg to cell first, then cell to row. 
            cell.appendChild(holeImg);
            row.appendChild(cell);
        }
        //append row to gameContainer on the outer loop that contains row.
        gameContainer.appendChild(row);
    }
    //add in createMole function as mole will be created when grid is created.
    createMole();
    
}//call the createGrid(); last. 

//Step 2
function createMole(){
    //pick a random cell to put mole into
    const cells = document.querySelectorAll(".cell");
    const randomIndex = (Math.floor(Math.random() * 9));
    const moleCell = cells[randomIndex];

    //create img element for mole, add class, and add src img
    const moleImg = document.createElement("img");
    moleImg.classList.add("mole");
    moleImg.src = "images/diglett2.png";

    //remove hole (moleCell.firstChild) from the new location(moleCell) and add mole to new location. 
    moleCell.replaceChild(moleImg, moleCell.firstChild);
}

//Step 5
function replaceMole(moleImg) {
    const holeImg = document.createElement("img")
    holeImg.src = "images/hole.png";
    moleImg.parentNode.replaceChild(holeImg, moleImg);
    createMole();
}

//Step 4
function addPoint(){
    score++;
    const scoreElement = document.getElementById("points");
    scoreElement.innerText = score;
}

//Step3
gameContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("mole")) {
        replaceMole(e.target);
        addPoint();
        console.log("click");
    }
})


//Step 1.1 call the function createGrid();
createGrid();

