const logout = async (event) => {
  event.preventDefault();

    const response = await fetch('/api/auth/logout', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#logout').addEventListener('click', logout);

});