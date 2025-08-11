# TeamSnap Challenge Blog

A Next.js blog application built for the TeamSnap coding challenge, featuring UTM campaign tracking and content management with Sanity CMS.

## Features

- 📝 Blog post management with Sanity CMS
- 📊 UTM campaign tracking and analytics
- 🎨 Modern UI with Tailwind CSS
- 🔗 SEO-friendly routing
- 📱 Responsive design
- 🚀 Built with Next.js 14+ App Router

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **CMS**: Sanity
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- A Sanity account

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd team-snap-demo
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
```

Update `.env.local` with your Sanity credentials:

```
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="development"
```

### Sanity Setup

1. Install Sanity CLI globally:

```bash
npm install -g @sanity/cli
```

2. Login to Sanity:

```bash
sanity login
```

3. Initialize your Sanity project (if not already done):

```bash
sanity init
```

### Seeding Data

To populate your blog with sample content:

1. **Option 1: Import from data.tar.gz**

   ```bash
   # Extract the sample data
   tar -xzf data.tar.gz

   # Import to Sanity (adjust dataset name as needed)
   sanity dataset import data/ development
   ```

2. **Option 2: Create content manually**

   ```bash
   # Start Sanity Studio
   npm run sanity:dev
   ```

   Navigate to `http://localhost:3333` and create your content through the Sanity Studio interface.

3. **Option 3: Use Sanity CLI to import specific content**
   ```bash
   # If you have NDJSON files
   sanity dataset import posts.ndjson development
   ```

### Development

1. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

2. Start Sanity Studio (in a separate terminal):

```bash
npm run sanity:dev
```

3. Open your browser:
   - **Blog**: [http://localhost:3000](http://localhost:3000)
   - **Sanity Studio**: [http://localhost:3333](http://localhost:3333)

## Project Structure

```
team-snap-demo/
├── app/                    # Next.js App Router pages
├── components/            # React components
│   ├── SiteWrapper.tsx   # Main layout wrapper
│   ├── SiteFooter.tsx    # Footer with UTM tracking display
│   └── UtmTracker.tsx    # UTM parameter tracking logic
├── sanity/               # Sanity CMS configuration
├── public/               # Static assets
└── data.tar.gz          # Sample blog data
```

## UTM Tracking

This application includes built-in UTM campaign tracking:

- Automatically captures UTM parameters from URLs
- Stores tracking data in localStorage
- Displays current campaign data in the footer
- Persists across page navigation

### Testing UTM Tracking

Visit your site with UTM parameters:

```
http://localhost:3000?utm_source=google&utm_medium=cpc&utm_campaign=spring-sale
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run sanity:dev` - Start Sanity Studio
- `npm run sanity:build` - Build Sanity Studio
- `npm run sanity:deploy` - Deploy Sanity Studio

## Content Management

Access Sanity Studio at `/studio` in production or `http://localhost:3333` in development to:

- Create and edit blog posts
- Manage content structure
- Preview changes
- Configure schemas

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for the TeamSnap coding challenge.

---

**Built by RD Pennell for TeamSnap Challenge**
