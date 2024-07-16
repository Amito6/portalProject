import { getDataFunc, registerFunc, formatDateFunc} from "../../module/module.js";


export const userFunc = () =>{
    let data = getDataFunc();
    let users = data ? data.users ? data.users : [] : [];
    let userEl = document.querySelector(".users");
    let modal = userEl.querySelector("#user-modal")
    let btnClose = modal.querySelector(".btn-close")
    let userForm = userEl.querySelector(".users-form");
    let userList = userEl.querySelector(".user-list")

    /* User register Coding */
    userForm.onsubmit = (e) =>{
        e.preventDefault();
        registerFunc(userForm,users,"users");
        setTimeout(() => {
            readUserFunc();
            btnClose.click();
        }, 100);
    }

    /* Read USER Coding */

    const readUserFunc = () =>{
        userList.innerHTML = "";
        users.forEach((item,index)=>{
            console.log(item)
            userList.innerHTML += `
                 <div class="p-4 bg-white shadow-sm">


                        <div class="flex justify-between items-center border-b py-3">
                            <div class="flex justify-center items-center gap-3">
                                    <img src="${item.profile}" class="rounded-full w-11 h-11" alt="image">
                                    <div>
                                        <h5 class="font-semibold">Amit</h5>
                                        <p class="text-sm text-gray-500"><i class="fa fa-location"></i>${item.address}</p>
                                    </div>
                            </div>
                            <div class="dropdown dropstart" >
                                <button data-bs-toggle="dropdown" class="btn bg-gray-100 w-11 h-11 rounded-full flex justify-center items-center"><i class="fa solid fa-ellipsis-vertical"></i></button>
                                <div class="dropdown-menu">
                                    <button class="flex items-center justify-between dropdown-item text-blue-600"><i class="fa fa-edit"></i></button>
                                    <hr class="dropdown-divider">
                                    <button class="flex items-center justify-between dropdown-item text-red-600"><i class="fa fa-trash"></i></button>
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
                                <h5 class="text-gray-500 font-semibold">12000</h5>
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
                                <h5 class="text-gray-500 font-semibold">5</h5>
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
                                <h5 class="text-gray-500 font-semibold">${item.type}</h5>
                            </div>
                        </div>
                

                        


                        <div class="flex justify-between items-center ">
                            <div class="border-b bg-red-500 w-full"></div>
                            <div class="w-full flex justify-between items-center">
                                <button class="btn bg-blue-50 text-blue-600 rounded-full">
                                    <i class="fa-regular fa-envelope"></i>
                                </button>
                                <div class="border-b m-0"></div>
                                <button class="btn bg-red-50 text-red-600 rounded-full">
                                    <i class="fa-solid fa-ban"></i>
                                </button>
                                <button class="btn bg-red-50 text-red-600 rounded-full">
                                    <i class="fa-solid fa-check"></i>
                                </button>
                            </div>
                            <div class="border-b bg-red-500 w-full"></div>
                        </div>


                    </div>
            `;
        })
    }

    readUserFunc();
}