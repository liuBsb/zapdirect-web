const input = document.querySelector('#phone')

input.addEventListener('keypress', () => {
    let inputlength = input.value.length

    
    if (inputlength === 0) {
        input.value += '('
    }else if (inputlength === 3) {
        input.value += ')'
    }
    console.log(value)
})
