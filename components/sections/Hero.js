import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-imago-yellow/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-imago-blue/5 to-imago-green/5 opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Logo */}
            <div className="w-48 mb-8">
              <Image
                src="/logo.png"
                alt="Imago MUM Logo"
                width={200}
                height={80}
                priority
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Saving Lives Through
              <span className="text-imago-blue"> Innovative Healthcare</span>
            </h1>
            
            <p className="text-xl text-gray-600">
              The world's first AI-Powered handheld ultrasound system, bringing vital 
              maternal healthcare to every corner of the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-imago-blue text-white rounded-full 
                hover:bg-imago-blue/90 transition-colors text-lg font-semibold">
                Learn More
              </button>
              <button className="px-8 py-4 border-2 border-imago-blue text-imago-blue 
                rounded-full hover:bg-imago-blue/5 transition-colors text-lg font-semibold">
                Contact Us
              </button>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-imago-blue">830</h3>
                <p className="text-gray-600">Women die daily</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-imago-blue">2/3</h3>
                <p className="text-gray-600">Lack access to ultrasound</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px]">
            <div className="absolute inset-0 bg-imago-blue/10 rounded-2xl overflow-hidden">
              <Image
                src="/device-preview.png"
                alt="Imago MUM Device"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 