
let color = 'black'
let click = false;
document.addEventListener('DOMContentLoaded', () => {
    createGrid(16)

    document.querySelector('body').addEventListener('click', function(e) {
        if (e.target.tagName == "BUTTON") {
            click = !click
            let draw = document.querySelector('.draw')
            if (click) {
                draw.textContent = 'U can draw'
            } else {
                draw.textContent = 'u cant draw'
            }
        }
    })
    
    const button = document.querySelector('#sizeButton')
    button.addEventListener('click', function(){
        let size = getSize()
        createGrid(size)
    })
   
    const resetButton = document.querySelector('#resetButton')
    resetButton.addEventListener('click',setResetBoard)
   
    
})

function createGrid(num) {
    const gridContainersNumber = num * num
    const container = document.querySelector('.container')

   const gridContainerSize = 100 / num;
    
    for (let i = 0; i < gridContainersNumber; i++) {
        const baseDiv = document.createElement('div')
        baseDiv.classList.add('gridDiv')
        baseDiv.style.flex = `0 0 ${gridContainerSize}%`
        baseDiv.style.height = `${gridContainerSize}%`
        
        baseDiv.addEventListener('mouseover', colorDiv)

        container.appendChild(baseDiv)
    }

   
}


function colorDiv() {
   if (click) {
    if (color =='random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%,50%)`
    } else {
        this.style.backgroundColor = 'black'
    } 
   }
    
}


function setColor (colorChoice) {
    color = colorChoice
    
}

function getSize() {
    let choice = prompt('Input a size of the board')
    let message = document.querySelector('.message')
    if (choice == '') {
        message.textContent = 'Please provide a number'
        message.style.color = 'red'
        message.style.fontSize = '24px'
        message.style.fontWeight = 'bold'
    } else if (choice > 100 || choice < 0) {
        message.textContent = 'Size must be lower than 100 and higher than 0 '
        message.style.color = 'red'
        message.style.fontSize = '24px'
        message.style.fontWeight = 'bold'
    } else {
        return choice
    }
    
}

function setResetBoard() {
    let divs = document.querySelectorAll('.gridDiv')
    divs.forEach((div) =>  {
        return div.style.backgroundColor = 'white'
    })
}
