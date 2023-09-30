/* Add your JavaScript code here */

// Function to open the popup for admission form
function openAdmissionFormPopup() {
    var admissionFormPopup = document.getElementById('admissionFormPopup');
    admissionFormPopup.classList.add('fadeIn');
    admissionFormPopup.style.display = 'block';
  }
  
  // Function to close the popup for admission form
  function closeAdmissionFormPopup() {
    var admissionFormPopup = document.getElementById('admissionFormPopup');
    admissionFormPopup.classList.remove('fadeIn');
    admissionFormPopup.classList.add('fadeOut');
    setTimeout(function () {
      admissionFormPopup.style.display = 'none';
      admissionFormPopup.classList.remove('fadeOut');
    }, 300);
  }
  