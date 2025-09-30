# AirPure - Air Purifier Monitoring System

A professional Next.js application for monitoring air quality and tracking air purifier performance with real-time data visualization and multi-user authentication.

## 🌟 Features

### For Product Owners
- **Personal Dashboard**: Track your air purifiers' daily performance
- **Air Quality Monitoring**: View real-time air quality data for your area
- **Filter Management**: Monitor filter life and receive maintenance alerts
- **Performance Analytics**: Detailed reports on air cleaned and energy usage

### For Companies
- **Regional Overview**: Monitor all purifiers across different regions
- **Maintenance Management**: Proactive alerts for device maintenance
- **Performance Analytics**: Comprehensive analytics and reporting
- **Deployment Planning**: Tools for planning new purifier installations

### For Public Access
- **Real-Time Air Quality**: Live air quality data for different areas
- **Zone Classification**: Clear identification of clean zones vs areas needing attention
- **Community Impact**: Transparent view of purifier network impact
- **Educational Resources**: Air quality guides and health recommendations

## 🚀 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Authentication**: Custom context-based auth (demo mode)
- **Deployment**: Optimized for production builds

## 🎨 Design Features

- **Cloud-inspired theme** with white backgrounds and subtle borders
- **Professional curved navbar** with glass effect
- **Responsive design** optimized for desktop and mobile
- **Smooth animations** and loading states
- **Gradient accents** in blue/cyan color scheme
- **Ample white space** for clean, professional appearance

## 🔧 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. The project is already set up in your current directory
2. Install dependencies (if needed):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3001](http://localhost:3001) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 📱 Authentication (Demo Mode)

The application includes a demo authentication system:

- **Product Owner Login**: Access personal air purifier dashboard
- **Company Login**: Access admin dashboard with regional analytics
- **Public Access**: No authentication required for public air quality data

*Enter any credentials and click login to access the dashboard. A loading animation will show during the authentication process.*

## 🌍 Pages Overview

- **Home** (`/`): Landing page with public air quality data
- **Dashboard** (`/dashboard`): User/company-specific dashboard
- **Air Quality** (`/air-quality`): Detailed real-time air quality monitoring
- **About** (`/about`): Information about the platform and features
- **Login** (`/login`): Authentication with role selection

## 🎯 Key Components

### Authentication Context
- Manages user state and authentication
- Supports role-based access (user/company)
- Persistent sessions with localStorage

### Dashboard Components
- **UserDashboard**: Personal air purifier management
- **CompanyDashboard**: Regional analytics and maintenance
- **PublicDashboard**: Community air quality overview

### UI Components
- **Navbar**: Responsive navigation with glass effect
- **Layout**: Consistent page structure
- **Cloud Cards**: Signature card design with backdrop blur

## 🎨 Styling Architecture

### Custom CSS Classes
- `.cloud-card`: Main card component with glass effect
- `.glass-effect`: Enhanced backdrop blur effects
- `.loading-spinner`: Animated loading indicators
- `.navbar-curve`: Curved navbar design
- `.air-quality-*`: Status-based color schemes

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interaction elements

## 📊 Mock Data

The application uses realistic mock data for demonstration:
- Regional air quality readings
- Purifier performance metrics
- Maintenance alerts and schedules
- User activity and analytics

## 🔮 Future Enhancements

- Real-time data integration via APIs
- Interactive maps for regional data
- Advanced analytics and ML insights
- Mobile app companion
- IoT device integration
- Push notifications for alerts

## 📄 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── air-quality/       # Air quality monitoring page
│   ├── dashboard/         # Protected dashboard page
│   ├── login/             # Authentication page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── CompanyDashboard.tsx
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── PublicDashboard.tsx
│   └── UserDashboard.tsx
└── contexts/              # React contexts
    └── AuthContext.tsx    # Authentication context
```

---

**Built with ❤️ for cleaner air and healthier communities**

**The development server is currently running on [http://localhost:3001](http://localhost:3001)**
