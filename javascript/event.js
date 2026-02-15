document.getElementById('btn-update-title')
.addEventListener('click', function(){
    // console.log('btn clicked');
    const titleText = document.getElementById('title')
    titleText.innerText = "hui beta tor name ki tui ekane keno"
})

document.getElementById('btn-login').addEventListener(
    'click', function (){
        const loginInfo = document.getElementById('user-info');
        loginInfo.innerText = "Login Successfully"
    }
)


document.getElementById('name-update').addEventListener('click', function(){
    

    const nameInput = document.getElementById('name-input');
    const name = nameInput.value;
    // set name
    const inPut =document.getElementById('input-name');
    inPut.innerText = name;

})

