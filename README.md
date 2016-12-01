## Barebones Angular Project
#### Pre-Requisites
[`nodejs`](https://nodejs.org/en/)  
[`npm`](https://nodejs.org/en/)  
**Note :** Try installing node and npm at a path without spaces on *Windows* machines. _eg: C:\nodejs_

#### Set-up and download project dependencies
###### The project build dependencies will be downloaded and organized by running the below commands
```
npm install
bower install
```

###### There are 3 modes of build supported by the project's _grunt_ build script
For development builds, you might prefer debuggable non-minified css and javascript files. Please run:  
`grunt build`  
For rapid development builds, which will watch your source files for changes and update the build, please run:  
`grunt watch`
For production builds, which will minify all the css, html and js files , please run:    
`grunt`

###### For development builds, the project comes with its own bundled http-server feature. This will help in testing and debugging UI code rapidly.
After running either `grunt build` or `grunt watch`, run:
```
grunt http-server:dev
```
The project will be available @ [http://localhost:8080](http://localhost:8080)
