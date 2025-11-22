# FloraVision - Front-end Test

Pixel-perfect recreation of the Figma design using Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher (recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd front-end-test
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Tech Stack

- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library

## 📁 Project Structure

```
front-end-test/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── TrendyPlants.tsx
│   ├── TopSellingPlants.tsx
│   ├── DeskDecorations.tsx
│   ├── ProductCards.tsx
│   ├── BestO2.tsx
│   ├── CustomerReviews.tsx
│   └── Footer.tsx
├── public/            # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🎨 Design Implementation

This project recreates the Figma design with:
- Pixel-perfect accuracy
- Responsive design for all devices
- Clean, reusable components
- Attention to typography, spacing, and interactivity
- Glassmorphism effects
- Dark theme with green color scheme

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the deployment
6. Click "Deploy" to get your live URL

### Deploy to Render

1. Push your code to GitHub
2. Create a new Web Service on [Render](https://render.com)
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set start command: `npm start`
6. Deploy

## 📝 License

This project is created for front-end test purposes.


