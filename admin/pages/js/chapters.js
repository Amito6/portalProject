import { 
    createOptionsFunc, 
    formatDateFunc, 
    getDataFunc, 
    registerFunc, 
    isConfirmFunc, 
    updateDataFunc 
} from "../../module/module.js";



export const chapterFunc = () =>{
    let data = getDataFunc();
    let category = data ? data.category ? data.category : [] : [];
    let courses = data ? data.courses ? data.courses : [] : [];
    let topics = data ? data.topics ? data.topics : [] : [];
    let chapters = data ? data.chapters ? data.chapters : [] : [];
    let chapterEl = document.querySelector(".chapters");
    let modal = chapterEl.querySelector("#chapter-modal");
    let btnClose = modal.querySelector(".btn-close");
    let chapterForm = chapterEl.querySelector(".chapter-form");
    let chapterCatEl = chapterForm.querySelector(".chapter-category");
    let chapterCourseEl = chapterForm.querySelector(".chapter-course");
    let chapterTopicEl = chapterForm.querySelector(".chapter-topic");
    let chapterList = chapterEl.querySelector(".chapter-list");
    let addChapterBtn = chapterEl.querySelector(".add-chapter-btn");
    let allFormInput = chapterForm.querySelectorAll("input");
    let allFormSelect = chapterForm.querySelectorAll("select");
    let allFormBtn = chapterForm.querySelectorAll("button");
    let chapterCatSel = chapterEl.querySelector(".chapter-cat-select");
    let chapterCourseSel = chapterEl.querySelector(".chapter-course-select");
    let chapterTopicSel = chapterEl.querySelector(".chapter-topic-select");



    /* Make sure the button is having submit button */    
    addChapterBtn.onclick = () =>{
        if(allFormBtn[0].classList.contains("d-none")){
            allFormBtn[0].classList.remove("d-none");
            allFormBtn[1].classList.add("d-none");
            courseForm.reset("");
        }
    }


    /* Register coding */
    chapterForm.onsubmit = (e) =>{
        e.preventDefault();
        let chapterFind = chapters.find((item)=>{
            return(
                item.course[0] == allFormSelect[1].value &&
                item.topic == allFormSelect[2].value && 
                item.name == allFormInput[0].value.trim().toLowerCase()
            )
        }
    );
        if(chapterFind == undefined){
   
            registerFunc(chapterForm,chapters,"chapters");
            setTimeout(() => {
                btnClose.click();
                readChapterFunc(chapters);
            }, 100);
        }
        else{
            swal("Chapter Exist","This Chapter Already exists","chapters")
        }
        
    }

    /* show category in form select  */
    
    createOptionsFunc(category,chapterCatEl,"categoryField");

    /* Show category in page select */
    createOptionsFunc(category,chapterCatSel,"categoryField");

    /* chow course in form select */
    chapterCatEl.onchange = () =>{
        let filterCourses =  courses.filter((item,index)=>{
            return (item.categoryName == chapterCatEl.value)
        });
        createOptionsFunc(filterCourses,chapterCourseEl,"courseName")
    };

    /* Show topic in form select */
    chapterCatSel.onchange = () =>{
        let filterCourses =  courses.filter((item,index)=>{
            return (item.categoryName == chapterCatSel.value)
        });
        createOptionsFunc(filterCourses,chapterCourseSel,"courseName")
    };

    /* Show course in page select */
    chapterCourseEl.onchange = () =>{
        let filterCourses =  topics.filter((item,index)=>{
            return (item.category == chapterCatEl.value && item.course[0] == chapterCourseEl.value)
        });
       createOptionsFunc(filterCourses,chapterTopicEl,"name")
    };

    /* Show topics in page select */
    chapterCourseSel.onchange = () =>{
        let filterCourses =  topics.filter((item,index)=>{
            return (item.category == chapterCatSel.value && item.course[0] == chapterCourseSel.value)
        });
       createOptionsFunc(filterCourses,chapterTopicSel,"name")
    };

    /* Filter Chapters at page */
    chapterTopicSel.onchange = () =>{
        let tmp = chapters.map((item,index)=>{
            return {
                ...item, 
                index : index
            }
        });

        let filterChapter = tmp.filter((item) =>{
           return (item.course[0] == chapterCourseSel.value && item.topic == chapterTopicSel.value);
        });
        readChapterFunc(filterChapter)


    }



    /* Edit function */
    const editFunc = () =>{
        let allEditBtn = chapterList.querySelectorAll(".edit-btn");
        allEditBtn.forEach((btn)=>{
            btn.onclick = () =>{
                addChapterBtn.click();
                let string = btn.getAttribute("data");
                let data = JSON.parse(string);
                let index = btn.getAttribute("index");
                allFormSelect[0].value = data.category; 
                //`<option>${data.category}</option>`
                //allFormSelect[1].value = data.course[0];
                allFormSelect[1].innerHTML = `<option>${data.course[0]}</option>`;
                //allFormSelect[2].value = data.topic;
                allFormSelect[2].innerHTML = `<option>${data.topic}</option>`;
                allFormInput[0].value = data.name;
                allFormInput[1].value = data.notes;
                allFormInput[2].value = data.video;
             
                allFormBtn[0].classList.add("d-none");
                allFormBtn[1].classList.remove("d-none");
                allFormBtn[1].onclick = () =>{
                    registerFunc(chapterForm,chapters,"chapters",index,readChapterFunc);
                    //window.location.reload();
                    btnClose.click();
                }; 

            }
        })

    }



    
      // del coding

  const  deleteFunc = ()=>{
    let allDelBtn = chapterList.querySelectorAll(".del-btn");
    allDelBtn.forEach((btn)=>{
        btn.onclick = async () =>{
            let index = btn.getAttribute("index")
            let cnf = await isConfirmFunc();
            if(cnf){
                chapters.splice(index,1);
                updateDataFunc(chapters,"chapters");
                readChapterFunc(chapters);
            }
        }
    })
  }

  
/* /* /* read course coding */
  const readChapterFunc = (array) =>{
        chapterList.innerHTML = ""
        array.forEach((item,index)=>{
            let itemString = JSON.stringify(item);
            chapterList.innerHTML += `
                 <tr>
                    <td>${index+1}</td>
                    <td>${item.category}</td>
                    <td>${item.course}</td>
                    <td>${item.topic}</td>
                    <td>${item.name}</td>
                    <td>
                        <a href="${item.notes}">${item.notes}</a>
                    </td>
                    <td>
                        <a href="${item.video}">${item.video}</a>
                    </td>
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
    readChapterFunc(chapters);
}
