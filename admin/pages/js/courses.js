import { 
    createOptionsFunc, 
    formatDateFunc, 
    getDataFunc, 
    registerFunc, 
    isConfirmFunc, 
    updateDataFunc 
} from "../../module/module.js";

//global variable
let data = getDataFunc();
let category = data ? data.category ? data.category : [] :[]

export const courseFunc = () =>{
    let courseEl = document.querySelector(".courses");
    let courses = data ? data.courses ? data.courses : [] : [];
    let modal = courseEl.querySelector("#course-modal")
    let btnClose = modal.querySelector(".btn-close")
    let courseForm = document.querySelector(".course-form");
    let courseCategoryEl = courseForm.querySelector(".course-category");/* select tag in the form , i beleive line no 27 is also same*/
    let courseList = courseEl.querySelector(".course-list");
    let addCourseBtn = courseEl.querySelector(".add-course-btn")
    let allFormInput = courseForm.querySelectorAll("input");
    let textAreaEl = courseForm.querySelector("textarea");
    let allFormSelect = courseForm.querySelectorAll("select");
    let allFormBtn = courseForm.querySelectorAll("button");
    let courseCatSel = courseEl.querySelector(".course-cat-select");


    /* Modal Reset */
    addCourseBtn.onclick = () =>{
        if(allFormBtn[0].classList.contains("d-none")){
            allFormBtn[0].classList.remove("d-none");
            allFormBtn[1].classList.add("d-none");
            courseForm.reset("");
        }
    }

    /* Register coding */
    courseForm.onsubmit = (e) =>{
        e.preventDefault();
        let courseFind = courses.find((item)=>item.courseName == allFormInput[1].value.trim().toLowerCase());
        if(courseFind == undefined){
            registerFunc(courseForm,courses,"courses");
            setTimeout(() => {
                readCourseFunc(courses);
                btnClose.click();
            }, 100);
        }
        else{
            swal("Course Exists","This course is already existed","warning")
        }
       
    }

    /* show category in select  */
    
    /* category is an array */
    createOptionsFunc(category,courseCategoryEl,"categoryField");
    createOptionsFunc(category,courseCatSel,"categoryField");


    /* Filter data for Select Tags */
    courseCatSel.onchange = () =>{
        let tmp = courses.map((item,index)=>{
            return {
                ...item, 
                index : index
            }
        });

        let filterCourses = tmp.filter((item) =>{
           return item.categoryName == courseCatSel.value;
        });
        readCourseFunc(filterCourses)


    }
   
     

    /* Edit function */
    const editFunc = () =>{
        let allEditBtn = courseList.querySelectorAll(".edit-btn");
        allEditBtn.forEach((btn)=>{
            btn.onclick = () =>{
                addCourseBtn.click();
                let index = btn.getAttribute("index");
                let string = btn.getAttribute("data");
                let data = JSON.parse(string);
                allFormInput[1].value = data.courseName;
                allFormInput[2].value = data.duration;             
                allFormInput[3].value = data.courseLink;             
                allFormInput[4].value = data.coursePrice;   
                data.live ? allFormInput[5].checked = true : allFormInput[4].checked = false;
                data.free ? allFormInput[6].checked = true : allFormInput[5].checked = false;
                allFormSelect[0].value = data.categoryName;
                textAreaEl.value = data.courseDesc; 
                allFormBtn[0].classList.add("d-none");
                allFormBtn[1].classList.remove("d-none");
                allFormBtn[1].onclick = () =>{
                    registerFunc(courseForm,courses,"courses",index,readCourseFunc);
                    //window.location.reload();
                    btnClose.click();
                }; 

            }
        })

    }



    
    // del coding

    const  deleteFunc = ()=>{
        let allDelBtn = courseList.querySelectorAll(".del-btn");
        allDelBtn.forEach((btn)=>{
            btn.onclick = async () =>{
                let index = btn.getAttribute("index");
                let cnf = await isConfirmFunc();
                if(cnf){
                    courses.splice(index,1);
                    updateDataFunc(courses,"courses");
                    readCourseFunc(courses);
                }
            }
        })
    }

    /* /* /* read course coding */
    const readCourseFunc = (array) =>{
            courseList.innerHTML = ""
            array.forEach((item,index)=>{
                let itemString = JSON.stringify(item);
                courseList.innerHTML += `
                    <tr>
                        <td>${index+1}</td>
                        <td class="flex justify-center align-items-center">
                        <img src="${item.profile}" width="40px" alt="Thumbnail">
                        </td>
                        <td>${item.categoryName}</td>
                        <td>${item.courseName}</td>
                        <td><a href="${item.courseLink}" style="text-decoration : underline;">Link</a></td>
                        <td>${item.coursePrice}</td>
                        <td>${item.duration}</td>
                        <td>${formatDateFunc(item.createdAt)}</td>
                        <td>
                            <button index="${item.index ? item.index : index}" data='${itemString}' class="btn edit-btn text-blue-500"><i class="fa fa-edit"></i></button>
                            <button index="${item.index ? item.index : index}" class="btn del-btn text-red-500"><i class="fa fa-trash"></i></button>
                        </td>
                    </tr>
                `;
            });
            deleteFunc();
            editFunc();
        }
    readCourseFunc(courses);
    }


