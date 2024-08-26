


document.addEventListener('DOMContentLoaded', () => {
    createGrid(16)

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
        container.appendChild(baseDiv)
    }

   
}



