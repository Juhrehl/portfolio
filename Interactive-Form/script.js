/**
 * WEB222 – Lab 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <Jarrell Blay>
 *      Student ID: <106614225>
 *      Date:       <November 27, 2023>
 */

function validateForm(){
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var confirmPassword = document.getElementById('confirm-password').value
    var age = document.getElementById('age').value

    //validate name
    if (name === ' '){
        alert('Invalid name, please try again');
        return false;
    }

    //validate email
    if (email === ' '){
        alert('Invalid email, please try again');
        return false;
    }

    //validate password
    if (confirmPassword === ' '){
        alert('Please confirm password');
        return false;
    }

    //confirm password prompt
    if (password !== confirmPassword){
        alert('Password do not match, please try again');
        return false;
    }

    //validate age
    if (isNaN(age)){
        alert('Invalid age, please try again');
        return false;
    }

    //validate age if 18^
    if (age < 18){
        alert('You must be 18 years old above to continue');
        return false;
    }

    //prompt when done
    alert('Your form has been successfully submitted, thank you!')
    return true;

}
