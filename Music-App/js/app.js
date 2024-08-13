  /**
   * WEB222 – Assignment 06
   *
   * I declare that this assignment is my own work in accordance with
   * Seneca Academic Policy. No part of this assignment has been
   * copied manually or electronically from any other source
   * (including web sites) or distributed to other students.
   *
   * Please update the following with your information:
   *
   *      Name:       <Jarrell Blay>
   *      Student ID: <106614225>
   *      Date:       <December 13, 2023>
   */

  // All of our data is available on the global `window` object.
  // Create local variables to work with it in this file.
  const { artists, songs } = window;

  // For debugging, display all of our data in the console. You can remove this later.
  console.log({ artists, songs }, "App Data");

  document.addEventListener("DOMContentLoaded", function () {
    createButtons();
  });
  
  function createButtons() {
    var navMenu = document.querySelector("#menu");
  
    // Loop through all artists
    for (var i = 0; i < artists.length; i++) {
      // Create a button element
      var button = document.createElement("button");
      button.textContent = artists[i].name;
  
      // Add a click event listener to show the artists songs
      button.addEventListener("click", function (event) {
        var artistId = event.target.getAttribute("data-artist-id");
        showSongs(artistId);
      });
  
      // Set the artistId as a data attribute on the button
      button.setAttribute("data-artist-id", artists[i].artistId);
  
      // Append the button to the navigation menu
      navMenu.appendChild(button);
    }
  }
  
  function showSongs(artistId) {
    var selectedArtist = getArtistById(artistId);
  
    // Update selected artist's name
    var selectedArtistName = document.querySelector("#selectedArtistName");
    selectedArtistName.textContent = selectedArtist.name;
  
    // Clear current links from the section
    var selectedArtistLinks = document.querySelector("#selectedArtistLinks");
    selectedArtistLinks.innerHTML = "";
  
    // Create links for the selected artist
    for (var i = 0; i < selectedArtist.urls.length; i++) {
      var link = document.createElement("a");
      link.href = selectedArtist.urls[i].url;
      link.textContent = selectedArtist.urls[i].name;
      link.target = "_blank";
  
      selectedArtistLinks.appendChild(link);
    }
  
    // Clear existing song cards
    var songsContainer = document.querySelector("#songsContainer");
    songsContainer.innerHTML = "";
  
    // Filter songs for the chosen artist
    var filteredSongs = songs.filter(function (song) {
      return song.artistId === artistId && !song.isFlagged;
    });
  
    // Loop through filtered songs and create song cards
    filteredSongs.forEach(function (song) {
      var card = createSongCard(song);
      songsContainer.appendChild(card);
    });
  
    // Show the footer
    var footer = document.querySelector("footer");
    footer.style.display = "block";
  }
  
  
  function getArtistById(artistId) {
    return artists.find(function (artist) {
      return artist.artistId === artistId;
    });
  }
  
  function convertSecondsToMinutes(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
  
    return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
  }
  
  function createSongCard(song) {
    const card = document.createElement("div");
    card.classList.add("song-card");
  
    const songImg = document.createElement("img");
    songImg.src = song.imageURL;
    songImg.alt = song.title + ' by ' + song.artistId;

    const container = document.createElement("div");
    container.classList.add("container");
  
    const title = document.createElement("h2");
    title.textContent = song.title;
  
    const year = document.createElement("time");
    year.textContent = 'Year Recorded: ' + song.year;
    year.dateTime = song.year;
  
    const duration = document.createElement("span");
    duration.textContent = 'Duration: ' + convertSecondsToMinutes(song.duration);
  
    container.appendChild(title);
    container.appendChild(year);
    container.appendChild(duration);
  
    card.appendChild(songImg);
    card.appendChild(container);

    // Add click event listener to open the song link when clicked
    card.addEventListener("click", function () {
    console.log("Song Link:", song.url);
    window.open(song.url, "_blank");
  });

    return card;
  }

  // Add event listener for form submission
  document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    // if form is valid, prompt the message
    document.getElementById('thankYouMessage').style.display = 'block';
  });

  function addSongLink() {
    var input = document.createElement("input");
    input.type = "url";
    input.name = "songLink";
    document.getElementById("songLinksContainer").appendChild(input);
  }

  
  


