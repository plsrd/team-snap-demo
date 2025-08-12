# TeamSnap Challenge Blog

A Next.js blog application built for the TeamSnap coding challenge, featuring UTM campaign tracking and content management with Sanity CMS.

## Features

- A Sanity-powered blog that allows you to create, edit, and manage posts
- A frontend that displays posts with images, titles, and authors
- UTM capture that tracks the following parameters:
  - `utm_source`,
  - `utm_medium`,
  - `utm_campaign`,
  - `utm_term`,
  - `utm_content`,
  - `gclid`,
  - `fbclid`,
- Responsive design

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **CMS**: Sanity
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- A Sanity account

## Considerations, Assumptions, and Tradeoffs

- I relied heavily on TailwindCSS for quick styling.
- Originally, I wanted the `SiteWrapper` component to be used inside of the Layout component. However, I needed to pass search params from each page to the dependency array of the useEffect hook in `UtmTracker.tsx` to prevent unnecessary re-renders while allowing it to rerender on each page load. I decided that if the page was responsible for passing data to the `SiteWrapper`, it should also be responsible for rendering it.
- Given the time constraints and deliverables outlined in the challenge, I chose not to render the `body` content of the blog posts and simply added placeholder text. This could be easily extended to include block content from Sanity.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/plsrd/team-snap-demo.git
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
touch .env.local
```

Update `.env.local` with your Sanity credentials:

```
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="your-dataset-name"
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

3. Create a new Sanity project:

_This step is optional if you already have a Sanity project set up._

- Go to the [Sanity Manage Dashboard](https://www.sanity.io/manage) and create a new project.
- Follow the prompts to set up your project and dataset.
- Once created, copy your project ID and dataset name. Dataset name can be found in the Datasets tab.

### Seeding Data

You can seed the blog with sample data using the provided `data.tar.gz` file.

**Import from data.tar.gz**

```bash
sanity dataset import data.tar.gz <your-dataset-name>
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

2. Open your browser:
   - **Blog**: [http://localhost:3000](http://localhost:3000)
   - **Sanity Studio**: [http://localhost:3000/studio](http://localhost:3000/studio)

## Project Structure

```
team-snap-demo/
├── app/                  # Next.js App Router pages
├── components/           # React components
├── sanity/               # Sanity configuration
├── public/               # Static assets
└── data.tar.gz           # Sample blog data
```

### Testing UTM Tracking

[Visit your site with UTM parameters](http://localhost:3000?utm_source=google&utm_medium=cpc&utm_campaign=spring-sale) or use the demo button on the homepage.

## Content Management

Access`http://localhost:3000/studio` in development to create and manage blog posts using the Sanity Studio interface.

**Built by RD Pennell for TeamSnap Challenge**
