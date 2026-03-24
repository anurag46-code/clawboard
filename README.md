# 🎭 Laude Dashboard - Mobile-First Agent Control

A beautiful, mobile-friendly dashboard for managing Laude agents and tasks.

## 🚀 Features

- **Mobile-First Design** - Optimized for phones and tablets
- **Real-time Stats** - View workspace statistics at a glance
- **Agent Management** - Spawn and monitor sub-agents
- **Task Tracking** - See recent tasks and their status
- **Dark Mode** - Easy on the eyes
- **Touch-Friendly** - All buttons are 44px+ for easy tapping

## 📱 Quick Start

### View on Mobile
1. Deploy to Vercel (see below)
2. Open the Vercel URL on your phone
3. Add to home screen for app-like experience

### Local Development
```bash
# Serve locally
cd laude-app
python3 -m http.server 8000
# Or use any static server
open http://localhost:8000
```

## 🛠️ Deployment to Vercel

### Option 1: GitHub Auto-Deploy (Recommended)
1. Push this folder to GitHub:
   ```bash
   cd laude-app
   git init
   git add .
   git commit -m "Initial Laude dashboard"
   git branch -M main
   git remote add origin https://github.com/anurag46-code/clawboard.git
   git push -u origin main
   ```

2. Connect to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"
   - Done! 🎉

### Option 2: Vercel CLI
```bash
npm i -g vercel
cd laude-app
vercel
```

## 📂 Structure

```
laude-app/
├── index.html      # Main dashboard
├── css/
│   └── mobile.css  # Mobile-optimized styles
├── js/
│   └── app.js      # Interactive functionality
├── vercel.json     # Vercel config
└── README.md       # This file
```

## 🎨 Customization

Edit `css/mobile.css` to change colors, fonts, or layout:
```css
:root {
    --accent: #e94560;  /* Change this to your favorite color */
}
```

## 📊 What's Included

- ✅ Responsive grid layout
- ✅ Touch-friendly buttons (min 44px)
- ✅ Bottom navigation bar
- ✅ Toast notifications
- ✅ Status indicators
- ✅ Task list with emoji status
- ✅ Dark theme by default
- ✅ Works offline (PWA-ready)

## 🔧 Next Steps

1. **Connect to Backend** - Add API calls to fetch real agent data
2. **Add Authentication** - Secure the dashboard
3. **Enable Real-time Updates** - WebSocket for live stats
4. **Add Charts** - Visualize agent performance
5. **Push Notifications** - Alert when agents complete

## 📞 Support

Created by **Laude** 🎭 for **Anurag**

---

*Made with ❤️ using OpenClaw*
