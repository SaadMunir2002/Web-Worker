# Data Processing Web Application with Web Workers
## Description
This is a simple web application which shows us the importance of web workers in our application, although in this app i am doing just simple sorting but the purpose of the web workers can be through this. Its is designed in HTML,CSS and JS.
## How to Run Locally
You don't need anything to run this just a simple bowser.
## Performance Improvements with Web Workers
Web Workers allow the offloading of heavy computations to separate threads, preventing the main thread from being blocked. This can lead to significant performance improvements, especially for tasks that require intensive CPU processing. The application provides buttons to compare the processing time with and without Web Workers.
## Challenges Faced and Solutions
### Origin Issues with Web Workers
When running the application from the local file system, Web Workers may encounter origin issues. To address this, the project suggests using a local server or Blob URLs for the worker script.
### Displaying Results on the Web Page
Adding real-time updates and indicators, such as a loading message, required careful synchronization between the main thread and the Web Worker. The provided code includes features to display results and indicate ongoing processing.
## References and Resources
I have used these websites for help and understanding.

https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API

https://web.dev/articles/workers-basics

https://benestudio.co/web-workers-in-javascript-and-when-to-use-them/
## Link 
The demo of this project is available at this link.
https://web-workers-data-processing-app.netlify.app/
