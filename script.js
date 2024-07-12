function contact() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone_number').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var whatsappurlc = "https://wa.me/9022556788?text="
        + "Name: " + name + "%0a"
        + "Phone: " + phone + "%0a"
        + "Email: " + email + "%0a"
        + "Message: " + message + "%0a"
        + "Please contact me for further queries.";

    window.open(whatsappurlc, "_blank").focus();
}


function toggleSubmitButton() {
    var checkBox = document.getElementById('gridCheck');
    var submitButton = document.getElementById('submit_btn');
    var resetButton = document.getElementById('reset_btn');

    if (checkBox.checked) {
        submitButton.style.display = 'block';
        resetButton.style.display = 'none';
    } else {
        submitButton.style.display = 'none';
        resetButton.style.display = 'block';
    }
}


function whatsapp() {
    // Fetch all form fields
    var firstName = document.getElementById('first_name').value;
    var middleName = document.getElementById('middle_name').value;
    var lastName = document.getElementById('last_name').value;
    var dob = document.getElementById('date_of_birth').value;
    var contactNumber = document.getElementById('contact_number').value;
    var aadharNumber = document.getElementById('aadhar_number').value;
    var panNumber = document.getElementById('pan_number').value;
    var qualification = document.getElementById('qualification').value;
    var university_name = document.getElementById('university_name').value;
    var passing_year = document.getElementById('passing_year').value;

    var marital_status = document.getElementById('marital_status').value;
    var spouse_name = document.getElementById('spouse_name').value;
    var spouse_dob = document.getElementById('spouse_dob').value;
    var father_name = document.getElementById('father_name').value;
    var mother_name = document.getElementById('mother_name').value;
    var num_of_dependents = document.getElementById('num_of_dependents').value;

    var type_of_residence = document.getElementById('type_of_residence').value;
    var rent_amount = document.getElementById('rent_amount').value;
    var num_years_at_c_address = document.getElementById('num_years_at_c_address').value;
    var num_years_at_city = document.getElementById('num_years_at_city').value;
    var curr_address = document.getElementById('curr_address').value;
    var per_address = document.getElementById('per_address').value;

    var email_official = document.getElementById('email_official').value;
    var email_personal = document.getElementById('email_personal').value;
    var company_name = document.getElementById('company_name').value;
    var Office_landline_number = document.getElementById('Office_landline_number').value;
    var net_salary = document.getElementById('net_salary').value;
    var num_years_at_cur_office = document.getElementById('num_years_at_cur_office').value;
    var office_address = document.getElementById('office_address').value;

    var bank_name = document.getElementById('bank_name').value;
    var acc_number = document.getElementById('acc_number').value;
    var ifsc_code = document.getElementById('ifsc_code').value;
    var openend_year = document.getElementById('openend_year').value;
    var branch_name = document.getElementById('branch_name').value;

    var name_relative = document.getElementById('name_relative').value;
    var contact_relative = document.getElementById('contact_relative').value;
    var address_relative = document.getElementById('address_relative').value;
    var name_friend = document.getElementById('name_friend').value;
    var contact_friend = document.getElementById('contact_friend').value;
    var address_friend = document.getElementById('address_friend').value;

    var name_creditor = document.getElementById('name_creditor').value;
    var contact_creditor = document.getElementById('contact_creditor').value;
    var address_creditor = document.getElementById('address_creditor').value;
    var name_debitor = document.getElementById('name_debitor').value;
    var contact_debitor = document.getElementById('contact_debitor').value;
    var address_debitor = document.getElementById('address_debitor').value;

    var whatsappurl = "https://wa.me/9022556788?text="
        + "Applicant Details: " + "%0a"
        + "First Name: " + firstName + "%0a"
        + "Middle Name: " + middleName + "%0a"
        + "Last Name: " + lastName + "%0a"
        + "Date of Birth: " + dob + "%0a"
        + "Contact Number: " + contactNumber + "%0a"
        + "Aadhar Number: " + aadharNumber + "%0a"
        + "Pan Number: " + panNumber + "%0a"
        + "Qualification: " + qualification + "%0a"
        + "University Name: " + university_name + "%0a"
        + "Passing Year: " + passing_year + "%0a %0a"

        + "Family Details: " + "%0a"
        + "Marital Status: " + marital_status + "%0a"
        + "Spouse Name: " + spouse_name + "%0a"
        + "Spouse DOB: " + spouse_dob + "%0a"
        + "Father Name: " + father_name + "%0a"
        + "Mother Name: " + mother_name + "%0a"
        + "No of Dependents: " + num_of_dependents + "%0a %0a"

        + "Residence Details: " + "%0a"
        + "Type of Residence: " + type_of_residence + "%0a"
        + "Rent amount: " + rent_amount + "%0a"
        + "No of years at current address: " + num_years_at_c_address + "%0a"
        + "No of years at city: " + num_years_at_city + "%0a"
        + "Current Address: " + curr_address + "%0a"
        + "Permenent Address: " + per_address + "%0a %0a"

        + "Official Details: " + "%0a"
        + "Email Official: " + email_official + "%0a"
        + "Email Personal: " + email_personal + "%0a"
        + "Company Name: " + company_name + "%0a"
        + "Office Landline Number: " + Office_landline_number + "%0a"
        + "Net Salary: " + net_salary + "%0a"
        + "No of years at current office: " + num_years_at_cur_office + "%0a"
        + "Office Address: " + office_address + "%0a %0a"

        + "Bank Details: " + "%0a"
        + "Bank Name: " + bank_name + "%0a"
        + "Acc Number: " + acc_number + "%0a"
        + "IFSC Code: " + ifsc_code + "%0a"
        + "Openend Year: " + openend_year + "%0a"
        + "Branch Name: " + branch_name + "%0a %0a"

        + "References: " + "%0a"
        + "Name (relative): " + name_relative + "%0a"
        + "Contact (relative): " + contact_relative + "%0a"
        + "Address (relative): " + address_relative + "%0a"
        + "Name (friend): " + name_friend + "%0a"
        + "Contact (friend): " + contact_friend + "%0a"
        + "Address (friend): " + address_friend + "%0a %0a"

        + "Trade References: " + "%0a"
        + "Name (creditor): " + name_creditor + "%0a"
        + "Contact (creditor): " + contact_creditor + "%0a"
        + "Address (creditor): " + address_creditor + "%0a"
        + "Name (debitor): " + name_debitor + "%0a"
        + "Contact (debitor): " + contact_debitor + "%0a"
        + "Address (debitor): " + address_debitor;

    window.open(whatsappurl, "_blank").focus();
}


