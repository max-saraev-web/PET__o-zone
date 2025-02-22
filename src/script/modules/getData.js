const getData = str =>
  fetch(`https://ozone-test-ce663-default-rtdb.europe-west1.firebasedatabase.app/goods.json?
    ${str ? `search=${str}` : ''}`)
  .then(response => response.json());

export default getData;