# Grappy Diagram Integration

## Overview

Grappy Diagram Integration is a utility that makes it easy to integrate diagrams and charts created using the [Grappy](https://grappy.000.pe) service into web applications. Grappy allows you to create and customize various types of diagrams and charts, and this integration simplifies the process of embedding them into your web projects.

## Features

- Seamlessly embed diagrams and charts created on Grappy into your web applications.
- Generate HTML code snippets to include Grappy diagrams in your web pages.
- Customizable display options to control the appearance of your integrated diagrams.
- Works with a variety of chart types, including bar charts, line charts, pie charts, radar charts, and more.

## Usage

### 1. Create Your Diagram on Grappy

  Visit [Grappy](https://grappy.000.pe) and create your desired chart or diagram.

### 2. Get the Project URL

  Once your chart is ready, obtain the project URL from Grappy.

### 3. Integrate the Diagram

Install this utility in your web project:
   npm install react-grappy
    or
   yarn add react-grappy

### 4. In your web application code, import the Grappy component:
```javascript
import React from 'react';
import Grappy from 'react-grappy';

function App() {
  const grappyProjectURL = 'https://your-grappy-project-url.com';

  return (
    <div>
      <h1>Your React App</h1>
      <Grappy link={grappyProjectURL} />
    </div>
  );
}

export default App;
```


## License

This project is licensed under the ISC License.

## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.

## Author

yilchenko