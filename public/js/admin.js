const AddScenarioFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const choices = document.querySelector('#choices').value;
  
    if (title && description && choices) {
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
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('.add-scenario-form')
    .addEventListener('submit', AddScenarioFormHandler);
  
  
  // Function to update the user list
  const updateDataList = async () => {
    try {
      const response = await fetch('/api/admin/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
  
      const source = document.getElementById('data-list').innerHTML;
      const template = Handlebars.compile(source);
      const context = { users: data };
      const html = template(context);
  
      document.getElementById('data-list').innerHTML = html;
    } catch (error) {
      console.error('Error updating data list:', error);
    }
  };