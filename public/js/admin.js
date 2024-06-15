const AddScenarioFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const choice1 = document.querySelector('#choice1').value;
    const choice2 = document.querySelector('#choice2').value;
    const choices = [choice1, choice2];

    if (title && description && choices.length > 0) {
        const response = await fetch('/api/admin/create', {
            method: 'POST',
            body: JSON.stringify(
                {
                    title,
                    description,
                    choices
                }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            sessionStorage.setItem('resetLoginForm', 'true');
            document.location.replace('/admin');
            alert('Scenario added!');
        } else {
            alert('Failed to create scenario.');
        }
    }
};

document.addEventListener("DOMContentLoaded", function () {
    // Ensure form event listener is attached after DOM is loaded
    document
        .querySelector('#add-scenario-form')
        .addEventListener('submit', AddScenarioFormHandler);

    // Ensure the event listener for the button is attached after DOM is loaded
    document.getElementById('get-users-btn').addEventListener('click', () => {
        window.location.href = '/api/admin/users';
    });
});