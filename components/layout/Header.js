'use client';
import { useModal } from '@/app/context/ModalContext';
import Image from 'next/image';
import Link from 'next/link';
import ContactModal from '../ContactModal';

export default function Header() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative">
              <Image
                src="/imagomum-logo.png"
                alt="Imago MUM Logo"
                width={140}
                height={45}
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-gray-600 hover:text-black">
                About
              </Link>
              <Link href="#features" className="text-gray-600 hover:text-black">
                Features
              </Link>
              <Link href="#impact" className="text-gray-600 hover:text-black">
                Impact
              </Link>
              <button 
                onClick={openModal}
                className="px-5 py-2 bg-[#1998d3] text-white rounded-full 
                  hover:bg-[#1998d3]/90 transition-colors"
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
} 