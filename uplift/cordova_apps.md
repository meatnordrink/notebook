
## Pushing App Updates

Very loose notes from me, to replace/redo:

* App store; fill in version notes (copy from old)

* CLI - cordova build ios (need to download, install cordova tools, Android 8.1, ios 5.1.1)

* open ./platforms/ios/UpLift.xcworkspace (opens in XCode)
  : target: UpLift
  : Version and Build = what you see on app connect (build in "Activity")
  : build target your own iPhone; test.
  : top bar; product; archive;
  : list of version; click "validate app" button on right
  : When finished, go to Distribute; leave defaults. 
  : Go back to app store connect, refesh; should say "processing" 

(before both: `Cordova requirements`)
## Android: cordova build android
* Open Android Studio
* Version code, version name
* Don't need to run on real device, but can. 
* Generate signed bundle/apk
* both signature versions


* Play Console -> Release management -> App releases -> Internal first
------------------


* https://www.notion.so/Deploying-a-Cordova-Android-update-3f0849b62bd345dfb0492a965bc9b3ed
* https://www.notion.so/Deploying-a-Cordova-iOS-update-e330613ed05b473ab3b0a18050e72faf