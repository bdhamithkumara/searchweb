export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/images/logo.png" alt="Logo" className="h-10" />
          <ul className="flex space-x-4">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#cta" className="hover:underline">CTA</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
      </nav>
    );
  }