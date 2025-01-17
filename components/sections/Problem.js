import Image from 'next/image';

const Problem = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            A Global Healthcare Crisis
          </h2>
          <p className="text-xl text-gray-600">
            Every day, approximately 830 women die from preventable causes related to pregnancy 
            and childbirth, with 99% of these deaths occurring in developing countries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            number="830"
            label="Women die daily from preventable causes"
            color="imago-blue"
          />
          <StatCard
            number="2/3"
            label="Of the world's population lacks access to diagnostic imaging"
            color="imago-green"
          />
          <StatCard
            number="70%"
            label="Of imaging equipment is non-functional in developing regions"
            color="red-500"
          />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label, color }) => {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <h3 className={`text-5xl font-bold text-${color} mb-4`}>{number}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default Problem; 