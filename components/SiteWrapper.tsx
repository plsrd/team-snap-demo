import Link from 'next/link';
import UtmTracker, { UTMTrackerProps } from './UtmTracker';
import SiteFooter from './SiteFooter';

type SiteWrapperProps = {
  children?: React.ReactNode;
  searchParams?: UTMTrackerProps['initialSearchParams'];
};

export default function SiteWrapper({
  children = null,
  searchParams = {},
}: SiteWrapperProps) {
  return (
    <div className='flex min-h-dvh flex-col bg-background text-foreground'>
      <header className='border-b bg-background'>
        <div className='container mx-auto flex h-14 items-center justify-between px-4'>
          <Link href='/' className='font-semibold tracking-tight'>
            TeamSnap Challenge Blog
            <span className='sr-only'>Home</span>
          </Link>
          <nav className='flex items-center gap-4'>
            <Link
              href='/'
              className='text-sm hover:underline underline-offset-4'
            >
              Home
            </Link>
            <Link
              href='/posts'
              className='text-sm hover:underline underline-offset-4'
            >
              Posts
            </Link>
          </nav>
        </div>
      </header>
      <UtmTracker initialSearchParams={searchParams} />
      <main className='container mx-auto flex-1 px-4 py-8'>{children}</main>
      <SiteFooter />
    </div>
  );
}
