export const fetchUsers = async () => {
    const response = await fetch('http://localhost:5000/users');
    return response.json();
  };
  