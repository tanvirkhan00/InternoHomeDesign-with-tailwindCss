const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll('nav__link');

navLink.forEach(link =>
    link.addEventListener("click", () => {
        navMenu.classList.add('hidden');
    })
)

closeIcon.addEventListener("click", () => {
    navMenu.classList.add('hidden');
})

hamburger.addEventListener("click", () => {
    navMenu.classList.remove('hidden');
})


document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('teamFile.json');
    const team = await response.json();

    const teamList = document.getElementById('team-list');
    team.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('memberDiv')
        memberDiv.innerHTML = `
        <a href="singleTeam.html?id=${member.id}">
            <img src="${member.img}" alt="${member.title}">
            <h2>${member.title}</h2>
            <p>${member.address}</p>
            <div class="flex items-center justify-center mt-2 gap-[10px]">
                 <i class="fa-brands fa-facebook icon-hover p-2 text-white rounded-full hover:-translate-y-2"></i>
                 <i class="fa-brands fa-twitter icon-hover p-2 text-white rounded-full hover:-translate-y-2"></i>
                 <i class="fa-brands fa-linkedin icon-hover p-2 text-white rounded-full hover:-translate-y-2"></i>
            </div>
        </a>
        
      `;
        teamList.appendChild(memberDiv);
    });
});


// Profile Json JS

function getMemberIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

document.addEventListener("DOMContentLoaded", async () => {
    const memberId = getMemberIdFromUrl();

    if (memberId) {
        const response = await fetch('teamFile.json');
        const team = await response.json();
        const member = team.find(m => m.id == memberId);

        if (member) {
            document.getElementById('profile-img').src = member.img;
            document.getElementById('profile-title').textContent = member.title;
            document.getElementById('profile-address').textContent = member.address;
        } else {
            document.getElementById('profile').textContent = 'Member not found';
        }
    }
});

