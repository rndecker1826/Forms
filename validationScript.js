// JavaScript code for form validation

  // Retrieve the input field value
  const form = document.getElementById('myForm');
  const input = document.getElementById('inputField');

  // Prevent form from submitting
  document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Regular expression pattern for alphanumeric input
      const inputValue = input.value.trim();
      const regex = /^[a-zA-Z0-9]*$/;

    // Function to validate inputValue
      function validate() {

    // Check if the input value matches the pattern
      if (inputValue === '') {
        alert("Value must be submitted.");
      }

      // Invalid input: display error message
        else if (!regex.test(inputValue)) {
          alert("Invalid Value: Input must be alphanumeric.");
        }

      // Valid input: display confirmation and submit the form
        else {
          alert("Input Accepted: Submission Complete.");
          form.reset();
        }
      }

      validate();
    });