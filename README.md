# PWA Just Another Text Editor

  ## Description
  This is text editor that runs in the browser. The app is a single page application that meets PWA criteria. It features   a number of data persistence techniques and is also able to function offline. 
  
    
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  Clone the repository from GitHub, run ``` npm i ``` in your terminal. To start the application run ``` npm run start ``` in your terminal.

  [Starter code used for the project can be found here](https://github.com/coding-boot-camp/cautious-meme)

  ## Usage

### Screenshot of ``` manifest.json ``` file.
<img width="1440" alt="jate_manifest_json" src="https://github.com/jessicanwey/pwa_text_editor/assets/145372607/b374bb94-fc8f-4932-93b6-b9c43f1c262e">


### Screenshot of registered service worker.
<img width="1440" alt="jate_service_workers" src="https://github.com/jessicanwey/pwa_text_editor/assets/145372607/851c9f61-c96e-457e-b513-95a54e52c96f">


### Screenshot of IndexedDB storage.
 <img width="1440" alt="jate_indexed_db" src="https://github.com/jessicanwey/pwa_text_editor/assets/145372607/c5fdc0d7-72bf-42c9-a33b-ff3006904e1a">
 
## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```


  ## Contributing
  Please follow this link for best practices for contributing to an open source project:
  https://opensource.guide/how-to-contribute/

  ## Tests
  Use the application.

  ## Questions
  GitHub: [jessicanwey](https://github.com/jessicanwey)  
  Please contact me via email with additional questions: jessica.n.wey@gmail.com
