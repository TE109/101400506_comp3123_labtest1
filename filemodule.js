const fs = require('fs');
const path = "./Logs";
function createLogFiles() {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    const content = 'Some content!';
    for (let i = 0; i < 10; i++) {
      const logFilePath = `${path}/log${i}.txt`; 
      fs.writeFile(logFilePath, content, err => {
        if (err) {
          console.error(err);
        } else {
          console.log(`log${i}.txt created successfully`);
        }
      });
    }
  }

  function deleteFiles() {
    for (let i = 0; i < 10; i++) {
      const logFilePath = `${path}/log${i}.txt`;
      fs.unlink(logFilePath, (err) => {
        if (err) {
          console.error(`Error removing file: ${err}`);
          return; 
        } else {
          console.log(`File ${logFilePath} has been successfully removed.`); 
        }
      });
    }
  }

  createLogFiles();
//   deleteFiles();