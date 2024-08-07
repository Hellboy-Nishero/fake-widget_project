let next_buttons = document.querySelectorAll('.btn, .btn2, .btn3');
let back_buttons = document.querySelectorAll('.back-btn');
let sections = document.querySelectorAll('section');
let currentSectionIndex = 0;

change_slide = (newIndex) => {

    sections[currentSectionIndex].classList.remove('active');
    
    setTimeout(() => {
        sections[currentSectionIndex].style.visibility = 'hidden';
        sections[currentSectionIndex].style.display = 'none';
        currentSectionIndex = newIndex;
        
        // Показать следующий элемент
        sections[currentSectionIndex].style.display = 'block';
        sections[currentSectionIndex].style.visibility = 'visible';
        
        // Задержка для плавного перехода
        setTimeout(() => {
            sections[currentSectionIndex].classList.add('active');
        }, 10); 
    }, 500); 
    
}

change_slide(currentSectionIndex);

next_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let newIndex = currentSectionIndex + 1;
        if (newIndex < sections.length) {
            change_slide(newIndex);
        }
    })
})

back_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let newIndex = currentSectionIndex - 1;
        if (newIndex >= 0) {
            change_slide(newIndex);
        }
    })
})


