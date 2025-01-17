'use client';
import { useState, useEffect, useCallback } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaNumbers, setCaptchaNumbers] = useState({ num1: 0, num2: 0 });

  // Generate captcha numbers once when modal opens
  useEffect(() => {
    if (isOpen) {
      setCaptchaNumbers({
        num1: Math.floor(Math.random() * 10),
        num2: Math.floor(Math.random() * 10)
      });
      setCaptchaAnswer('');
      setIsSubmitted(false);
    }
  }, [isOpen]);

  // Handle click outside
  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(captchaAnswer) === (captchaNumbers.num1 + captchaNumbers.num2)) {
      setIsSubmitted(true);
      e.target.submit();
    } else {
      alert('Please solve the math problem correctly');
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-start justify-center p-4 z-50 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="my-4 md:my-8 relative w-full max-w-[95vw] md:max-w-[600px]">
        <div className="bg-white rounded-2xl p-6 md:p-8 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {isSubmitted ? (
            <div className="text-center py-8">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
              <p className="text-gray-600">We'll get back to you soon.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 pr-8">Get in touch</h2>
              <form 
                action="https://formspree.io/f/xeoowelg" 
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="role" className="block text-base font-medium text-gray-700 mb-2">
                    I am a*
                  </label>
                  <select
                    name="role"
                    id="role"
                    required
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-[#1998d3] focus:border-[#1998d3]"
                  >
                    <option value="">Select your role</option>
                    <option value="healthcare_provider">Healthcare Provider</option>
                    <option value="hospital">Hospital Representative</option>
                    <option value="ngo">NGO Representative</option>
                    <option value="individual">Individual</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-[#1998d3] focus:border-[#1998d3]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-[#1998d3] focus:border-[#1998d3]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
                    Message*
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-[#1998d3] focus:border-[#1998d3]"
                  ></textarea>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-base font-medium text-gray-700 mb-2">
                    Please solve this math problem to verify you're human*
                  </label>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-medium">
                      {captchaNumbers.num1} + {captchaNumbers.num2} = 
                    </span>
                    <input
                      type="number"
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      className="w-24 px-4 py-2 text-base border border-gray-300 rounded-lg focus:ring-[#1998d3] focus:border-[#1998d3]"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 mt-4 bg-[#1998d3] text-white text-lg font-medium rounded-full hover:bg-[#1998d3]/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 