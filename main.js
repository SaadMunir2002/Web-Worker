function generateRandomArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.random());
    }
    return array;
}

function processData(data) {
    return data.sort();
}

function processDataWithoutWorker() {
    document.getElementById("result").style.display = "none";
    const dataArray = generateRandomArray(10000000);
    const loadingMessage = document.getElementById("loading-message");
    loadingMessage.style.display = "block";
    const startTime = performance.now();
    console.time("Without Worker");
    const result = processData(dataArray);
    console.timeEnd("Without Worker");
    loadingMessage.style.display = "none";
    displayResult(result, "Without Worker", startTime);
}

function displayResult(result, processingType,startTime) {
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    const endTime = performance.now();
    const elapsedTime = (endTime - startTime) / 1000;

    resultDiv.innerHTML = `<p>Result Length: ${result.length}</p>
                           <p>Processing Time (${processingType}): ${elapsedTime.toFixed(2)} seconds</p>`;
}

function processDataWithWorker() {
    document.getElementById("result").style.display = "none";
    const dataArray = generateRandomArray(10000000);
    const worker = new Worker("worker.js");
    const loadingMessage = document.getElementById("loading-message");
    loadingMessage.style.display = "block";
    const startTime = performance.now();
    console.time("With Worker");

    worker.postMessage(dataArray);

    worker.onmessage = function (event) {
        const result = event.data;
        console.timeEnd("With Worker");
        loadingMessage.style.display = "none";
        displayResult(result, "With Worker", startTime);
        worker.terminate();
    };
    worker.onerror = function (error) {
        console.error("Error in Web Worker:", error);
        loadingMessage.style.display = "none";
      };
}
