// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let readmeBadge = "";
let readmeLink = "";
let readmeLicense = "";

function renderLicense(license) {
  //Defines different license options as objects
  const apacheLicense = {
    badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]",
    link: "https://opensource.org/licenses/Apache-2.0",
    wording: `
[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
    `    
  }
  const mitLicense = {
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    link: "https://opensource.org/licenses/MIT",
    wording: `
[MIT License](https://opensource.org/licenses/MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
          
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      `
  }
  const noLicense = {
    badge: "",
    link: "",
    wording: "No Applicable License"
  }
  switch (license) {
    default:
      readmeBadge = noLicense.badge;
      readmeLink = noLicense.link;
      readmeLicense = noLicense.wording;
      break;
    case "Apache 2.0":
      readmeBadge = apacheLicense.badge;
      readmeLink = apacheLicense.link;
      readmeLicense = apacheLicense.wording;
      break;
    case "MIT":
      readmeBadge = mitLicense.badge;
      readmeLink = mitLicense.link;
      readmeLicense = mitLicense.wording;
      break;
    case "None":
      readmeBadge = noLicense.badge;
      readmeLink = noLicense.link;
      readmeLicense = noLicense.wording;
      break;  
  }
  return readmeBadge, readmeLink, readmeLicense;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  renderLicense(license);
    //Template literal to build README File
    readMeString = `
# ${data.title} - ${readmeBadge}(${readmeLink})

<!-- Remove Line Below if project is not published to GitHub -->
➡️ [GitHub Repository](https://github.com/${data.username}/${data.title})
    
## **Description**
    
${data.description}
    
## **Table of Contents**
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Test](#test)
- [Questions](#questions)
    
## **Installation**
    
${data.installins}
    
## **Usage**
    
${data.usage}
    
## **License**
    
Copyright &copy;2022 - ${data.username}
  
<p>
${readmeLicense}  
</p>
    
## **Contributions**

When contributing to this repository, please first discuss the change you wish to make via opening an issue or e-mail the owners of this repository. Specific instructions are included below:

${data.contributions}

## **Test**

${data.testins}

## **Questions**
    
For any questions or contributions please contact me on Github or by e-mail:
    
[Github Profile](https://www.github.com/${data.username})  
[Email Me](mailto:${data.email})
    `
  return readMeString;
}

//Export to index.js
module.exports = generateMarkdown;
