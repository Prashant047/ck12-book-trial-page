let formGroups = document.getElementsByClassName('form-group');

// let nameInput = document.getElementById('name-input');
// let emailInput = document.getElementById('email-input');
// let phoneInput = document.getElementById('phone-input');
// let studentNameInput = document.getElementById('student-name-input');

let nameGroup = document.getElementById('name-group');
let emailGroup = document.getElementById('email-group');
let phoneGroup = document.getElementById('phone-group');
let studentNameGroup = document.getElementById('student-name-group');

let groupConditions = {
    email: {
        email: true,
        presence: true
    },
    name: {
        presence: true,
        length: {
            minimum: 1
        }
    },
    phone: {
        presence: true,
        length: {
            minimum: 1
        }
    },
    studentName: {
        presence: true,
        length: {
            minimum: true
        }
    }
}
function inputValidation(event){
    let field = event.target.getAttribute('name');
    let value = event.target.value;
    if (field === 'name') {
        if (validate({ name: value }, {name: groupConditions.name}) != undefined) {
            nameGroup.querySelector('.error').innerHTML = "Required!";
            nameGroup.querySelector('.error').classList.remove('hide-error');
        }
        else{

            nameGroup.querySelector('.error').classList.add('hide-error');
        }
    }
    else if (field === 'email') {
        if (validate({ email: value }, {email: groupConditions.email}) != undefined) {
            emailGroup.querySelector('.error').innerHTML = "Please enter valid email address";
            emailGroup.querySelector('.error').classList.remove('hide-error');
        }
        else {
            emailGroup.querySelector('.error').classList.add('hide-error');
        }
    }
    else if (field === 'phone_number') {
        if (validate({ phone: value }, {phone: groupConditions.phone}) != undefined) {
            phoneGroup.querySelector('.error').innerHTML = "Please enter valid phone number";
            phoneGroup.querySelector('.error').classList.remove('hide-error');
        }
        else {
            phoneGroup.querySelector('.error').classList.add('hide-error');
        }
    }
    else if (field === 'studentName') {
        if (validate({ studentName: value }, {studentName: groupConditions.studentName}) != undefined) {
            studentNameGroup.querySelector('.error').innerHTML = "Required!";
            studentNameGroup.querySelector('.error').classList.remove('hide-error');
        }
        else {
            studentNameGroup.querySelector('.error').classList.add('hide-error');
        }
    }

}

for(let i=0;i<formGroups.length;i++){
    formGroups[i].getElementsByTagName('input')[0].addEventListener('focus', (event) => {
        formGroups[i].getElementsByTagName('label')[0].classList.add("focused");
        inputValidation(event);
    })
    formGroups[i].getElementsByTagName('input')[0].addEventListener('blur', (event) => {
        if(event.target.value.length === 0){
            formGroups[i].getElementsByTagName('label')[0].classList.remove("focused");
        }
        inputValidation(event);
    })

    formGroups[i].getElementsByTagName('input')[0].addEventListener('keypress', (event) => {
        inputValidation(event);
    });
}


let submitBtn = document.getElementById('submit-btn');


submitBtn.addEventListener('click', (event) => {
    let inputs = {
        name: nameGroup.getElementsByTagName('input')[0].value,
        email: emailGroup.getElementsByTagName('input')[0].value,
        phone: phoneGroup.getElementsByTagName('input')[0].value,
        studentName: studentNameGroup.getElementsByTagName('input')[0].value,
    }

    if(validate(inputs, groupConditions) != undefined){
        // submit request
    }
    else{

    }

})