# GVCC Learning Portal

## Project Overview

The GVCC Learning Portal is a full-stack MERN application that enables students to watch educational videos, create bookmarks at important timestamps, and continue learning from where they left off. The application includes a responsive user interface, persistent bookmark storage, progress tracking, and basic content protection mechanisms.

This project was developed as part of the GVCC Learning Portal Development Assignment.

---

## Features

### Core Features

- Learning Portal with educational videos
- Video playback using HTML5 video player
- Create multiple bookmarks for a single video
- Resume playback from bookmarked timestamp
- Persistent bookmark storage using MongoDB
- Student-friendly user interface
- Screenshot protection mechanism
- Watermark displayed on video player

### Bonus Features

- Edit bookmark
- Delete bookmark
- Continue Watching
- Watch progress indicator
- Responsive design for desktop and mobile

---

## Technology Stack

### Frontend

- React.js
- React Router DOM
- Axios
- CSS3

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Postman

---

## Project Structure

```
Learning-Portal
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── assets
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── middleware
│   ├── package.json
│   └── server.js
│
├── README.md
└── .gitignore
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/Learning-Portal.git
```

---

### Backend Setup

```bash
cd server

npm install

npm run dev
```

The backend server runs on:

```
http://localhost:5000
```

---

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

---

## API Endpoints

### Videos

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/videos` | Get all videos |
| GET | `/api/videos/:id` | Get single video |

### Bookmarks

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/bookmarks` | Create bookmark |
| GET | `/api/bookmarks/:videoId` | Get all bookmarks |
| PUT | `/api/bookmarks/:id` | Edit bookmark |
| DELETE | `/api/bookmarks/:id` | Delete bookmark |

---

## Application Workflow

1. Open the Learning Portal.
2. Select a learning video.
3. Play the video.
4. Create bookmarks at important timestamps.
5. Click a bookmark to resume playback.
6. Edit or delete bookmarks when needed.
7. Continue watching from the last watched position.
8. Track learning progress using the progress bar.

---

## Screenshot Protection

The application includes basic browser-level protection mechanisms to discourage unauthorized content capture.

Implemented protections include:

- Disabled right-click context menu
- Disabled common developer shortcuts
- Watermark overlay on video player
- Disabled download option where supported by the browser
- Disabled Picture-in-Picture mode

Note:
Complete prevention of screenshots or downloads is not possible using standard web technologies because browser security restrictions vary across platforms.

---

## Assignment Requirements Covered

| Requirement | Status |
|------------|--------|
| Learning Portal | Completed |
| Video Player | Completed |
| Multiple Bookmarks | Completed |
| Resume from Bookmark | Completed |
| Persistent Storage | Completed |
| Screenshot Protection | Completed |
| Student-Friendly UI | Completed |
| Edit Bookmark | Completed |
| Delete Bookmark | Completed |
| Continue Watching | Completed |
| Watch Progress Indicator | Completed |
| Responsive UI | Completed |

---

## Future Enhancements

- User Authentication
- Admin Dashboard
- Video Categories
- Recently Watched Videos
- Search Functionality
- Cloud Video Storage
- Secure Video Streaming
- Video Analytics

---

## GitHub Repository

```
https://github.com/your-username/Learning-Portal
```

---

## Author

Name: JAKKANI RISHIKESH

Project: GVCC Learning Portal Development Assignment

Technology Stack: MERN Stack

Year: 2026

---

## License

This project was developed for educational purposes as part of the GVCC Learning Portal Development Assignment.