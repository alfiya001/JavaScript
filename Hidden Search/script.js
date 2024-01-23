

const btn = document.querySelector(".button");
const search = document.querySelector(".search");
const input = document.querySelector(".inputSearch");
console.log("123"+btn);

btn.addEventListener('click', () => {
    // input.classList.add('active');
    search.classList.toggle('active');
    input.focus();
})



//scrolling contents

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}