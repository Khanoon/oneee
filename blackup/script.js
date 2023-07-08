
// ...........อายุ
function calculateAge(birthday) {
    var today = new Date(); //วันปัจจุบัน
    var birthDate = new Date(birthday); //
    var age = today.getFullYear() - birthDate.getFullYear();
    return age;
}

document.getElementById("birthdaytime").addEventListener("change", function(event) {
    var birthdayInput = event.target;
    var age = calculateAge(birthdayInput.value);
    document.getElementById("age_me").value = age + " ปี";
});



// ......

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = Array.from(document.querySelectorAll("#form input"));
    
    var selectElement = document.getElementById("company_job");
    var employment_job = document.getElementById("employment_job");
    var mr_mrs = document.getElementById("mr_mrs");
    var blood_group = document.getElementById("blood_group");
    var NATIONALITY = document.getElementById("NATIONALITY");   
    var RELIGIONSEX = document.getElementById("RELIGION");
    var SERVICE = document.getElementById("SERVICE");   
    var STATUS_Single = document.getElementById("STATUS_Single");
    var FATHER_status = document.getElementById("FATHER_status");
    var MOTHER_status = document.getElementById("MOTHER_status");
    var EMERGENCY_mobile = document.getElementById("EMERGENCY_mobile");
    var khow_works = document.getElementById("khow_works");
    var SPEAKING_eng = document.getElementById("SPEAKING_eng");
    var READING_eng = document.getElementById("READING_eng");
    var WRITING_eng = document.getElementById("WRITING_eng");
    var SPEAKING_thai = document.getElementById("SPEAKING_thai");
    var READING_thai = document.getElementById("READING_thai");
    var WRITING_thai = document.getElementById("WRITING_thai");
    var SPEAKING_chin = document.getElementById("SPEAKING_chin");
    var READING_chin = document.getElementById("READING_chin");
    var WRITING_chin = document.getElementById("WRITING_chin");
    var SPEAKING_OTHER = document.getElementById("SPEAKING_OTHER");       
    var READING_OTHER = document.getElementById("READING_OTHER");
    var WRITING_other = document.getElementById("WRITING_other");
    var COMPANY_Yes_no = document.getElementById("COMPANY_Yes_no");





    checkRequired(inputs);
    checkSele(selectElement, employment_job, mr_mrs, blood_group, NATIONALITY, RELIGIONSEX, SERVICE, STATUS_Single, FATHER_status, MOTHER_status,EMERGENCY_mobile,khow_works,SPEAKING_eng,READING_eng,WRITING_eng
        ,SPEAKING_thai,READING_thai,WRITING_thai,SPEAKING_chin,READING_chin,WRITING_chin,SPEAKING_OTHER,READING_OTHER,WRITING_other,COMPANY_Yes_no);
});



