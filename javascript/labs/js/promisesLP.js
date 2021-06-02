// Open the Dev Tools and click on the Network panel. Press the Escape key to open the Console drawer. You will be able to write code in the Console while seeing the traffic in the Network panel.

const loadFromStorage = key => {
    
    
  };
  
  const retrieveFromAPI = key => {
    return fetch(`https://anapioficeandfire.com/api/characters/${key}`)
      .then(getJSON);
  };
  
  const getJSON = response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Bad status code');
    }
  };
  
  const logData = data => {
    console.log(data);
    return data;
  };
  
  const extractAliases = character => {
    const {aliases} = character;
    return aliases;
  };
  
  const printAliases = aliases => {
    for (let a of aliases) {
      console.log(a);
    }
    return aliases.length;
  };
  
  const reportError = (err) => {
    console.error('There was an error', err);
    return 0;
  };
  
  const printSummary = (howMany) => {
    console.log(`We printed ${howMany} aliases`);
  };
  
  loadFromStorage('583')
    .catch(retrieveFromAPI)
    .then(logData)
    .then(extractAliases)
    .then(printAliases)
    .catch(reportError)
    .then(printSummary)
  