

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-12 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/shop" className="hover:text-black">Shop</a></li>
            <li><a href="/about" className="hover:text-black">About Us</a></li>
            <li><a href="/contact" className="hover:text-black">Contact Us</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Casual</a></li>
            <li><a href="#" className="hover:text-black">Work & Office</a></li>
            <li><a href="#" className="hover:text-black">Activewear</a></li>
            <li><a href="#" className="hover:text-black">Evening Dresses</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Contact Support</a></li>
            <li><a href="#" className="hover:text-black">FAQ</a></li>
            <li><a href="#" className="hover:text-black">Live Chat</a></li>
            <li><a href="#" className="hover:text-black">Returns</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social Media</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Facebook</a></li>
            <li><a href="#" className="hover:text-black">Twitter</a></li>
            <li><a href="#" className="hover:text-black">Instagram</a></li>
            <li><a href="#" className="hover:text-black">Pinterest</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ZyloMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