function checkSele(selectElement, employment_job, mr_mrs, blood_group, NATIONALITY, RELIGIONSEX, SERVICE, STATUS_Single, FATHER_status, MOTHER_status,EMERGENCY_mobile,khow_works,SPEAKING_eng,READING_eng,WRITING_eng
    ,SPEAKING_thai,READING_thai,WRITING_thai,SPEAKING_chin,READING_chin,WRITING_chin,SPEAKING_OTHER,READING_OTHER,WRITING_other,COMPANY_Yes_no) {
    if (selectElement.value.trim() === '0') {
        selectElement.style.borderColor = "var(--error-color)";
    } else {
        selectElement.style.borderColor = "var(--succes-color)";
    }

    if (employment_job.value.trim() === '0') {
        employment_job.style.borderColor = "var(--error-color)";
    } else {
        employment_job.style.borderColor = "var(--succes-color)";
    }

    if (mr_mrs.value.trim() === '0') {
        mr_mrs.style.borderColor = "var(--error-color)";
    } else {
        mr_mrs.style.borderColor = "var(--succes-color)";
    }

    if (blood_group.value.trim() === '0') {
        blood_group.style.borderColor = "var(--error-color)";
    } else {
        blood_group.style.borderColor = "var(--succes-color)";
    }

    if (NATIONALITY.value.trim() === '0') {
        NATIONALITY.style.borderColor = "var(--error-color)";
    } else {
        NATIONALITY.style.borderColor = "var(--succes-color)";
    }

    if (RELIGIONSEX.value.trim() === '0') {
        RELIGIONSEX.style.borderColor = "var(--error-color)";
    } else {
        RELIGIONSEX.style.borderColor = "var(--succes-color)";
    }

    if (SERVICE.value.trim() === '0') {
        SERVICE.style.borderColor = "var(--error-color)";
    } else {
        SERVICE.style.borderColor = "var(--succes-color)";
    }

    if (STATUS_Single.value.trim() === '0') {
        STATUS_Single.style.borderColor = "var(--error-color)";
    } else {
        STATUS_Single.style.borderColor = "var(--succes-color)";
    }

    if (FATHER_status.value.trim() === '0') {
        FATHER_status.style.borderColor = "var(--error-color)";
    } else {
        FATHER_status.style.borderColor = "var(--succes-color)";
    }

    if (MOTHER_status.value.trim() === '0') {
        MOTHER_status.style.borderColor = "var(--error-color)";
    } else {
        MOTHER_status.style.borderColor = "var(--succes-color)";
    }
    if (EMERGENCY_mobile.value.trim() === '0') {
        EMERGENCY_mobile.style.borderColor = "var(--error-color)";
    } else {
        EMERGENCY_mobile.style.borderColor = "var(--succes-color)";
    }
    if (khow_works.value.trim() === '0') {
        khow_works.style.borderColor = "var(--error-color)";
    } else {
        khow_works.style.borderColor = "var(--succes-color)";
    }
    if (SPEAKING_eng.value.trim() === '0') {
        SPEAKING_eng.style.borderColor = "var(--error-color)";
    } else {
        SPEAKING_eng.style.borderColor = "var(--succes-color)";
    }
    if (READING_eng.value.trim() === '0') {
        READING_eng.style.borderColor = "var(--error-color)";
    } else {
        READING_eng.style.borderColor = "var(--succes-color)";
    }
    if (WRITING_eng.value.trim() === '0') {
        WRITING_eng.style.borderColor = "var(--error-color)";
    } else {
        WRITING_eng.style.borderColor = "var(--succes-color)";
    }
    if (SPEAKING_thai.value.trim() === '0') {
        SPEAKING_thai.style.borderColor = "var(--error-color)";
    } else {
        SPEAKING_thai.style.borderColor = "var(--succes-color)";
    }
    if (READING_thai.value.trim() === '0') {
        READING_thai.style.borderColor = "var(--error-color)";
    } else {
        READING_thai.style.borderColor = "var(--succes-color)";
    }
    if (WRITING_thai.value.trim() === '0') {
        WRITING_thai.style.borderColor = "var(--error-color)";
    } else {
        WRITING_thai.style.borderColor = "var(--succes-color)";
    }
    if (SPEAKING_chin.value.trim() === '0') {
        SPEAKING_chin.style.borderColor = "var(--error-color)";
    } else {
        SPEAKING_chin.style.borderColor = "var(--succes-color)";
    }
    if (READING_chin.value.trim() === '0') {
        READING_chin.style.borderColor = "var(--error-color)";
    } else {
        READING_chin.style.borderColor = "var(--succes-color)";
    }
    if (WRITING_chin.value.trim() === '0') {
        WRITING_chin.style.borderColor = "var(--error-color)";
    } else {
        WRITING_chin.style.borderColor = "var(--succes-color)";
    }
    if (SPEAKING_OTHER.value.trim() === '0') {
        SPEAKING_OTHER.style.borderColor = "var(--error-color)";
    } else {
        SPEAKING_OTHER.style.borderColor = "var(--succes-color)";
    }
    if (READING_OTHER.value.trim() === '0') {
        READING_OTHER.style.borderColor = "var(--error-color)";
    } else {
        READING_OTHER.style.borderColor = "var(--succes-color)";
    }
    if (WRITING_other.value.trim() === '0') {
        WRITING_other.style.borderColor = "var(--error-color)";
    } else {
        WRITING_other.style.borderColor = "var(--succes-color)";
    }
    if (COMPANY_Yes_no.value.trim() === '0') {
        COMPANY_Yes_no.style.borderColor = "var(--error-color)";
    } else {
        COMPANY_Yes_no.style.borderColor = "var(--succes-color)";
        
    }
}




document.getElementById("khow_works").addEventListener("change", function(event) {
    let maritalStatus = event.target.value;
    let divContainer = document.querySelector(".myDIV");

    if (maritalStatus === "1") {
        divContainer.style.display = " block";  // Show the divContainer
    } else {
        divContainer.style.display = "none";   // Hide the divContainer
    }
});

