# Swing-Manager
A website for users to see the playlist and request songs and for Admins to manage playlist, control playback and change request settings.

## Pages:
### User:
* Now Playing
* Request a Song
### Admin:
* Playback Controls
* Playlist Management
* Request Management
* Playlist Creation
* Settings

## Todo:
* [ ] User Nav Bar
* [ ] Admin Nav Bar
* [ ] Admin Select Playlist bar
  * [ ] View all playlists
  * [ ] Available on all admin pages
* [ ] Now Playing
  * [ ] See song progress
  * [ ] View next song(s)
    * [ ] Limit can be made by admin
  * [ ] Line dances/specific songs can be highlighted by admin
* [ ] Request a Song
  * [ ] Search songs
  * [ ] See previously requested songs
    * [ ] Limit/allow repeats can be made by admin
    * [ ] Admin can white/blacklist specific songs
    * For sure requests made by others, but also a section for previously requested from that specific user?
* [ ] Playback Controls
  * [ ] Asks admin to select a playlist if one isn't selected
  * [ ] Drag progress point that adjusts point in the song
  * [ ] Play/Pause/Skip/Previous
  * [ ] Adjust Queue
    * Drag/drop
* [ ] Playlist Management
  * [ ] Adjust order of songs
  * [ ] Add songs
  * [ ] Edit Name
  * [ ] Get Sharable link
* [ ] Request Management
  * [ ] View requested songs
  * [ ] Add Song to currently selected playlist
  * [ ] Remove unwanted requests
* [ ] Playlist Creation
  * [ ] Playlist name
  * [ ] Add Songs
  * [ ] Adjust Song Order
  * [ ] Connected to Playlist management?
* [ ] Settings
  <!-- * [ ] Set Logo -->
    <!-- * [ ] Send email with photo to make it permanent? -->
  * [ ] Set theme colors
  * [ ] Limit visible next songs
  * [ ] Highlight line dances and/or custom ones
  * [ ] Limit requests/allow repeats
  * [ ] White/blacklist specific songs for requests
  * [ ] Clear Requests

## Client VS Backend Duties
### Client
* Theme colors
<!-- * Logo -->
* Unsaved settings
### Server
* Basically everything 😅

## File Setup
```
/client/
│
├── /locations/                # This is where all your locations are stored
│   ├── /location1/            # Folder for Location 1
│   │   ├── /images/           # Images used for this location
│   │   │   ├── logo.png       # Logo for Location 1
│   │   │   └── ...
│   │   ├── style.css          # Custom styles for Location 1
│   │   └── config.json        # Location 1 specific settings (number of requests, etc.)
│   ├── /location2/            # Folder for Location 2
│   ├── /images/               # Images used for this location
│   │   ├── style.css          # Custom styles for Location 2
│   │   ├── logo.png           # Logo for Location 2
│   │   └── config.json        # Location 2 specific settings
│   └── ...
│
├── /assets/                   # Global assets
│   ├── /images/               # Images used across all locations
│   ├── /styles/               # Global styles
│   └── /scripts/              # JS files
│       └── /requests/         # Handle song requests, etc.
│
├── /admin/                    # Admin panel where you can manage playlists, requests, etc.
│   ├── playbackControls.html  # Play/pause songs, skip, previous, etc.
│   ├── playlistManager.html   # Edit Playlists
│   ├── requestManager.html    # Add songs to playlist
│   ├── playlistCreator.html   # Make a playlists
│   ├── settings.html          # Settings page for global settings (e.g., max songs per user)
│   └── ...
├── /api/                      # Backend API for handling requests, data, etc.
│   └── ...
├── /index.html                # Landing page or homepage
└── /config.json               # Global config (like site-wide settings)
/api/
│
├─ Program.cs
└─ /storedSettings/
    ├── location1Settings.json
    └── location2Settings.json
```
