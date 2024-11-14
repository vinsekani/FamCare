function displayPatientDashboard(admissionNumber) {
    const patientData = JSON.parse(localStorage.getItem(admissionNumber));

    if (!patientData) {
        alert('Patient data not found.');
        return;
    }

    document.getElementById('patientName').innerText = patientData.fullName;
    document.getElementById('patientGender').innerText = patientData.gender;
    document.getElementById('patientFullName').innerText = patientData.fullName;
    document.getElementById('patientDob').innerText = patientData.dob;
    document.getElementById('patientId').innerText = patientData.id;
    document.getElementById('patientAdmissionDate').innerText = patientData.admissionDate;
    document.getElementById('patientAdmissionNo').innerText = admissionNumber;

    const metrics = patientData.metrics || {};
    document.getElementById('bloodPressure').innerText = metrics.bloodPressure || '-';
    document.getElementById('weight').innerText = metrics.weight || '-';
    document.getElementById('bodyTemperature').innerText = metrics.bodyTemperature || '-';
    document.getElementById('glucose').innerText = metrics.glucose || '-';
    document.getElementById('heartRate').innerText = metrics.heartRate || '-';
    document.getElementById('sleepTime').innerText = metrics.sleepTime || '-';

    document.getElementById('patientDashboard').style.display = 'block';
}

let subMenu = document.getElementById("subMenu");

function toggleMenu() {
    subMenu.classList.toggle("open-menu");
}

function openAddPatientModal(event) {
    event.stopPropagation();
    document.getElementById('addPatientModal').classList.add("open");
}

function closeModal() {
    document.getElementById('addPatientModal').classList.remove("open");
}

function addLinkedPatient() {
    const admissionNumber = document.getElementById('admissionNumberInput').value;
    
    if (!admissionNumber.endsWith('@gmail.com')) {
        alert('Admission number must end with @gmail.com');
        return;
    }

    const patientData = localStorage.getItem(admissionNumber);
    
    if (!patientData) {
        alert('Patient not found.');
        return;
    }

    let patient;
    try {
        patient = JSON.parse(patientData);
    } catch (error) {
        alert('Error parsing patient data.');
        return;
    }

    const linkedPatientsContainer = document.getElementById('linkedPatients');
    const accountItem = document.createElement('div');
    accountItem.classList.add('account-item');
    
    accountItem.innerHTML = `
        <div class="account-info">
            <i class="fa-solid fa-user-circle"></i>
            <div class="account-details">
                <strong>${patient.fullName}</strong>
                <p>${admissionNumber}</p>
            </div>
        </div>
        <div class="account-actions">
            <button class="unlink" onclick="unlinkPatient('${admissionNumber}')">Unlink</button>
            <button onclick="displayPatientDashboard('${admissionNumber}')">Go to Account</button>
        </div>
    `;

    linkedPatientsContainer.appendChild(accountItem);
    closeModal();
}

function unlinkPatient(admissionNumber) {
    const linkedPatientsContainer = document.getElementById('linkedPatients');
    const accountItems = linkedPatientsContainer.querySelectorAll('.account-item');
    
    accountItems.forEach(item => {
        if (item.querySelector('p').textContent === admissionNumber) {
            linkedPatientsContainer.removeChild(item);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addPatientModal').classList.remove("open");
    document.getElementById('patientDashboard').style.display = 'none';
});


function addLinkedPatient() {
    const admissionNumber = document.getElementById('admissionNumberInput').value;
    
    if (!admissionNumber.endsWith('@gmail.com')) {
        alert('Admission number must end with @gmail.com');
        return;
    }

    const patientData = localStorage.getItem(admissionNumber);
    
    if (!patientData) {
        alert('Patient not found.');
        return;
    }

    let patient;
    try {
        patient = JSON.parse(patientData);
    } catch (error) {
        alert('Error parsing patient data.');
        return;
    }

    const linkedPatientsContainer = document.getElementById('linkedPatients');
    const accountItem = document.createElement('div');
    accountItem.classList.add('account-item');
    
    accountItem.innerHTML = `
        <div class="account-info">
            <i class="fa-solid fa-user-circle"></i>
            <div class="account-details">
                <strong>${patient.fullName}</strong>
                <p>${admissionNumber}</p>
            </div>
        </div>
        <div class="account-actions">
            <button class="unlink" onclick="unlinkPatient('${admissionNumber}')">Unlink</button>
            <button onclick="goToPatientAccount('${admissionNumber}')">Go to Account</button>
        </div>
    `;

    linkedPatientsContainer.appendChild(accountItem);
    closeModal();
}

function goToPatientAccount(admissionNumber) {
    window.location.href = `sasha.html?admissionNumber=${admissionNumber}`;
}