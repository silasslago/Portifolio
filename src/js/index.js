const aboutMe = document.getElementById('sobre-mim')
const projects = document.getElementById('projetos')

aboutMe.onclick = function() {
    document.getElementById('sobre-mim-div').scrollIntoView()
}

projects.onclick = function() {
    document.getElementById('projetos-div').scrollIntoView()
}