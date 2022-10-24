let ls2 = []

const somar = function() {
    if(localStorage.getItem('ls2') != null){
        ls2 = JSON.parse(localStorage.getItem('ls2'))
    }
    x = document.getElementById('x').value
    y = document.getElementById('y').value
    z = parseFloat(x) + parseFloat(y)
    document.getElementById('z').value = z
    console.log(z)
    ls2.push(z) //"puxar" z

    localStorage.setItem('ls2', JSON.stringify(ls2))

} 