// ..........ปิด-เปิดกล่อง
 document.getElementById("STATUS_Single").addEventListener("change", function(event){
        let maritalStatus = event.target.value;
        let spouseNameInput = document.getElementById("spouse_name");
        let spousePhoneInput = document.getElementById("PHONE_spouse");
        let APPLICATIONInput = document.getElementById("APPLICATION");
        let COMPANY_nameInput = document.getElementById("COMPANY_name");

        if (maritalStatus === "สมรส"){
            spouseNameInput.removeAttribute('disabled');
            spousePhoneInput.removeAttribute('disabled');
            APPLICATIONInput.removeAttribute('disabled');
            COMPANY_nameInput.removeAttribute('disabled');
           
        } else {
            spouseNameInput.setAttribute('disabled', '');
            spousePhoneInput.setAttribute('disabled', '');
            APPLICATIONInput.setAttribute('disabled', '');
            COMPANY_nameInput.setAttribute('disabled', '');
        }
    });
    document.getElementById("HAD").addEventListener("change", function(event){
        let maritalStatus = event.target.value;
        let spouseNameInput = document.getElementById("DISEASE1");


        if (maritalStatus === "2"){
            spouseNameInput.removeAttribute('disabled');
           
        } else {
            spouseNameInput.setAttribute('disabled', '');
        }
    });
    document.getElementById("HAD").addEventListener("change", function(event){
        let maritalStatus = event.target.value;
        let spouseNameInput = document.getElementById("DISEASE1");


        if (maritalStatus === "2"){
            spouseNameInput.removeAttribute('disabled');
           
        } else {
            spouseNameInput.setAttribute('disabled', '');
        }
    });
    document.getElementById("hospital_day").addEventListener("change", function(event){
        let maritalStatus = event.target.value;
        let spouseNameInput = document.getElementById("DISEASE2");


        if (maritalStatus === "2"){
            spouseNameInput.removeAttribute('disabled');
           
        } else {
            spouseNameInput.setAttribute('disabled', '');
        }
    });
    document.getElementById("HAD_UNDERGONE").addEventListener("change", function(event){
        let maritalStatus = event.target.value;
        let spouseNameInput = document.getElementById("DISEASE3");


        if (maritalStatus === "2"){
            spouseNameInput.removeAttribute('disabled');
           
        } else {
            spouseNameInput.setAttribute('disabled', '');
        }
    });

    // .... เปิด-เปิด เช็คบล็อค
    document.getElementById("id_car").addEventListener("change", function(car1) {
        var checkbox = car1.target;
        var numcarInput = document.getElementById("numcar");

        if (checkbox.checked) {
            numcarInput.removeAttribute('disabled');
        } else {
            numcarInput.setAttribute('disabled', '');
        }
    });
    document.getElementById("id_car2").addEventListener("change", function(car2) {
        var checkbox = car2.target;
        var numcarInput = document.getElementById("numcar2");

        if (checkbox.checked) {
            numcarInput.removeAttribute('disabled');
        } else {
            numcarInput.setAttribute('disabled', '');
        }
    });

// ....................................................................

//checkRequired fields
function checkRequired(inputArr,B2) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input);
        } else {
            showSuccess(input);
        }
        if (input.value.trim() === '') {
            showError(input);
        } else {
            showSuccess(input);
        }
    });
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Show input error messages
function showError(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control_gknn error';
}

//show success colour
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control_gknn success';
}

// ...........Testadd
function removeFromLocalStorage(key, value) {
    // ตรวจสอบว่า localStorage มีอยู่แล้วหรือไม่
    if (localStorage) {
      // อ่านค่าที่มีอยู่ใน localStorage
      var existingData = localStorage.getItem(key);
  
      if (existingData) {
        // แปลงค่าใน localStorage จากสตริงเป็นอาเรย์
        var dataArray = JSON.parse(existingData);
  
        // ค้นหาและลบค่าในอาเรย์
        var index = dataArray.indexOf(value);
        if (index !== -1) {
          dataArray.splice(index, 1);
  
          // เชื่อมต่อค่าใหม่เป็นสตริงและเก็บลงใน localStorage
          var newData = JSON.stringify(dataArray);
          localStorage.setItem(key, newData);
        }
      }
    } else {
      console.log("ไม่สนับสนุน localStorage ในเบราว์เซอร์นี้");
    }
  }
  
  
  function addToLocalStorage(key, value) {
    // ตรวจสอบว่า localStorage มีอยู่แล้วหรือไม่
    
    if (localStorage) {
      // อ่านค่าที่มีอยู่ใน localStorage
      var existingData = localStorage.getItem(key);
  
      if (existingData) {
        // แปลงค่าใน localStorage จากสตริงเป็นอาเรย์
        var dataArray = JSON.parse(existingData);
 
  
        if (dataArray.length < 3) {
          // ตรวจสอบว่าอาเรย์ยังไม่เต็ม ก่อนที่จะเพิ่มค่าเข้าไปในอาเรย์
          dataArray.push(value);
  
          // เก็บค่าที่อัปเดตลงใน localStorage
          localStorage.setItem(key, JSON.stringify(dataArray));
        } else {
          console.log("ไม่สามารถเพิ่มค่าเข้า localStorage ได้ เพราะอาเรย์เต็มแล้ว");
        }
      } else {
        // ถ้าไม่มีค่าอยู่แล้ว จะสร้างอาเรย์ใหม่และเพิ่มค่าเข้าไปในอาเรย์
        var dataArray = [value];
  
        // เก็บค่าใหม่ลงใน localStorage
        localStorage.setItem(key, JSON.stringify(dataArray));
      }
    } else {
      console.log("ไม่สนับสนุน localStorage ในเบราว์เซอร์นี้");
    }
  }
