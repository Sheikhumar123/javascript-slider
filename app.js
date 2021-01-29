function show(params) {


    var div = document.getElementById("images")
    var img = document.createElement('img')
    var btndiv = document.createElement('div')
    img.setAttribute('id' , 'img')
    img.setAttribute('src', './image1.jpg')
    img.setAttribute('width', '100%')
    img.setAttribute('height', '550px')

    // creating previous button
    var previous = document.createElement('button')
    var prebtn = document.createTextNode('previous')
    previous.setAttribute('onclick', 'previous()')
    previous.setAttribute('id', 'previous')
    previous.setAttribute('class', 'btn btn-primary pre')
    previous.appendChild(prebtn)
    btndiv.appendChild(previous)

    // creating next button

    var next = document.createElement('button')
    var nextbtn = document.createTextNode('next')
    next.setAttribute('onclick', 'next()')
    next.setAttribute('id', 'next')
    next.setAttribute('class', 'btn btn-primary nex')

    next.appendChild(nextbtn)
    btndiv.appendChild(next)

    div.appendChild(img);
    div.appendChild(btndiv)



    var btn = document.getElementById('show')
    btn.remove()


}

// creating next buton functionality

var counter = 2

function next(params) {
    var next = document.getElementById('next')
    if (counter >= 7) {
        counter = 1

    }
    next.parentNode.previousElementSibling.src = `./image${counter}.jpg`
    next.parentNode.previousElementSibling.className = ` abc`
    // console.log(next.previousElementSibling.previousElementSibling.src);

    counter++
    setTimeout(() => {
        
    next.parentNode.previousElementSibling.className = ` `
        
    }, 1000);
    
}

// creating previous buton functionality


function previous(params) {
    var pre = document.getElementById('previous')
    // var next = document.getElementById('next')
    // console.log(next.previousElementSibling.previousElementSibling.src);
    setTimeout(() => {
        
        if (counter == 2) {
            // console.log(counter);
            counter = 8
            // console.log(counter);
            
        }
        console.log(counter);
        pre.parentNode.previousElementSibling.src = `./image${counter - 2}.jpg`;
        counter--
        
    }, 900);
    
    pre.parentNode.previousElementSibling.className = ` abcd`;
    // console.log(pre.previousElementSibling.src);

    setTimeout(() => {
        
        pre.parentNode.previousElementSibling.className = ` `
    }, 1000);


}
