import Link from "next/link";

export default function NavLink({ href, title }) {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 sm:text-2xl rounded md:p-0 hover:text-secondary" style={{ textDecoration: 'none', fontSize: '1.5rem' }}
    >
      {title}
    </Link>
  );
};
