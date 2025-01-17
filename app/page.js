'use client';
import Image from "next/image";
import { useModal } from './context/ModalContext';

function CTASection() {
  const { openModal } = useModal();

  const cards = [
    {
      title: "Healthcare Providers",
      description: "Provide better maternal care with AI-powered ultrasound technology.",
      icon: (
        <svg className="w-12 h-12 text-[#1998d3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12.75v-1.5m0 1.5c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125h1.5c.621 0 1.125-.504 1.125-1.125v-1.5M12 12.75h1.5" />
        </svg>
      ),
      features: ["AI-powered diagnostics", "Real-time analysis", "Expert support"]
    },
    {
      title: "Hospitals",
      description: "Improve maternal healthcare outcomes with advanced imaging.",
      icon: (
        <svg className="w-12 h-12 text-[#1998d3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      features: ["Seamless integration", "Team collaboration", "Data analytics"]
    },
    {
      title: "NGOs",
      description: "Partner with us to bring healthcare to underserved communities.",
      icon: (
        <svg className="w-12 h-12 text-[#1998d3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      features: ["Grant support", "Training programs", "Impact tracking"]
    }
  ];

  return (
    <section id="get-started" className="py-24 scroll-mt-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1998d3] to-[#1998d3]/70 bg-clip-text text-transparent">
            Get started with Imago MUM
          </h2>
          <p className="text-xl text-gray-600">
            Choose your path to revolutionize maternal healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1998d3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative space-y-6">
                <div className="p-3 bg-[#1998d3]/5 rounded-xl inline-block">
                  {card.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-600 mb-6">{card.description}</p>
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-[#1998d3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={openModal}
                  className="w-full py-3 px-6 rounded-xl bg-white border-2 border-[#1998d3] text-[#1998d3] font-medium
                    hover:bg-[#1998d3] hover:text-white transition-all duration-300 group-hover:shadow-md"
                >
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const scrollToGetStarted = () => {
    document.getElementById('get-started')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#1998d3] overflow-hidden">
        {/* Spotlight effect */}
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            background: `
              radial-gradient(
                100% 100% at 50% 50%,
                rgba(255, 255, 255, 0.12) 0%,
                rgba(255, 255, 255, 0.06) 25%,
                transparent 50%
              )
            `
          }}
        />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/homepage-bg.svg"
            alt="Background pattern"
            fill
            className="object-cover opacity-15 mix-blend-soft-light"
            priority
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[calc(90vh-80px)] mt-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-10 leading-tight text-white">
              AI Ultrasound Interpretation & Care Coordination
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-16 max-w-2xl">
              Transform maternal healthcare with seamless coordination and AI-powered
              diagnostics – driving faster, smarter and more accurate clinical decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
              <button 
                onClick={scrollToGetStarted}
                className="px-8 py-4 bg-white text-[#1998d3] rounded-full 
                  hover:bg-gray-100 transition-colors text-lg font-medium"
              >
                For Individuals
                <span className="ml-2">→</span>
              </button>
              <button 
                onClick={scrollToGetStarted}
                className="px-8 py-4 bg-white text-[#1998d3] rounded-full 
                  hover:bg-gray-100 transition-colors text-lg font-medium"
              >
                For Organizations
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Empowering healthcare providers and mothers. Together.
              </h2>
              <p className="text-xl text-gray-600">
                We believe in strengthening the relationship between healthcare providers and expectant mothers. 
                Our AI-powered ultrasound device makes maternal care accessible and efficient.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gray-100">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/imago-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Optional overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#1998d3] relative overflow-hidden">
        {/* Spotlight effect */}
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            background: `
              radial-gradient(
                100% 100% at 50% 50%,
                rgba(255, 255, 255, 0.12) 0%,
                rgba(255, 255, 255, 0.06) 25%,
                transparent 50%
              )
            `
          }}
        />

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/homepage-bg.svg"
            alt="Background pattern"
            fill
            className="object-cover mix-blend-soft-light"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Making a real impact
            </h2>
            <p className="text-xl text-white">
              Every day, we work towards reducing maternal mortality rates and improving access to quality healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: "830",
                label: "Women die daily from preventable causes"
              },
              {
                number: "2/3",
                label: "Of the world's population lacks access to diagnostic imaging"
              },
              {
                number: "70%",
                label: "Of imaging equipment is non-functional in developing regions"
              }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500">
                  <div className="flex flex-col items-center">
                    <h3 className="text-6xl font-bold mb-4 text-white">
                      {stat.number}
                    </h3>
                    <div className="w-12 h-0.5 bg-white/30 mb-4" />
                    <p className="text-white text-center text-lg">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
