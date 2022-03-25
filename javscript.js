let videoBtn = document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

function validate() {
    let email = document.getElementById("email");
    let uname = document.getElementById("txt1");
    let msg = document.getElementById("msg");
    let number = document.getElementById("numb");
    let regx = /^[2 3 5 7 9]\d{6}$/;
    //    if(passWord.value.trim() == "" || uname.value.trim()== ""){
    //       alert("neither password nor username can be blank");
    //        return false;
    //    }
    //    else {
    //        true;
    //     }
    if (email.value.trim() == "") {
        email.style.border = "solid red";

        alert("Email can not be empty");
        return false;
    }
    // else if (uname.value.length < 8) {
    //     uname.style.border="solid red";
    //     alert("Username is usually more than 8 characters");
    //     return false;
    // }
    else if (uname.value.trim() == "") {
        uname.style.border = "solid red";

        alert("Username can not be empty");
        return false;

    } 
    else if (regx.test(number.value) == false) {
        number.style.border = "solid red";
        alert("phone number is not valid");
        return false;
    } else if (msg.value.trim() == "") {
        msg.style.border = "solid red";

        alert("An empty message can not be sent");
        return false;

    } else {
        alert('message sent');
        return true;
    }
}