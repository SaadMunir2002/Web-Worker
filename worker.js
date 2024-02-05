function processDataInWorker(data) {
    return data.sort();
  }
  
  self.onmessage = function (event) {
    const dataArray = event.data;
  
    const result = processDataInWorker(dataArray);
  
    self.postMessage(result);
  };
  
  