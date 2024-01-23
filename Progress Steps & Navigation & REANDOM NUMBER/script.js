
const btn = document.getElementById('toggle');
const nav = document.getElementById('nav');

btn.addEventListener('click', () => {
    console.log("123")
    nav.classList.toggle('active')
})

const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        console.log(typeof target, target)
        const increment = target / 200;

        if(c<target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        } else{
            counter.innerHTML = target
        }
    }
    updateCounter() 
})