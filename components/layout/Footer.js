import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#000] text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Logo and Copyright Section */}
          <div className="lg:col-span-4">
            <Image
              src="/imagomum-logo.png"
              alt="Imago MUM Logo"
              width={140}
              height={45}
              className="mb-6"
              unoptimized
            />
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Imago MUM. All Rights Reserved.
            </p>
            <p className="text-[#1998d3] font-medium text-lg mt-4">
              #helpHerLive
            </p>
          </div>

          {/* Contact Links */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-medium mb-4">Enquiries</h3>
              <a href="mailto:contact@imagomum.com" 
                className="text-gray-300 hover:text-[#1998d3] transition-colors">
                contact@imagomum.com
              </a>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Support</h3>
              <a href="mailto:support@imagomum.com"
                className="text-gray-300 hover:text-[#1998d3] transition-colors">
                support@imagomum.com
              </a>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Press</h3>
              <a href="mailto:press@imagomum.com"
                className="text-gray-300 hover:text-[#1998d3] transition-colors">
                press@imagomum.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Links and Social */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-sm text-gray-300">
            <Link href="/privacy" className="hover:text-[#1998d3] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-[#1998d3] transition-colors">
              Cookie Policy
            </Link>
            <Link href="/terms" className="hover:text-[#1998d3] transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="https://twitter.com/imagomum" target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#1998d3] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/imagomum" target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#1998d3] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 