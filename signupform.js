const addC = document.querySelector('#addC')
const fname = document.querySelector('#fname')
const lname = document.querySelector('#lname')
const datee = document.querySelector('#date')
const stid = document.querySelector('#SID')
const stadd = document.querySelector('#Street_address')
const city = document.querySelector('#city')
const SP = document.querySelector('#StateProvince')
const co = document.querySelector('#Country')
const zc = document.querySelector('#ZipCode')
const c = document.querySelector('#courses')
const lv = document.querySelector('#Level')
const lg = document.querySelector('#Language')
const sd = document.querySelector('#StartDate')
const em = document.querySelector('#email')

addC.addEventListener('click', handleClick)

function handleClick(e) {
    e.preventDefault();
    console.log('not handled')
}

const submitB = document.querySelector('#submitB')

submitB.addEventListener('click', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    document.querySelector('#firstname').textContent += fname.value
    document.querySelector('#lastName').textContent += lname.value
    document.querySelector('#middleName').textContent += mname.value
    document.querySelector('#DOB').textContent += datee.value
    document.querySelector('#stID').textContent += stid.value
    document.querySelector('#C').textContent += city.value
    document.querySelector('#sAdd').textContent += stadd.value
    document.querySelector('#SP').textContent += SP.value
    document.querySelector('#CO').textContent += co.value
    document.querySelector('#ZC').textContent += zc.value
    document.querySelector('.em').textContent += em.value
    document.querySelector('#co').textContent += c.value
    document.querySelector('#lv').textContent += lv.value
    document.querySelector('#lang').textContent += lg.value
    document.querySelector('#sd').textContent += sd.value
    document.querySelector('section').style.display = 'block'
    document.querySelector('form').style.display = 'none'
    console.log('submitted')
}