async function addUser(username) {
  const response = await fetch(`en/api/adduser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  });

  const data = await response.json();

  return data;
}

export { addUser };
