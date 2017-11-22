# React Native starter Boilerplate


## Features

* Navigation using react-navigation 
  - Stack Navigation for Login and SignUp,
  - Drawer as main app navigation, and 
  - Stack Navigation again inside Drawers.
* CodePush.
* FCM Notifications basic code.
* Social Media Logins.

run `npm install`

## Changes to make
* Change Project Name, and package name.
* Generate a new Keystore for the android app.
* Change the key values in gradle.properties
* Create Apps in Microsoft AppCenter, and get the app secret, and deployment keys.
* Update the Android App Secret at "android/app/src/main/assets/appcenter-config.json"
* Update the iOS App Secret at "ios/{ProjectName}/AppCenter-Config.plist"
* Change the Android Deployment Key at strings.xml: "reactNativeCodePush_androidDeploymentKey"
* Change the iOS Deployment Key at info.plist: "CodePushDeploymentKey"
  - See [Appcenter Docs](https://docs.microsoft.com/en-us/appcenter/sdk/getting-started/react-native) 
