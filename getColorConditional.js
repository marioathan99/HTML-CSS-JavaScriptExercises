//Based on traffic lights write a code with conditionals where the phrase variable equals to the certains signals and it's respective color.
function getColor(phrase){
    if (phrase === 'stop') {
        console.log('red')
    } else if (phrase === 'slow') {
        console.log('yellow')
    } else if (phrase === 'go') {
        console.log('green')
    } else {
        console.log('purple')
    }
