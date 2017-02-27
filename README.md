<!-- # ![alt-tag]('./app/images/PianYesGiphy.gif')  -->
# PianYes

### User Stories

This application intended to teach users how to play the piano at a very basic level.
This app seeks to serve as a sample in such a way that leaves the user wanting to learn
even more.

### Minimum Viable Product

The user will press on the key according to what is prompted on the top screen. As the 
user presses these keys the prompt will change thus teaching the user the location of 
certain notes on sheet music.

### Approach Taken

* Establish an application environment that works vertically 
* Create a top screen containing images that serve as prompts
* Create a bottom screen that contains the piano keys 
* Each key will have their own audio and image change function

### Technologies used

* **React Native** JavaScript library used to develop this app(iOS)
    +React-native-simple-sound
    +TouchableOpacity
* **Express Server** Intended to use to render/execute image and audio files


###Installation Instructions
* Installation will not be required in the near future as this application will be available on the App Store

### Unsolved Problems
* There are some issues with passing around state as the file structure is quite unique
* Originally intended to use a local express server to render the images and audio however I abandoned this idea as I found the interaction with web-audio APIs quite difficult

``Note: fixes coming soon``

---

<!-- ### Link to application on the App Store

* **[PianYes](https://itunes.apple.com/us/app/PianYes/)**  -->