export const categoryFunc = () =>{
    let courseEl = document.querySelector(".courses");
    let data = getDataFunc();
    let modal = courseEl.querySelector("#category-modal");
    let btnClose = modal.querySelector(".btn-close");
    let categoryList = courseEl.querySelector(".category-list")
    let categoryForm =  courseEl.querySelector(".category-form");
    let courseForm = courseEl.querySelector(".course-form");
    let courseCategoryEl = courseForm.querySelector(".course-category");
    let addCatBtn = courseEl.querySelector(".add-category-btn");
    let allFormInput = categoryForm.querySelectorAll("input");
    let allFormBtn = categoryForm.querySelectorAll("button");
    let courseCatSel = courseEl.querySelector(".course-cat-select");

    addCatBtn.onclick = () =>{
        if(allFormBtn[0].classList.contains("d-none")){
            allFormBtn[0].classList.remove("d-none");
            allFormBtn[1].classList.add("d-none");
            categoryForm.reset("");
        }
    }

    // store category coding
    categoryForm.onsubmit = (e)=>{
        e.preventDefault();
        let categoryFind = category.find((item)=>item.categoryField == allFormInput[0].value.trim().toLowerCase());
        if(categoryFind == undefined){
        registerFunc(categoryForm,category,"category");
        setTimeout(() => {
            btnClose.click();
            readCatFunc(category);
        }, 100);
        createOptionsFunc(category,courseCategoryEl,"categoryField")
        createOptionsFunc(category,courseCatSel,"categoryField")
    }
    else{
        swal("Category Exists","This category is already existed","warning")
    }
    };

     

    /* Edit function */
    const editFunc = () =>{
        let allEditBtn = categoryList.querySelectorAll(".edit-btn");
        allEditBtn.forEach((btn,index)=>{
            btn.onclick = () =>{
                addCatBtn.click();
                let string = btn.getAttribute("data");
                let data = JSON.parse(string);
            
                allFormInput[0].value = data.categoryField;
                
                allFormBtn[0].classList.add("d-none");
                allFormBtn[1].classList.remove("d-none");
                allFormBtn[1].onclick = () =>{
                    registerFunc(categoryForm,category,"category",index,readCatFunc);
                    //window.location.reload();
                    
                    createOptionsFunc(category,courseCategoryEl,"categoryField");
                    createOptionsFunc(category,courseCatSel,"categoryField");
                    btnClose.click();
                }; 

            }
        })

    }

       // del coding

    const  deleteFunc = ()=>{
        let allDelBtn = categoryList.querySelectorAll(".del-btn");
        allDelBtn.forEach((btn,index)=>{
            btn.onclick = async () =>{
               
                let cnf = await isConfirmFunc();
                if(cnf){
                    category.splice(index,1);
                    updateDataFunc(category,"category");
                    readCatFunc(category);
                }
            }
        })
    }

    //read category coding

    const readCatFunc = (array) =>{
        /* category is an array we are getting from data stored in local storage that we are getting with getDataFunction and after passing a conditoion if that object is having any category property  */
        categoryList.innerHTML = "";
        array.forEach((item,index) =>{
            let itemString = JSON.stringify(item);
            categoryList.innerHTML += `
                 <tr>
                    <td>${index+1}</td>
                    <td>${item.categoryField}</td>
                    <td>${formatDateFunc(item.createdAt)}</td>
                    <td>
                        <button  data='${itemString}' class="btn edit-btn text-blue-500"><i class="fa fa-edit"></i></button>
                        <button  class="btn del-btn text-red-500"><i class="fa fa-trash"></i></button>
                    </td>
                </tr> 
            `;

        });
        deleteFunc();
        editFunc();
    };
    readCatFunc(category);
}
