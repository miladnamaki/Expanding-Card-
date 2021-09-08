const panels = document.querySelectorAll('.panel')
panels.forEach ((panel)=>{
   panel.addEventListener('click',()=>{
    removeActioveClases()
       panel.classList.add('active')
   })

})
function removeActioveClases(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}