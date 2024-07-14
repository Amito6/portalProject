import { registerFunc } from "../../module/module.js";


export const userFunc = () =>{
    let users = [];
    let userEl = document.querySelector(".users");
    let userForm = userEl.querySelector(".users-form");
    userForm.onsubmit = (e) =>{
        e.preventDefault();
        registerFunc(userForm,users,"users");
    }
}