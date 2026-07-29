# Expert Listing Dashboard (Feeds Frontend)

Welcome to the Expert Listing Dashboard frontend feed application. This project serves as the central administrative and analytics interface, featuring a robust, responsive design built for visualizing metrics, managing listings, and tracking user activity.

## Project Overview

The dashboard is structured around a feature-based architecture. Currently, it implements the primary analytics overview, showcasing vital statistics like Total Inflows, MRR (Monthly Recurring Revenue), Payouts, and live listing data. The interface is meticulously designed to be fully responsive—fluidly adapting from ultra-wide desktop monitors down to mobile devices without compromising typography or data visibility.

## Tech Stack & Tradeoffs

This project is built using modern web development standards to ensure scalability, performance, and developer experience.

*   **React + Vite**: Chosen for a blazing-fast development experience and optimized production builds. Vite provides instantaneous hot-module replacement (HMR), avoiding the sluggish startup times of older bundlers like Webpack.
*   **TypeScript**: Ensures type safety across our mock data and component props, preventing runtime errors and improving self-documentation.
*   **Tailwind CSS (v4)**: Utilized for utility-first styling. It allowed us to rapidly build a bespoke design system (with custom brand colors like `--color-brand-primary` and custom typography like "Open Runde") without managing hundreds of fragmented CSS files.
*   **Shadcn UI & Radix**: Provides accessible, unstyled component primitives (like Avatars and Cards) that we styled via Tailwind to match our premium aesthetic, saving us from reinventing complex interactive components from scratch.

### Key Library Decisions

#### 1. Recharts
We integrated **Recharts** for the Sales Overview bar charts. 
**Advantage:** Recharts is built specifically for React, offering declarative, highly customizable, and responsive SVG charts. Unlike heavier charting libraries, it integrates seamlessly with React's component lifecycle.

#### 2. Cloudinary
Throughout the application (from the top navigation action icons to the floating chat button and brand logo), we leverage **Cloudinary** for image hosting.
**Advantage:** Using Cloudinary alongside tools like Recharts provides massive performance and architectural benefits:
*   **Zero Repo Bloat**: We don't have to store dozens of high-res image assets locally in the repository.
*   **Edge Delivery (CDN)**: Assets are served via Cloudinary's global CDN, ensuring they load instantly for users regardless of their location, which is critical for dashboard performance.
*   **Dynamic Optimization**: Cloudinary automatically serves optimized formats (like WebP) based on the user's browser, keeping the dashboard's initial load footprint extremely light.

---

## How to Run the Project

This project uses `pnpm` for fast, disk-space-efficient package management.

### Prerequisites
Make sure you have Node.js from version 20 and above installed, along with `pnpm`. If you don't have `pnpm`, you can install it globally via npm:
```bash
npm install -g pnpm
```

### Installation & Startup

1. **Install Dependencies**
   Run the following command in the root of the project to install all required packages:
   ```bash
   pnpm install
   ```

2. **Start the Development Server**
   Start the Vite development environment by running:
   ```bash
   pnpm dev
   ```

The application will spin up locally (typically on `http://localhost:5173/`). Enjoy exploring the dashboard!
