let mCurrentIndex = 0 // Tracks the current image index
let mImages = [] // Array to hold GalleryImage objects
const mUrl = 'images.json' // Replace with actual JSON URL
const mWaitTime = 5000 // Timer interval in milliseconds

$(document).ready(() => {
  $('.details').hide() // Hide details initially

  // Call a function here to start the timer for the slideshow

  // Select the moreIndicator button and add a click event to:
  // - toggle the rotation classes (rot90 and rot270)
  // - slideToggle the visibility of the .details section

  // Select the "Next Photo" button and add a click event to call showNextPhoto

  // Select the "Previous Photo" button and add a click event to call showPrevPhoto

  // Call fetchJSON() to load the initial set of images
  fetchJSON()
})

// Function to fetch JSON data and store it in mImages
function fetchJSON () {
  // Use $.ajax here to request the JSON data from mUrl
  $.ajax({
    url: mURL,
    dataType: "json",
    // On success, parse the JSON and push each image object into mImages array
    success: function (data) {
    mImages = data.images
    // After JSON is loaded, call swapPhoto() to display the first image
    swapPhoto()
    },
    error: function () {
      alert("Error file not working")
    }
  });

}

// Function to swap and display the next photo in the slideshow
function swapPhoto () {
  // Access mImages[mCurrentIndex] to update the image source and details
  const images = mImages[mCurrentIndex]
  // Update the #photo element's src attribute with the current image's path
  $('#photo').attr('src', images.imgPath)
  // Update the .location, .description, and .date elements with the current image's details
  $('.name').text(`Song Name: ${images.name}`)
  $('.artist').text(`Artist: ${images.artist}`)
  $('.album').text(`Album: ${images.album}`)
  $('.length').text(`Length: ${images.length}`)
}

// Advances to the next photo, loops to the first photo if the end of array is reached
function showNextPhoto () {
  // Increment mCurrentIndex and call swapPhoto()
  // Ensure it loops back to the beginning if mCurrentIndex exceeds array length
}

// Goes to the previous photo, loops to the last photo if mCurrentIndex goes negative
function showPrevPhoto () {
  // Decrement mCurrentIndex and call swapPhoto()
  // Ensure it loops to the end if mCurrentIndex is less than 0
}

// Starter code for the timer function
function startTimer () {
  // Create a timer to automatically call `showNextPhoto()` every mWaitTime milliseconds
  // Consider using setInterval to achieve this functionality
  // Hint: Make sure only one timer runs at a time
}
