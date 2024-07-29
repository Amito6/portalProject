import { getDataFunc, registerFunc, formatDateFunc, isConfirmFunc, updateDataFunc} from "../../module/module.js";


export const userFunc = () =>{
    let data = getDataFunc();
    let users = data ? data.users ? data.users : [] : [];
    let userEl = document.querySelector(".users");
    let modal = userEl.querySelector("#user-modal")
    let btnClose = modal.querySelector(".btn-close")
    let userForm = userEl.querySelector(".users-form");
    let userList = userEl.querySelector(".user-list");
    let addUserBtn = userEl.querySelector(".add-user-btn");
    let allFormInput = userForm.querySelectorAll("input");
    let allFormSelect = userForm.querySelectorAll("select");
    let textAreaEl = userForm.querySelector("textarea");
    let allFormBtn = userForm.querySelectorAll("button");
    let togglePEl = userForm.querySelector(".toggle-password-btn");

    addUserBtn.onclick = () =>{
        if(allFormBtn[0].classList.contains("d-none")){
            allFormBtn[0].classList.remove("d-none");
            allFormBtn[1].classList.add("d-none");
            allFormInput[3].diabled = false;
            userForm.reset("");
        }
    }

    /* User register Coding */
    userForm.onsubmit = (e) =>{
        e.preventDefault();
        let userFind = users.find((item)=>item.email == allFormInput[3].value.trim().toLowerCase());
        if(userFind == undefined){
            registerFunc(userForm,users,"users");
            setTimeout(() => {
                readUserFunc(users);
                btnClose.click();
            }, 100);
        }
        else{
            swal("User Exist","This email is already registered, Please try login with your password","warning")
        }
        
    };

    /* TOGGLE PASSWOD BTN    */
    togglePEl.onclick = () =>{
        if(allFormInput[4].type == "password"){
            allFormInput[4].type = "text";
            togglePEl.innerHTML = `<i class="fa fa-eye"></i>`
        }
        else{
            allFormInput[4].type = "password";
            togglePEl.innerHTML = `<i class="fa fa-eye-slash"></i>`
        }
    }

      // del coding

    const  deleteFunc = ()=>{
        let allDelBtn = userList.querySelectorAll(".del-btn");
        allDelBtn.forEach((btn,index)=>{
            btn.onclick = async () =>{
                let cnf = await isConfirmFunc();
                if(cnf){
                    users.splice(index,1);
                    updateDataFunc(users,"users");
                    readUserFunc(users);
                }
            }
        })
    }

  //edit coding

    const editFunc = () =>{
        let allEditBtn = userList.querySelectorAll(".edit-btn");
        allEditBtn.forEach((btn,index)=>{
            btn.onclick = () =>{
                addUserBtn.click();
                let string = btn.getAttribute("data");
                let data = JSON.parse(string);
                allFormInput[1].value = data.name;
                allFormInput[2].value = data.mobile;
                allFormInput[3].value = data.email;
                allFormInput[3].disabled = true;
                allFormInput[4].value = data.password;
                allFormInput[5].value = data.fathersName ;
                data.status ? allFormInput[6].checked = true : allFormInput[6].checked = false;
                data.type == 'admin' ? allFormInput[7].checked = true : allFormInput[7].checked = false;
                data.type == 'teacher' ? allFormInput[8].checked = true : allFormInput[8].checked = false;
                data.type == 'user' ? allFormInput[9].checked = true : allFormInput[9].checked = false;
                allFormInput[10].value = data.amount ;
                allFormSelect[0].value = data.qualification;
                let options = allFormSelect[1].querySelectorAll("option");
                options.forEach((op,index)=>{
                    if(data.course && data.course.includes(op.value)){
                        op.selected = true;
                    }
                });
                textAreaEl.value = data.address;
                allFormBtn[0].classList.add("d-none");
                allFormBtn[1].classList.remove("d-none");
                allFormBtn[1].onclick = () =>{
                    registerFunc(userForm,users,"users",index,readUserFunc);
                    //window.location.reload();
                    btnClose.click();
                };

            }
        })

    }



    /* reset form and form btn */

    


    /* Read USER Coding */

    const readUserFunc = (array) =>{
        userList.innerHTML = "";
        array.forEach((item,index)=>{
            let itemString = JSON.stringify(item);
            userList.innerHTML += `
                 <div class="p-4 bg-white shadow-sm">


                        <div class="flex justify-between items-center border-b py-3">
                            <div class="flex justify-center items-center gap-3">
                                    <img src='${item.profile}' class="rounded-full w-11 h-11" alt="image">
                                    <div>
                                        <h5 class="font-semibold">${item.name}</h5>
                                        <p class="text-sm text-gray-500"><i class="fa fa-location"></i>${item.address}</p>
                                    </div>
                            </div>
                            <div class="dropdown dropstart" >
                                <button data-bs-toggle="dropdown" class="btn bg-gray-100 w-11 h-11 rounded-full flex justify-center items-center"><i class="fa solid fa-ellipsis-vertical"></i></button>
                                <div class="dropdown-menu">
                                    <button data = '${itemString}' class="flex edit-btn items-center justify-between dropdown-item text-blue-600"><i class="fa fa-edit"></i></button>
                                    <hr class="dropdown-divider">
                                    <button class="flex del-btn items-center justify-between dropdown-item text-red-600"><i class="fa fa-trash"></i></button>
                                </div>
                            </div>
                        </div>


                        <div class="my-4 flex justify-between items-center">
                            <div class="p-1 flex items-center gap-2">
                                <button  class="btn bg-green-100 text-green-900 rounded-full">
                                    <i class="fa-solid fa-indian-rupee-sign"></i>
                                </button>
                                <h5>Payment</h5>
                            </div>
                            <div class="p-2">
                                <h5 class="text-gray-500 font-semibold">${item.amount}</h5>
                            </div>
                        </div>

                        <div class="my-4 flex justify-between items-center">
                            <div class="p-1 flex justify-center items-center gap-2">
                            
                                    <button  class="flex justify-center items-center btn bg-red-100 text-red-600 w-9 h-9 rounded-full">
                                        <i class="fa-solid fa-video"></i>
                                    </button>
                            
                                <h5>Total Course</h5>
                            </div>
                            <div class="p-2">
                                <h5 class="text-gray-500 font-semibold">${item.course ? item.course.length : 0}</h5>
                            </div>
                        </div>


                        <div class="my-4 flex justify-between items-center">
                            <div class="p-1 flex items-center gap-2">
                                <button  class="btn bg-blue-100 text-blue-900 rounded-full">
                                    <i class="fa-solid fa-calendar-days"></i>
                                </button>
                                <h5>Joined</h5>
                            </div>
                            <div class="p-2">
                                <h5 class="text-gray-500 font-semibold">${formatDateFunc(item.createdAt)}</h5>
                            </div>
                        </div>


                        <div class="my-4 flex justify-between items-center">
                            <div class="p-1 flex items-center gap-2">
                                <button  class="btn bg-orange-100 text-orange-900 rounded-full">
                                    <i class="fa fa-user"></i>
                                </button>
                                <h5>Type</h5>
                            </div>
                            <div class="p-2">
                                <h5 class="text-gray-500 font-semibold">${item.type ? item.type : "none"}</h5>
                            </div>
                        </div>
                

                        


                        <div class="flex justify-between items-center ">
                            <div class="border-b bg-red-500 w-full"></div>
                            <div class="w-full flex justify-between items-center">
                                <button class="btn bg-blue-50 text-blue-600 rounded-full">
                                    <i class="fa-regular fa-envelope"></i>
                                </button>
                                <div class="border-b m-0"></div>
                                <button class="btn bg-red-50 ${item.status ? "d-none" : ""} text-red-600 rounded-full">
                                    <i class="fa-solid fa-ban"></i>
                                </button>
                                <button class="btn bg-red-50 ${item.status ? "" : "d-none"} text-red-600 rounded-full">
                                    <i class="fa-solid fa-check"></i>
                                </button>
                            </div>
                            <div class="border-b bg-red-500 w-full"></div>
                        </div>


                    </div>
            `;
        });
        deleteFunc();
        editFunc();
      
        
    }

    readUserFunc(users);

  
}