import { 
    createOptionsFunc, 
    formatDateFunc, 
    getDataFunc, 
    registerFunc, 
    isConfirmFunc, 
    updateDataFunc 
} from "../../module/module.js";

//global variable
let courseEl = document.querySelector(".courses");
let data = getDataFunc();
let category = data ? data.category ? data.category : [] :[]

export const courseFunc = () =>{
    let data = getDataFunc();
    let courses = data ? data.courses ? data.courses : [] : [];
    let courseEl = document.querySelector(".courses");
    let modal = courseEl.querySelector("#course-modal")
    let btnClose = modal.querySelector(".btn-close")
    let courseForm = document.querySelector(".course-form");
    let courseCategoryEl = courseForm.querySelector(".course-category");
    let courseList = courseEl.querySelector(".course-list");
    console.log(courseList)

    /* Register coding */
    courseForm.onsubmit = (e) =>{
        e.preventDefault();
        registerFunc(courseForm,courses,"courses");
        setTimeout(() => {
            readCourseFunc();
            btnClose.click();
        }, 100);
    }

    /* show category in select  */
    
    /* category is an array */
    createOptionsFunc(category,courseCategoryEl);

    
      // del coding

  const  deleteFunc = ()=>{
    let allDelBtn = courseList.querySelectorAll(".del-btn");
    allDelBtn.forEach((btn,index)=>{
        btn.onclick = async () =>{
            let cnf = await isConfirmFunc();
            if(cnf){
                courses.splice(index,1);
                updateDataFunc(courses,"courses");
                readCourseFunc();
            }
        }
    })
  }

    /* /* /* read course coding */
  const readCourseFunc = () =>{
        courseList.innerHTML = ""
        courses.forEach((item,index)=>{
            courseList.innerHTML += `
                 <tr>
                    <td>${index+1}</td>
                    <td>
                        <img src="${item.thumbnail}" width="40px" alt="Thumbnail">
                    </td>
                    <td>${item.category}</td>
                    <td>${item.name}</td>
                    <td><a href="${item.link}">Link</a></td>
                    <td>${item.price}</td>
                    <td>${item.duration}s</td>
                    <td>${formatDateFunc(item.createdAt)}</td>
                    <td>
                        <button class="btn edit-btn text-blue-500"><i class="fa fa-edit"></i></button>
                        <button class="btn del-btn text-red-500"><i class="fa fa-trash"></i></button>
                    </td>
                </tr>
            `;
        });
        deleteFunc();
    }
    readCourseFunc();
}


export const categoryFunc = () =>{
    let courseEl = document.querySelector(".courses");
    let modal = courseEl.querySelector("#category-modal");
    let btnClose = modal.querySelector(".btn-close");
    let categoryList = courseEl.querySelector(".category-list")
    let categoryForm =  courseEl.querySelector(".category-form");
    let courseForm = document.querySelector(".course-form");
    let courseCategoryEl = courseForm.querySelector(".course-category");
    // store category coding
    categoryForm.onsubmit = (e)=>{
        e.preventDefault();
        registerFunc(categoryForm,category,"category");
        setTimeout(() => {
            readCatFunc();
            btnClose.click();
        }, 100);
        createOptionsFunc(category,courseCategoryEl)
        
    };

       // del coding

    const  deleteFunc = ()=>{
        let allDelBtn = categoryList.querySelectorAll(".del-btn");
        allDelBtn.forEach((btn,index)=>{
            btn.onclick = async () =>{
                let cnf = await isConfirmFunc();
                if(cnf){
                    category.splice(index,1);
                    updateDataFunc(category,"category");
                    readCatFunc();
                }
            }
        })
    }

    //read category coding

    const readCatFunc = () =>{
        /* category is an array we are getting from data stored in local storage that we are getting with getDataFunction and after passing a conditoion if that object is having any category property  */
        categoryList.innerHTML = "";
        category.forEach((item,index) =>{
            categoryList.innerHTML += `
                 <tr>
                    <td>${index+1}</td>
                    <td>${item.category}</td>
                    <td>${formatDateFunc(item.createdAt)}</td>
                    <td>
                        <button class="btn edit-btn text-blue-500"><i class="fa fa-edit"></i></button>
                        <button class="btn del-btn text-red-500"><i class="fa fa-trash"></i></button>
                    </td>
                </tr> 
            `;

        });
        deleteFunc();
    };
    readCatFunc();
}
