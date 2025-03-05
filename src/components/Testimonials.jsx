import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sansum Ltd",
    role: "Collaborators at Sansum",
    image: "/images/sansum-testimonial.jpg",
    text: "Akil is an exceptional developer who consistently delivers work. His attention to detail and problem-solving skills is exceptional.",
  },
  {
    id: 2,
    name: "Abdullah Al-Baiti",
    role: "Manager at Andalusia Training Center",
    image: "/images/albeity.webp",
    text: "Working with Akil was a great experience. They built a professional, user-friendly website for my business that exceeded my expectations.",
  },
  {
    id: 3,
    name: "Husayn Moledina",
    role: "Professional Math Tutor",
    image: "/images/moledina.webp",
    text: "Akil did an incredible job building my tutoring website. It’s super easy to use, looks great and makes running my online courses so much simpler!",
  },
];

const companies = [
  "/images/andalusia.webp",
  "/images/cats.webp",
  "/images/dhis2.webp",
  "/images/sansum.webp",
  "/images/tma.webp",
  "/images/tppl.webp",
];

const Testimonials = () => {
  return (
    <div>
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's what people I've worked with have to say about our collaboration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-gray-600 mb-6 relative">"{testimonial.text}"</p>
                <h4 className="font-bold text-xl text-blue-600 mb-1">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="bg-white py-20 w-full">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
              <span className="text-blue-600">Companies</span> I've Worked With
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {companies.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Company ${index + 1}`}
                    className={`object-contain ${logo.includes("tma") ? "size-20" : "size-28"}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
