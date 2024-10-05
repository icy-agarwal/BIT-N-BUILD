// Handle Tab Switching
const tabLinks = document.querySelectorAll('.tab-link');

tabLinks.forEach(tab => {
    tab.addEventListener('click', () => {
        const user = tab.getAttribute('data-user');
        const action = tab.getAttribute('data-action');

        // Remove active class from all tabs of the same user
        document.querySelectorAll(.tab-link[data-user="${user}"]).forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Hide all forms of the same user
        document.querySelectorAll(#${user}-column .form-container).forEach(form => form.classList.add('hidden'));

        // Show the selected form
        document.getElementById(${user}-${action}).classList.remove('hidden');
    });
});

// Handle Customer Sign In
document.getElementById('customer-signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('cust-signin-email').value;
    // Perform validation or send data to backend here
    alert(Customer ${email} signed in successfully!);
    // Redirect to customer dashboard (placeholder)
    // window.location.href = 'customer-dashboard.html';
});

// Handle Customer Sign Up
document.getElementById('customer-signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('cust-signup-name').value;
    const email = document.getElementById('cust-signup-email').value;
    const password = document.getElementById('cust-signup-password').value;
    const confirmPassword = document.getElementById('cust-signup-password-confirm').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Perform sign up logic here (e.g., send data to backend)
    alert(Customer ${name} signed up successfully!);
    // Optionally, switch to sign in tab
    document.querySelector('.tab-link[data-user="customer"][data-action="signin"]').click();
});

// Handle Owner Sign In
document.getElementById('owner-signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('owner-signin-email').value;
    // Perform validation or send data to backend here
    alert(Bookstore Owner ${email} signed in successfully!);
    // Redirect to owner dashboard (placeholder)
    // window.location.href = 'owner-dashboard.html';
});

// Handle Owner Sign Up
document.getElementById('owner-signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const storeName = document.getElementById('owner-signup-name').value;
    const email = document.getElementById('owner-signup-email').value;
    const password = document.getElementById('owner-signup-password').value;
    const confirmPassword = document.getElementById('owner-signup-password-confirm').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Perform sign up logic here (e.g., send data to backend)
    alert(Bookstore Owner ${storeName} signed up successfully!);
    // Optionally, switch to sign in tab
    document.querySelector('.tab-link[data-user="owner"][data-action="signin"]').click();
});