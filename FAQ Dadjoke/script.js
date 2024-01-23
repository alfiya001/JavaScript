
const jokeEle = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke () {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    jokeEle.innerHTML = data.joke;
}
// function generateJoke () {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };
//     fetch('https://icanhazdadjoke.com', config)
//     .then(res =>res.json())
//     .then(data => {
//         jokeEle.innerHTML = data.joke;
//         console.log(data)})
// }



const faqs = document.querySelectorAll('faq');
const btns = document.querySelectorAll('.faq-btn');
console.log(btns)
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active');
    })
})