//   ..................FormMax-3
// เปิด-เปิดการเช็คบล็อกสำหรับ id_car2
document.addEventListener('DOMContentLoaded', function() {
    const btn_from = document.getElementById('btn_from1');
    const todoList = document.getElementById('todo-list');
    window.todoItems = []; 
    window.clickCount = 0; 
  
    btn_from.addEventListener('click', function(event) {
      event.preventDefault(); 
  
      if (clickCount < 3) {
        const todoItem = document.createElement('div');
  
        const html = `
          <div class="row pt-4 px-4" id="XD-${clickCount}">
            <h6 class="col-10">TRAINING, OTHER</h6>
            <button class="col-1" onclick="deleteTodo1(${clickCount})">Delete</button>
          </div>
          <div class="row p-4">
            <div class="col-4">
              <label>สถาบัน/บริษัท</label>
              <h6>INSTITUTE/COMPANY</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="0" aria-label="Username" id="sda" value="เช่น รถล้ม " aria-describedby="addon-wrapping">
              </div>
            </div>
            <div class="col-4">
              <label>รายละเอียด</label>
              <h6>DESCRIPTION</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="0" aria-label="Username" id="sad2" value="เช่น รถล้ม " aria-describedby="addon-wrapping">
              </div>
            </div>
            <div class="col-4">
              <label>ระยะเวลาการฝึกอบรม</label>
              <h6>DURATION OF COURSE</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="0" aria-label="Username" id="sad3" value="เช่น รถล้ม " aria-describedby="addon-wrapping">
              </div>
            </div>
          </div>`;
  
        todoItem.innerHTML = html;
        window.todoItems.push(todoItem);
        todoList.appendChild(todoItem);
  
        clickCount++; 
      }
    });
  });
  function deleteTodo1(index) {
    const todoList = document.getElementById('todo-list');
    const todoItem = window.todoItems[index];
  
    todoList.removeChild(todoItem); 
    window.todoItems.splice(index, 1); 
    window.clickCount--; 
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const btn_from1 = document.getElementById('btn_from2');
    const todoList = document.getElementById('todo-list1');
    window.todoItems = []; 
    window.clickCount = 0; 
  
    btn_from1.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission
  
      if (clickCount < 3) {
        const todoItem = document.createElement('div');
  
        const html = `
          <div class="row pt-4 px-4" id="XD-${clickCount}">
            <h6 class="col-10">TRAINING, OTHER</h6>
            <button class="col-1" onclick="deleteTodo(${clickCount})">Delete</button>
          </div>
          <div class="row p-4">
            <div class="col-4">
              <label>สถาบัน/บริษัท</label>
              <h6>INSTITUTE/COMPANY</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="0" aria-label="Username" id="sda" value="เช่น รถล้ม " aria-describedby="addon-wrapping">
              </div>
            </div>
            <div class="col-4">
              <label>รายละเอียด</label>
              <h6>DESCRIPTION</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="0" aria-label="Username" id="sad2" value="เช่น รถล้ม " aria-describedby="addon-wrapping">
              </div>
            </div>
            <div class="col-4">
              <label>ระยะเวลาการฝึกอบรม</label>
              <h6>DURATION OF COURSE</h6>
              <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="0" aria-label="Username" id="sad3" value="เช่น รถล้ม " aria-describedby="addon-wrapping">
              </div>
            </div>
          </div>`;
  
        todoItem.innerHTML = html;
        window.todoItems.push(todoItem);
        todoList.appendChild(todoItem);
  
        clickCount++; 
      }
    });
  });
  
  function deleteTodo(index) {
    const todoItemsContainer = document.getElementById('todo-list1');
    const todoItem = todoItemsContainer.children[index];
    todoItemsContainer.removeChild(todoItem); 
    clickCount=0; 
  }
  