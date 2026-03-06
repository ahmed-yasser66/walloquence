# Walloquence 🖼️

Walloquence is a modern, responsive wallpaper platform that lets users discover and download high-quality wallpapers. Built with Next.js and Tailwind CSS, it features intuitive category browsing and seamless theme switching.

## ✨ Features

- **Smart Categorization** - Browse wallpapers by:
  - 🎲 Random - Discover unexpected gems
  - ⏱️ Latest - Freshly added wallpapers  
  - 📈 Toplist - Community favorites
  - 🔥 Hot - Trending right now

- **Modern UX** - Infinite scroll, responsive grid, and instant downloads
- **Theme Toggle** - Smooth light/dark mode switching
- **Mobile First** - Perfect experience on any device
- **Fast & Performant** - Optimized with Next.js for speed

## 🛠️ Tech Stack

- **Framework** - Next.js 14 with App Router
- **Styling** - Tailwind CSS for utility-first styling
- **Icons** - Lucide React for clean, consistent icons
- **Theming** - next-themes with system preference support
- **Utilities** - clsx + tailwind-merge for class management

## 🚀 Quick Start

**Clone the repository**
```
git clone https://github.com/ahmed-yasser66/walloquence.git
cd walloquence
```
Install dependencies

```
npm install
```
Start development server

```
npm run dev
```

Open your browser
```
http://localhost:3000
```

📁 Project Structure
```
walloquence/
├── app/                    # Next.js app router pages
│   ├── (pages)/           # Category pages (hot, latest, etc.)
│   ├── (root)/            # Homepage components
│   └── api/                # API routes for wallpaper data
├── components/             # Reusable UI components
│   ├── ui/                 # Base UI components
│   └── web/                # Web-specific components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and API handlers
├── public/                 # Static assets
│   ├── fonts/              # Custom fonts
│   └── images/             # Images and icons
└── routes/                 # Route configuration
```

🎨 Theme System
Walloquence comes with a built-in theme system that:

🌙 Respects system preferences

💾 Remembers user selection

🔄 Smooth transitions between themes

🎯 Consistent design in both modes

🤝 Contributing
Contributions make the open-source community amazing! Here's how you can help:

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License
This project is open source and available under the MIT License.

🙏 Acknowledgments
Wallpaper data provided by Wallhaven API

Icons by Lucide

Built with Next.js

<p align="center"> Made with ❤️ by <a href="https://github.com/ahmed-yasser66">Ahmed Yasser</a> </p>
