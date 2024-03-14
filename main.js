var data
document.getElementById('t1').addEventListener('click',()=>{
    let background= document.querySelector('.background')
    let text= document.querySelectorAll('.text')
    background.style.opacity = `0`
    document.querySelector('.product').style.display=`flex`
    setTimeout(()=>{
        background.style.display =`none`
        document.querySelector('.product').style.opacity=`1`
    },3000)
    text[0].style.opacity = `0`
    text[1].style.opacity = `0`
    document.querySelector('.maintext').style.fontSize = `40px`
    document.querySelector('.maintext').style.letterSpacing = `5px`
})
let json = fetch('https://fakestoreapi.com/products?limit=10&authuser=0')
json
.then((Respon)=>{
    return Respon.json()
})
.then((Respon)=>{
    data = Respon
    let Respons = Respon.map((x)=>{
        if(x.id<=6)
        {
        return `<div class="items">
        <img src="${x.image}" alt="">
        <div class="itext">
            <div class="title">${x.title}</div>
            <div class="price">${x.price}$</div>
    </div>
    </div>`
        }
        else return ``

    })
    let html = Respons.join('')
    document.querySelector('.listproduct').innerHTML = html

})
let button = document.querySelector('.button')
button.addEventListener('click',()=>{
    button.style.opacity = `0`
    setTimeout(()=>{
     button.style.display =`none`
     let Respons = data.map((x)=>{  
        if(6<x.id<=10)
        {
            return `<div class="items">
        <img src="${x.image}" alt="">
        <div class="itext">
            <div class="title">${x.title}</div>
            <div class="price">${x.price}$</div>
        </div>
        </div>`
        }
        else return ``
        })
        let html = Respons.join('')
        console.log(html)
        document.querySelector('.listproduct').innerHTML = html
    },3000)
})