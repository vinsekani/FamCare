let selectedPatient = null;

function togglePatientBox() {
    const patientList = document.getElementById("patientList");
    patientList.style.display = patientList.style.display === "none" ? "block" : "none";
}

function openAddPatientModal(event) {
    event.stopPropagation();
    document.getElementById('addPatientModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('addPatientModal').style.display = 'none';
    document.getElementById('updateMetricsModal').style.display = 'none';
}

function addPatient() {
    const fullName = document.getElementById('fullName').value;
    const gender = document.getElementById('gender')
    const dob = document.getElementById('dob').value;
    const id = document.getElementById('id').value;
    const admissionDate = document.getElementById('admissionDate').value;
    const admissionNo = document.getElementById('admissionNo').value;

    if (!admissionNo.endsWith('@gmail.com')) {
        alert('Admission number must end with @gmail.com');
        return;
    }

    const patient = { fullName, gender, dob, id, admissionDate, admissionNo, metrics: {} };
    localStorage.setItem(admissionNo, JSON.stringify(patient));

    updatePatientList();
    closeModal();
    alert('Patient added successfully');
}

function updatePatientList() {
    const patientList = document.getElementById('patientList');
    patientList.innerHTML = '';
    let count = 0;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.endsWith('@gmail.com')) {
            const patient = JSON.parse(localStorage.getItem(key));
            const patientDiv = document.createElement('div');
            patientDiv.textContent = patient.fullName;
            patientDiv.onclick = () => openUpdateMetricsModal(key);
            patientList.appendChild(patientDiv);
            count++;
        }
    }

    document.getElementById('patientCount').innerText = count;
}

function openUpdateMetricsModal(admissionNo) {
    selectedPatient = admissionNo;
    document.getElementById('updateMetricsModal').style.display = 'block';
}

function updateMetrics() {
    if (!selectedPatient) return;

    const bloodPressure = document.getElementById('bloodPressure').value;
    const bodyTemperature = document.getElementById('bodyTemperature').value;
    const heartRate = document.getElementById('heartRate').value;
    const weight = document.getElementById('weight').value;
    const glucose = document.getElementById('glucose').value;
    const sleepTime = document.getElementById('sleepTime').value;

    const patientData = JSON.parse(localStorage.getItem(selectedPatient));
    patientData.metrics = { bloodPressure, bodyTemperature, heartRate, weight, glucose, sleepTime };
    localStorage.setItem(selectedPatient, JSON.stringify(patientData));

    closeModal();
    alert('Metrics updated successfully');
}

document.addEventListener('DOMContentLoaded', updatePatientList);
