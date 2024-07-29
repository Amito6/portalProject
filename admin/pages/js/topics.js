import { 
    createOptionsFunc, 
    formatDateFunc, 
    getDataFunc, 
    registerFunc, 
    isConfirmFunc, 
    updateDataFunc 
} from "../../module/module.js";



export const topicFunc = () =>{
    let data = getDataFunc();
    let category = data ? data.category ? data.category : [] : [];
    let courses = data ? data.courses ? data.courses : [] : [];
    let topics = data ? data.topics ? data.topics : [] : [];
    let topicEl = document.querySelector(".topics");
    let modal = topicEl.querySelector("#topic-modal")
    let btnClose = modal.querySelector(".btn-close")
    let topicForm = topicEl.querySelector(".topic-form");
    let topicCatEl = topicForm.querySelector(".topic-category");
    let topicCourseEl = topicForm.querySelector(".topic-course");
    let topicList = topicEl.querySelector(".topic-list");
    let addTopicBtn = topicEl.querySelector(".add-topic-btn");
    let allFormInput = topicForm.querySelectorAll("input");
    let allFormSelect = topicForm.querySelectorAll("select");
    let allFormBtn = topicForm.querySelectorAll("button");
    let topicCatSel = topicEl.querySelector(".topics-cat-select");
    let topicCourseSel = topicEl.querySelector(".topics-course-select");


    /* Register coding */
    topicForm.onsubmit = (e) =>{
        e.preventDefault();
        let topicFind = topics.find((item)=>{
            return(
                item.course[0] == allFormSelect[1].value &&
                item.name == allFormInput[0].value.trim().toLowerCase()
            )
        }
    );
        if(topicFind == undefined){
            registerFunc(topicForm,topics,"topics");
            setTimeout(() => {
                readTopicFunc(topics);
                btnClose.click();
            }, 100);
        }   
        else{
            swal("Topic Exist","This topic is already regsitered for this course","warning")
        }
        
    }

    /* show category in form select  */
    
    createOptionsFunc(category,topicCatEl,"categoryField");

    /* Show category in UI page select */
    createOptionsFunc(category,topicCatSel,"categoryField");

    /* Filet course in form select */
    topicCatEl.onchange = () =>{
        let filterCourses =  courses.filter((item,index)=>{
        
            return (item.categoryName == topicCatEl.value)
        });
        createOptionsFunc(filterCourses,topicCourseEl,"courseName")
    }

    /* filter course in page select */
    topicCatSel.onchange = () =>{
        let filterCourses =  courses.filter((item,index)=>{
            return (item.categoryName == topicCatSel.value)
        });
        createOptionsFunc(filterCourses,topicCourseSel,"courseName")
    }


     /* Filter Toics in Topic List */
    topicCourseSel.onchange = () =>{

        let tmp = topics.map((item,index)=>{
            return {
                ...item, 
                index : index
            }
        });

        let filterTopics = tmp.filter((item) =>{
           return item.course[0] == topicCourseSel.value;
        });
        readTopicFunc(filterTopics)


    }

    /* Edit function */
    const editFunc = () =>{
        let allEditBtn = topicList.querySelectorAll(".edit-btn");
        allEditBtn.forEach((btn)=>{
            btn.onclick = () =>{
                addTopicBtn.click();
                let string = btn.getAttribute("data");
                let data = JSON.parse(string);
                let index = btn.getAttribute("index");
                allFormInput[0].value = data.name;
                allFormSelect[0].value = data.categoryName;
                allFormSelect[1].innerHTML = `<option>${data.course[0]}</option>`;
                textAreaEl.value = data.courseDesc; 
                allFormBtn[0].classList.add("d-none");
                allFormBtn[1].classList.remove("d-none");
                allFormBtn[1].onclick = () =>{
                    registerFunc(topicForm,topics,"topics",index,readTopicFunc);
                    //window.location.reload();
                    btnClose.click();
                }; 

            }
        })

    }



    
      // del coding

  const  deleteFunc = ()=>{
    let allDelBtn = topicList.querySelectorAll(".del-btn");
    allDelBtn.forEach((btn)=>{
        let index = btn.getAttribute("index");
        btn.onclick = async () =>{
            let cnf = await isConfirmFunc();
            if(cnf){
                topics.splice(index,1);
                updateDataFunc(topics,"topics");
                readTopicFunc(topics);
            }
        }
    })
  }

    /* /* /* read course coding */
  const readTopicFunc = (array) =>{
        topicList.innerHTML = ""
        array.forEach((item,index)=>{
            let itemString = JSON.stringify(item);
            topicList.innerHTML += `
                 <tr>
                    <td>${index+1}</td>
                    <td>${item.category}</td>
                    <td>${item.course}</td>
                    <td>${item.name}</td>
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
    readTopicFunc(topics);
}
