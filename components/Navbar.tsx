import { navLinks } from '@/constants/index';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='px-5 md:px-20 flex items-center py-3 shadow-md mb-0.5 xxl:px-96'>
      <Link href='/'>
        <Image src='/logo.png' alt='logo' width={180} height={180} />
      </Link>

      <ul className='hidden flex-1 items-center justify-end md:flex'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer text-lg ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } font-medium text-black`}
          >
            <Link href={`${nav.page}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
