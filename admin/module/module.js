import { userFunc } from "../pages/js/users.js";

let data = {};

/* Get data from local Storage */

export const getDataFunc = () =>{
    if(localStorage.getItem("data") != null){
        data = JSON.parse(localStorage.getItem("data"));
        return data;
    }
};

/* Image Handling*/

export const processImage = (img) =>{

    /* jo image aa rha hai usko base 64 mein convert krna hai,, jab bho [hoto aaye, tabhi name check karenge */
    return new Promise((resolve,reject)=>{
        if(img.name){
            let url = "";
            let freader = new FileReader();
            freader.readAsDataURL(img);
            freader.onload = (e)=>{
                /* ab url ko return krna hai save krne k liye local storage mein but ye khud ek function hai to return ni kr payega so variable ko iss data evenet ko callback se bahr define karo */
                url = e.target.result;
                resolve(url);
            }
        }   
        else{
            resolve("../../assets/images/hotelImage.jpg")
        }
    })
}

/* Register coding */

export const registerFunc = async (form,array,key) =>{
    let formData = new FormData(form);
    let courses = [];
    let tmp = {
        createdAt : new Date()
    };
    for(let data of formData.entries()){
        let props = data[0];
        let value = data[1];
        let imgUrl = typeof(value) == 'object' && await processImage(value);
        props == 'course' && courses.push(value);
        if(props == "course"){
            tmp[props] = courses;
        }
        else if(imgUrl){
            tmp[props] = imgUrl;
        }
        else{
            tmp[props] = value.trim();
        }
    }
    array.push(tmp);
    data[key] = array;
    localStorage.setItem("data",JSON.stringify(data));
    form.reset("");
    swal("Data Inserted Successfully","successfully","success")
}

/* Format date coding */
export const formatDateFunc = (dateData,isTimeReceived) =>{
    let date = new Date(dateData);
    let dd = date.getDate();
    let mm = date.getMonth()+1;
    let yy = date.getFullYear();
    let time = date.toLocaleTimeString();
    dd = dd <10 ? "0"+dd : dd;
    mm = mm <10 ? "0"+mm : mm;
    return `${dd}-${mm}-${yy} ${isTimeReceived ? time : ""}`
}

/* create options in select tag */
/* export const createOptionsFunc = (data,element) =>{
    data.forEach((item,index)=>{
        element.innerHtml += `
        <option value="${item.category}">${item.category}</option>
        `;
    })

} */

export const createOptionsFunc = (data,element) =>{
    console.log(data,element);
    element.innerHTML = `<option value = "choose category">Choose Category</option>`;
    data.forEach((item,index)=>{
        console.log(item)
        element.innerHTML += `
            <option value = "${item.category}">${item.category}</option
        `;
    })
}