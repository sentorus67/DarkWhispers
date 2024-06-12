const AddScenarioFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const choices = document.querySelector('#choices').value;
  
    if (title && description && choices) {
      const response = await fetch('/api/admin/create', {
        method: 'POST',
        body: JSON.stringify({ title, description, choices }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        sessionStorage.setItem('resetLoginForm', 'true');
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  

  document
    .querySelector('.add-scenario-form')
    .addEventListener('submit', AddScenarioFormHandler);