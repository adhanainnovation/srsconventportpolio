import rakesh from '../../assets/rakesh.png';
import aditya from '../../assets/aditya.png';
import gourav from '../../assets/Gourav.jpeg'; // Ensure correct case

const aboutData = [
  {
    name: "Mr. Rakesh",
    description: "Principal",
    image: rakesh,
    quote: `"Education is not the learning of facts, but the training of the mind to think." – Albert Einstein

It is truly a privilege to be part of an educational institution where every individual is a learner, and each day brings new opportunities to grow and discover. At SRS Convent School, we see ourselves as a community of lifelong learners—where teachers, parents, and staff work hand in hand, growing and evolving together.

For decades, SRS Convent School has remained dedicated to shaping young minds into thoughtful, responsible, and globally aware citizens. We strive for excellence in all areas of education, encouraging high standards of academic achievement while also nurturing talent in co-scholastic fields.

We place strong emphasis on personal development. Core values such as discipline, moral integrity, and cognitive growth are deeply embedded in our approach. We take great pride in the consistent achievements of our students, particularly in their Board examinations.

As a united school community, we move forward with confidence, pride, and a shared vision for excellence. We warmly invite your continued support and collaboration in every step of this journey.

Warm regards,
Rakesh`,
  },
  {
    name: "Mr. Aditya Goyal",
    description: "Manager",
    image: aditya,
    quote: `“The journey of a thousand miles begins with a single step.” – Lao Tzu

At S.R.S. Convent School, we believe that true education goes beyond academic excellence — it is about shaping character, developing intellect, and instilling values that last a lifetime. Our mission is to create a nurturing space where curiosity is encouraged, creativity is celebrated, and critical thinking becomes second nature.

We are dedicated to guiding our students towards their highest potential — not just in academics, but in every dimension of life. Our aim is to provide an environment where each child feels inspired to grow, explore, and evolve into a confident, compassionate, and well-rounded individual.

With the constant support of our committed staff and the trust of our parents, we continue to build a strong foundation for the future. Together, we are shaping tomorrow’s leaders — individuals who will bring positive change to society and the world.

The path may have its challenges, but with determination, resilience, and a love for learning, anything is possible. We firmly believe in the potential of our students — and in their power to shape a brighter future.`,
  },
  {
    name: "Mr. Gourav Adhana",
    description: "Chairman",
    image: gourav,
    quote: `"We cannot always make the future for our youth, but we can make our youth for the future.” – Anonymous

    These words beautifully reflect the vision we hold at S.R.S. Convent School. Our mission goes far beyond academics — we aim to give students a learning experience that shapes them for life. Our focus is not just on helping students study, but on teaching them how to learn. Education, in our view, must stretch beyond the pages of textbooks and prepare students for the real world.
    
    Dear Students,
    You are the builders of tomorrow, the innovators of technology, and the true catalysts of change. It is our hope that your journey at S.R.S. Convent School equips you with the skills, values, and confidence needed to become strong leaders and thoughtful citizens. The knowledge you acquire, the discipline you develop, and the values you uphold will serve as the foundation for a successful and meaningful life.
    
    The technical and life skills you gain here are not just personal assets — they are contributions to your family, your community, and your nation.
    
    We believe in you. You are our greatest strength, and we are fully invested in your growth. While we cannot shape the future, we can certainly prepare you to rise and shine within it. The road may be challenging, but remember: great efforts always lead to great rewards. Once you taste success, you'll never settle for less.
    
    At S.R.S. Convent School, we take pride in setting our own standards and striving for new heights. It is this spirit of growth and perseverance that defines us as a center of excellence. Learning is a journey — and for us, that journey never stops.
    
    With warm regards,
    Adv. Gaurav Adhana
    (Chairman)`,
  },
];

const Faculty = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-12">
      <h1 className="text-3xl font-bold text-center mb-8 mt-10 text-indigo-800">Our Faculty</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {aboutData.map((member, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full h-[300px] flex justify-center items-center bg-gray-100">
              {/* Ensure all images are the same size without cropping */}
              <img className="w-auto h-full object-contain" src={member.image} alt={member.name} />
            </div>
            <div className="p-6 flex flex-col h-full">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">{member.description}</div>
              <h2 className="mt-1 text-xl font-medium text-black">{member.name}</h2>
              <p className="mt-2 text-gray-600 text-sm flex-1 overflow-y-scroll max-h-40">{member.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
