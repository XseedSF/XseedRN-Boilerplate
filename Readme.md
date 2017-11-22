Features:

* Navigation using react-navigation - Stack Navigation for Login and SignUp,
  Drawer as main app navigation, and Stack Navigation again inside Drawers.
* CodePush code.
* FCM Notifications basic code.
* Social Media Logins.

- Change Project Name, and package name.
- Generate a new Keystore for the android app.
  * Change the key values in gradle.properties
- Create App in AppCenter Microsoft, and get the app secret. Then run the
  command react-native link that will ask for that information.

What is the Android App Secret? 0000-0000-0000-0000-000000000000

What is the iOS App Secret? 0000-0000-0000-0000-000000000000

* Change the Android Deployment Key at strings.xml
  "reactNativeCodePush_androidDeploymentKey"
* Change the iOS Deployment Key at info.plist "CodePushDeploymentKey"

It will also ask for "npm install -g code-push-cli", if you still don't have it,
you can ignore this step.
https://docs.microsoft.com/en-us/appcenter/sdk/getting-started/react-native

Now we have linked:

* react-native-code-push
* appcenter
* appcenter-analytics
* appcenter-crashes

Code Push updates when ready:

appcenter codepush release-react -a <ownerName>/MyApp-iOS appcenter codepush
release-react -a <ownerName>/MyApp-Android

code-push release-react "Xseed/XseedRN_Android" Android -d Staging
