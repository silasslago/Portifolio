const aboutMe = document.getElementById('sobre-mim')
const curriculo = document.getElementById('curriculo')
const projects = document.getElementById('projetos')

aboutMe.onclick = function() {
    document.getElementById('sobre-mim-div').scrollIntoView()
}

curriculo.onclick = function() {
    document.getElementById('curriculo-div').scrollIntoView()
}

projects.onclick = function() {
    document.getElementById('projetos-div').scrollIntoView()
}