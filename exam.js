function updateCount(textarea) {
    let regNumbers = textarea.value.trim();
    let count = regNumbers ? regNumbers.split(/\s+/).length : 0;
    textarea.nextElementSibling.querySelector(".count").textContent = count;
}

function addFields() {
    let formArea = document.getElementById("formArea");
    let newForm = document.createElement("div");
    newForm.classList.add("form-container");
    newForm.innerHTML = `
        <button class="close-btn" onclick="removeForm(this)">X</button>
        <label for="subjectCode">Subject Code:</label>
        <input type="text" class="subjectCode" placeholder="Enter Subject Code">
        <label for="department">Department:</label>
        <select class="department">
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="Civil">Civil</option>
            <option value="Mech">Mech</option>
        </select>
        <label for="year">Year:</label>
        <select class="year">
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
        </select>
        <label for="regNumbers">Registration Numbers:</label>
        <textarea class="regNumbers" placeholder="Enter numbers like 1101 1102 1103" oninput="updateCount(this)"></textarea>
        <p>Total Count: <span class="count">0</span></p>
        <button onclick="addFields()">Add</button>
    `;
    formArea.appendChild(newForm);
}

function removeForm(button) {
    button.parentElement.remove();
}

function submitData() {
    let forms = document.querySelectorAll(".form-container");
    let data = [];
    forms.forEach(form => {
        let subjectCode = form.querySelector(".subjectCode").value;
        let department = form.querySelector(".department").value;
        let year = form.querySelector(".year").value;
        let regNumbers = form.querySelector(".regNumbers").value;
        data.push({ subjectCode, department, year, regNumbers });
    });
    console.log("Submitted Data:", data);
    alert("Data submitted! Check console for values.");

    
}



