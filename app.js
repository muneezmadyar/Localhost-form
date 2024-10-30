// function saveName() {
//     var name = document.getElementById('name').value
//     var fathername = document.getElementById('father').value
//     var Email = document.getElementById('Email').value
//     var phone = document.getElementById('phone').value
//     var CNIC = document.getElementById('CNIC').value
//     var Date = document.getElementById('Date').value
//     var Address = document.getElementById('Address').value
//     var imageFile = document.getElementById('image').files[0];
// // <---------------------------------------------------->
//     window.localStorage.setItem("first Name", name);
//     window.localStorage.setItem("father Name", fathername);
//     window.localStorage.setItem("Email", Email);
//     window.localStorage.setItem("phone", phone);
//     window.localStorage.setItem("CNIC", CNIC);
//     window.localStorage.setItem("Date", Date);
//     window.localStorage.setItem("Address", Address);

//     if (imageFile) {
//         var reader = new FileReader();
//         reader.onload = function(event) {
//             var imageBase64 = event.target.result;
//             window.localStorage.setItem("image", imageBase64);
//         };
//         reader.readAsDataURL(imageFile); // Convert image to base64
//     } 

// }

// saveName();

function generate() {
    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('father').value;
    var Email = document.getElementById('Email').value;
    var phone = document.getElementById('phone').value;
    var CNIC = document.getElementById('CNIC').value;
    var Date = document.getElementById('Date').value;
    var Address = document.getElementById('Address').value;
    var imageFile = document.getElementById('image').files[0];

    // Store data in localStorage
    localStorage.setItem("firstName", name);
    localStorage.setItem("fatherName", fatherName);
    localStorage.setItem("Email", Email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("CNIC", CNIC);
    localStorage.setItem("Date", Date);
    localStorage.setItem("Address", Address);

    // Convert the image to Base64 and store it
    if (imageFile) {
        var reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem("image", e.target.result);
            displayData(); 
        };
        reader.readAsDataURL(imageFile);
    } else {
        alert('data is not defined') 
    }
}

function displayData() {
    // Retrieve data from localStorage
    var name = localStorage.getItem("firstName");
    var fatherName = localStorage.getItem("fatherName");
    var Email = localStorage.getItem("Email");
    var phone = localStorage.getItem("phone");
    var CNIC = localStorage.getItem("CNIC");
    var Date = localStorage.getItem("Date");
    var Address = localStorage.getItem("Address");
    var imageBase64 = localStorage.getItem("image");

    
    var root = document.getElementById('root');
    root.innerHTML = ""; 

    root.innerHTML += `<p class="kee"><strong>Name:</strong> ${name}</p>`;
    root.innerHTML += `<p class="kee"><strong>Father's Name:</strong> ${fatherName}</p>`;
    root.innerHTML += `<p class="kee"><strong>Email:</strong> ${Email}</p>`;
    root.innerHTML += `<p class="kee"><strong>Phone:</strong> ${phone}</p>`;
    root.innerHTML += `<p class="kee"><strong>CNIC:</strong> ${CNIC}</p>`;
    root.innerHTML += `<p class="kee"><strong>Date of Birth:</strong> ${Date}</p>`;
    root.innerHTML += `<p class="kee"><strong>Address:</strong> ${Address}</p>`;

    if (imageBase64) {
        var img = document.createElement("img");
        img.src = imageBase64;
        img.alt = "Uploaded Image";
        img.style.width = "150px"; // Set image size if needed
        root.appendChild(img);
    }
}
