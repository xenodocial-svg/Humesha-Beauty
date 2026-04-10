'use strict';

// Improved form validation script
function validateForm() {
    const phoneInput = document.getElementById('whatsapp-number');
    const phonePattern = /^\+?[0-9]{10,15}$/; // Assuming international format

    if (!phonePattern.test(phoneInput.value)) {
        alert('Please enter a valid WhatsApp number.');
        return false;
    }
    return true;
}

// Example usage:
// <form onsubmit="return validateForm()">...</form>

const whatsappNumber = '919084262050';
console.log(`WhatsApp Number: ${whatsappNumber}`);