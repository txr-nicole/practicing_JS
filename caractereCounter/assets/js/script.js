function writing(e) {
    let msg = document.querySelector('#msg').value
    let textarea = document.querySelector('#msg')
    let limit = document.querySelector('#limit').value
    let info = document.querySelector('.info')
    let msgLetters = [...msg]
    if (limit != ' ') {
        textarea.setAttribute('maxlength', limit)
    }
    let spaces = msgLetters.filter(word => {
        if (word === ' ') {
            return true
        } else {
            return false
        }
    })
    info.innerHTML = `${msg.length} caracteres ${spaces.length + 1} palavras`;
}