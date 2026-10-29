import Link from "next/link"
const links = [
    {href: "/", label: "Home"},
    {href: "/about", label: "About"}
]

function Navbar() {
  return (
    <nav className="fixed min-h-20 p-5 text-3xl font-light">
        {links.map((link) => (
            <Link key={link.href} href={link.href} 
            className="font-light m-3 transition duration-200 hover:text-white"
            >{link.label}</Link>
        ))}
    </nav>
  )
}
export default Navbar