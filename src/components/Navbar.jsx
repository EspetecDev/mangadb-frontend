

import Link from 'next/link';
import { navbar_links } from '../app/consts';

export default function Navbar() {

    return (
        <div className="navbar bg-base-100 ">
            {navbar_links.map(l => (
                l.isHomeBtn ? 
                <a key={l.text} className="btn btn-ghost text-xl bg-pink-800 mr-5" >
                        <Link  href={l.href}>{l.text}</Link>
                </a>
                :
                <a key={l.text} className="btn btn-ghost text-xl" >
                <Link  href={l.href}>{l.text}</Link>
                </a>
            ))}
        </div>
    );
}