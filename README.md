# Robotics Club Website - NIT Patna

A comprehensive 8-page responsive website for the Robotics Club at National Institute of Technology Patna, developed by **Team Library Lion** for the Web Development Challenge 2025-2026.

![Robotics Club Banner](./assets/hero-robotics-lab.jpg)

## 🎯 Project Overview

This website showcases the Robotics Club's activities, achievements, team members, and provides a platform for students to learn about and join the club. Built with modern web technologies, it features a custom "Cyber/Robotic" theme and follows best practices for responsive design and user experience.

**Team Name:** Library Lion

## 👥 Team Members

| Name | Roll No. | Role |
|------|----------|------|
| **Nusarat Praveen** | 2503005 | Team Leader |
| **Prajwal Akki** | 2503003 | Member |
| **Anand Avnish** | 2503013 | Member |
| **Ishita** | 2503085 | Member |

---

## 🛠️ Technology Stack

### Core Technologies
- **HTML5** - Semantic markup for SEO and accessibility
- **CSS3** - Modern styling with Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript** - Lightweight, performance-focused logic

### Design & Assets
- **Fonts**: Orbitron (Headings), Inter (Body)
- **Icons**: Font Awesome 6.4.0
- **Images**: Custom AI-generated assets (DALL-E 3)

---

## 📁 Project Structure

```
root/
├── index.html              # Home page
├── about.html              # About the club
├── projects.html           # Project showcase
├── events.html             # Events and workshops
├── team.html               # Team members
├── news.html               # News and updates
├── achievements.html       # Awards and recognitions
├── contact.html            # Contact form and info
├── .gitignore              # Git configuration
├── css/
│   ├── main.css           # Global styles and typography
│   ├── components.css     # Reusable UI components
│   └── responsive.css     # Media queries
├── js/
│   ├── main.js            # Core functionality
│   ├── filters.js         # Project filtering logic
│   └── modals.js          # Interactive modals
├── images/                 # Main image assets
│   ├── background/        # Background animations/images
│   ├── events/            # Event galleries
│   ├── projects/          # Project showcase images
│   ├── team/              # Team member photos
│   └── logo.png           # Club logo
└── README.md              # Project documentation

---

## 🚀 Setup Instructions

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anandavnish/NITP-Robotics-Web.git
   cd NITP-Robotics-Web
   ```

2. **Run the project**
   Since this is a static site, you can open `index.html` directly in your browser.
   
   For a better experience (to avoid CORS issues with local assets), use a local server:
   ```bash
   # VS Code Live Server Extension (Recommended)
   # OR using Python
   python -m http.server 8000
   ```

3. **Access**
   Open `http://localhost:8000`

---

## ✨ Key Features

- **Responsive Design**: Adapts seamlessly to Mobile (480px), Tablet (768px), and Desktop (1200px+).
- **Dynamic Filtering**: Filter projects by categories (Drones, AI, IoT).
- **Event Sorting**: Sort events by date or name.
- **Interactive UI**: Modal popups, smooth scrolling, and animated counters.
- **Future-Ready code**: 
    - Modular CSS/JS structure.
    - API integration comments placed for backend (Node/Express or Django) connection.
    - Form attributes ready for POST requests.

---

## 📞 Contact

**Submission by:** Team Library Lion  
**Contact Email:** nusaratp.ug.ce@nitp.ac.in (Nusarat Praveen)

**Robotics Club NIT Patna**  
**Email:** roboticsclub@nitp.ac.in

---

**Built with ❤️ by Team Library Lion**