function validateForm() {
    // Fetch all form fields
    var firstName = document.getElementById('first_name').value;
    var middleName = document.getElementById('middle_name').value;
    var lastName = document.getElementById('last_name').value;
    var dob = document.getElementById('date_of_birth').value;
    var contactNumber = document.getElementById('contact_number').value;
    var aadharNumber = document.getElementById('aadhar_number').value;
    var panNumber = document.getElementById('pan_number').value;
    var qualification = document.getElementById('qualification').value;
    var university_name = document.getElementById('university_name').value;
    var passing_year = document.getElementById('passing_year').value;

    var marital_status = document.getElementById('marital_status').value;
    var spouse_name = document.getElementById('spouse_name').value;
    var spouse_dob = document.getElementById('spouse_dob').value;
    var father_name = document.getElementById('father_name').value;
    var mother_name = document.getElementById('mother_name').value;
    var num_of_dependents = document.getElementById('num_of_dependents').value;

    var type_of_residence = document.getElementById('type_of_residence').value;
    var rent_amount = document.getElementById('rent_amount').value;
    var num_years_at_c_address = document.getElementById('num_years_at_c_address').value;
    var num_years_at_city = document.getElementById('num_years_at_city').value;
    var curr_address = document.getElementById('curr_address').value;
    var per_address = document.getElementById('per_address').value;

    var email_official = document.getElementById('email_official').value;
    var email_personal = document.getElementById('email_personal').value;
    var company_name = document.getElementById('company_name').value;
    var office_landline_number = document.getElementById('Office_landline_number').value;
    var net_salary = document.getElementById('net_salary').value;
    var num_years_at_cur_office = document.getElementById('num_years_at_cur_office').value;
    var office_address = document.getElementById('office_address').value;

    var bank_name = document.getElementById('bank_name').value;
    var acc_number = document.getElementById('acc_number').value;
    var ifsc_code = document.getElementById('ifsc_code').value;
    var openend_year = document.getElementById('openend_year').value;
    var branch_name = document.getElementById('branch_name').value;

    var name_relative = document.getElementById('name_relative').value;
    var contact_relative = document.getElementById('contact_relative').value;
    var address_relative = document.getElementById('address_relative').value;
    var name_friend = document.getElementById('name_friend').value;
    var contact_friend = document.getElementById('contact_friend').value;
    var address_friend = document.getElementById('address_friend').value;

    var name_creditor = document.getElementById('name_creditor').value;
    var contact_creditor = document.getElementById('contact_creditor').value;
    var address_creditor = document.getElementById('address_creditor').value;
    var name_debitor = document.getElementById('name_debitor').value;
    var contact_debitor = document.getElementById('contact_debitor').value;
    var address_debitor = document.getElementById('address_debitor').value;

    //  || name_creditor === '' || contact_creditor === '' || address_creditor === '' || name_debitor === '' || contact_debitor === '' || address_debitor === ''

    // Simple validation
    if (firstName === '' || middleName === '' || lastName === '' || dob === '' || contactNumber === '' || aadharNumber === '' || panNumber === '' || qualification === '' || university_name === '' || passing_year === '' || marital_status === '' || father_name === '' || mother_name === '' || num_of_dependents === '' || type_of_residence === '' || rent_amount === '' || num_years_at_c_address === '' || num_years_at_city === '' || curr_address === '' || per_address === '' || email_official === '' || email_personal === '' || company_name === '' || office_landline_number === '' || net_salary === '' || num_years_at_cur_office === '' || office_address === '' || bank_name === '' || acc_number === '' || ifsc_code === '' || openend_year === '' || branch_name === '' || name_relative === '' || contact_relative === '' || address_relative === '' || name_friend === '' || contact_friend === '' || address_friend === '') {
        alert('Please fill out all required fields.');
        return false;
    }
    else {
        whatsapp();
    }
}