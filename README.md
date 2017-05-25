# svyMobile
A mobile application built using Servoy (For DEMO purposes)

Getting started
-------------
You can import the svyMobile project through the Servoy Developer to view the solution.

Building phonegap solution
-------------
If you are looking to build the entire application including the phonegap.  You will need to download some additional libraries. In particular Node.JS, NPM, Phonegap CLI, (Android SDK or XCode).  For production builds you will need an Apple developer account and similarly for Android a Play store developer account.

Once you have those packages installed you can start building the app using the following commands:
```
//first install all required packages
npm install 

//variables such as exported War dir and solution name can be modifed in the Gruntfile.js (globalVars)

//Startup Servoy Developer and import and activate the 'svyMobile' solution.
 
//Run the Android emulator
grunt runAndroidEmu 

//Builds the phonegap solution and sends the binary to the emulator.  
//This command will launch the application and allow you to view the solution in an emulator. 
//It connects to the Servoy developer's running build. (assuming it uses the default port 8080)
grunt buildForAndroidEmu

//When you are ready to build a production ready version of the app.
grunt buildForAndroid

```
License
-------
svyMobile is licensed under the [MIT license](https://opensource.org/licenses/MIT)
