
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}


// content place holde

const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const authorname = document.getElementById('name');
const date = document.getElementById('date');

const animate_bgs = document.querySelectorAll('.animated-bg')
const animate_bgs_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getDate, 2500)

function getDate() {
    header.innerHTML = `
    <div class="card-img">
        <img src="xbox.jpg" alt="">
    </div>`;
    title.innerHTML = 'Lorem ipsum dolor sit amet';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam dolorum alias voluptatibus neque fugit unde sed ad rerum exercitationem?';
    profileImg.innerHTML = '<img src="ps.jpg" alt="">';
    authorname.innerHTML = 'John Deo';
    date.innerHTML = 'Oct 8, 2020';

    animate_bgs.forEach(bg => {
        bg.classList.remove('animated-bg');
    })
    animate_bgs_text.forEach(bg => {
        bg.classList.remove('animated-bg-text');
    })
}


// github profile

const APIURL = 'https://api.github.com/users/';

const search = document.getElementById('search');
const form = document.getElementById('form');
const main = document.getElementById('main')

// getUser('bradtraversy');
async function getUser(username) {
    try {
        const { data } = await axios.get(APIURL + username);

        createUserCard(data);
        createRepo(username);
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

function addRepoToCard(repos) {
    const reposEle = document.getElementById('repos');

    repos.forEach(repo => {
        const repoEle = document.createElement('a');
        repoEle.classList.add('repo');
        repoEle.href = repo.html_url;
        repoEle.target = '_blank';
        repoEle.innerText = repo.name;

        reposEle.appendChild(repoEle);
    })
}

async function createRepo(username) {
    try {
        const { data } = await axios.get(APIURL + username + '/repos?sort=created');

        addRepoToCard(data);
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

function createUserCard(user) {
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
    <div class="git-card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div class="repos" id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML
    
}



form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if(user) {
        getUser(user)

        search.value = ''
    }
})