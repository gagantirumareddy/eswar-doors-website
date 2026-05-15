import { FaWhatsapp, FaBars, FaStar } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

import door from "./assets/door.jpeg"
import aluminium from "./assets/aluminium.jpeg"
import hardware from "./assets/hardware.jpeg"
import owner from "./assets/owner.jpeg"
import acpsheets from "./assets/acpsheets.jpeg"
import aluminiumh from "./assets/aluminiumh.jpeg"
import visitingcard from "./assets/visitingcard.jpeg"
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
const [activeSection,setActiveSection]=useState("home")
  const [loading, setLoading] = useState(true)
  useEffect(() => {

const sections = document.querySelectorAll("section[id]")

const observer = new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

setActiveSection(entry.target.id)

}

})

},

{
threshold:0.3
}

)

sections.forEach((section) => observer.observe(section))

return () => observer.disconnect()

}, [])

useEffect(() => {

  const timer = setTimeout(() => {
    setLoading(false)
  }, 2000)

  return () => clearTimeout(timer)

}, [])
useEffect(() => {

const timer = setTimeout(() => {

setLoading(false)

},2000)

return ()=>clearTimeout(timer)

},[])

  const products = [

{
image:door,
title:"PVC Doors",
desc:"Stylish and durable premium PVC doors."
},

{
image:aluminium,
title:"Aluminium Works",
desc:"Modern aluminium fabrication solutions."
},

{
image:hardware,
title:"Hardware Materials",
desc:"Quality hardware products and accessories."
},

{
image:acpsheets,
title:"ACP Sheets",
desc:"Waterproof modern bathroom door solutions."
},

{
image:aluminiumh,
title:"Aluminium Panels",
desc:"Premium sliding and fixed aluminium window Panels"
},

{
image:visitingcard,
title:"Visiting Card",
desc:"Our Shop Visiting Card"
}

]
  const reviews = [

{
name:"sekhhar237@gmail.com",
text:"Very good quality PVC doors and excellent service."
},

{
name:"Ramesh123@gmail.com",
text:"Affordable pricing and professional aluminium works."
},

{
name:"Sureshterlapuu@gmail.com",
text:"Trusted materials and good customer support."
}

]
if(loading){

return(

<div className="bg-black text-white h-screen flex flex-col justify-center items-center">

<img
src="/favicon.png"
alt="Logo"
className="w-32 h-32 animate-bounce mb-6"
/>

<h1 className="text-2xl md:text-3xl font-bold text-orange-500">

ESWAR DOORS & ALUMINIUM

</h1>

<p className="text-gray-400 mt-3">

Loading...

</p>

</div>

)

}
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Background Particles */}

<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {[...Array(25)].map((_,i)=>(

    <div
      key={i}
      className="absolute bg-orange-500 rounded-full opacity-20 animate-pulse"
      style={{
        width:`${Math.random()*4+2}px`,
        height:`${Math.random()*4+2}px`,
        top:`${Math.random()*100}%`,
        left:`${Math.random()*100}%`,
        animationDuration:`${Math.random()*3+2}s`
      }}
    />

  ))}

</div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-5 sticky top-0 bg-black/60 backdrop-blur-xl border-b border-orange-500/10 shadow-[0_5px_30px_rgba(255,115,0,0.08)] z-50">

        <h1 className="text-sm md:text-2xl font-bold text-orange-500">
          ESWAR DOORS & ALUMINIUM
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">

          <a href="#home">
            <li className={`className="hover:text-orange-400 transition duration-300 hover:tracking-wider" ${
activeSection==="home"
?"text-orange-400 drop-shadow-[0_0_10px_rgba(255,115,0,0.5)]"
:""
}`}>

Home

</li>
          </a>

          <a href="#products">
           <li className={`hover:text-orange-400 transition ${
activeSection==="products"
? "text-orange-500"
: ""
}`}>

Products

</li>
          </a>

          <a href="#about">
            <li className={`hover:text-orange-400 transition ${
activeSection==="about"
? "text-orange-500"
: ""
}`}>

About

</li>
          </a>

          <a href="#contact">
            <li className={`hover:text-orange-400 transition ${
activeSection==="contact"
? "text-orange-500"
: ""
}`}>

Contact

</li>
          </a>

        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </div>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-[#111111] px-6 py-5 space-y-5 text-gray-300 border-b border-gray-800">

          <a href="#home">
            <p>Home</p>
          </a>

          <a href="#products">
            <p>Products</p>
          </a>

          <a href="#about">
            <p>About</p>
          </a>

          <a href="#contact">
            <p>Contact</p>
          </a>

        </div>

      )}

      {/* Hero Section */}
      <motion.section
id="home"
initial={{ opacity:0,y:80 }}
animate={{ opacity:1,y:0 }}
transition={{ duration:1 }}
className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
>

        <p className="relative z-10 text-orange-400 tracking-widest mb-4 text-sm md:text-base">
          P.V.C DOORS • ALUMINIUM WORKS • MATERIAL SALES
        </p>

        <h1 className="relative z-10 text-4xl md:text-7xl font-bold leading-tight max-w-6xl">

          ESWAR DOORS <br />
          & ALUMINIUM

        </h1>

        <p className="relative z-10 text-gray-400 mt-6 max-w-3xl text-base md:text-lg leading-9 tracking-wide">

          Premium quality PVC doors, aluminium works
          and hardware material sales with modern
          designs, durable products and trusted service.

        </p>

        <div className="relative z-10 flex gap-5 mt-8 flex-wrap justify-center">

  <a href="#products">

    <button className="bg-orange-500 hover:bg-orange-600 px-7 py-3 rounded-xl font-semibold transition duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,115,0,0.6)]">

      Explore Products

    </button>

  </a>

  <a href="#contact">

    <button className="border border-gray-700 hover:border-orange-500 px-7 py-3 rounded-xl transition duration-500 hover:scale-105 hover:bg-orange-500/10 hover:shadow-[0_0_20px_rgba(255,115,0,0.4)]">

      Contact Us

    </button>

  </a>

</div>

      </motion.section>
{/* Hero Background Logo */}

<div className="absolute inset-0 flex justify-center items-center pointer-events-none">

  <img
    src="/favicon.png"
    alt=""
    className="
    w-[500px]
    md:w-[700px]
    opacity-[0.03]
    object-contain
    blur-[1px]
    select-none
    "
  />

</div>


{/* Orange Glow */}

<div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>

<div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>
{/* Orange Glow Effects */}

<div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>

<div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>
      
      {/* Products Section */}
     <motion.section
id="products"
initial={{ opacity:0, y:80 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.8 }}
viewport={{ once:true }}
className="px-6 md:px-10 py-20"
>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our Products & Services
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {products.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-800 hover:border-orange-500 transition duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,115,0,0.2)]"
            >

              <img
                src={item.image}
                alt=""
                className="w-full h-72 object-cover transition duration-700 hover:scale-110"
              />

              <div className="p-6 relative z-10">

                <h3 className="text-2xl font-bold tracking-wide mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </motion.section>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>
      

      {/* About Section */}
      <motion.section
id="about"
initial={{ opacity:0, y:80 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.8 }}
viewport={{ once:true }}
className="px-6 md:px-10 py-20 bg-[#111111]"
>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About ESWAR DOORS & ALUMINIUM
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">

              ESWAR DOORS & ALUMINIUM specializes in
              premium PVC doors, aluminium fabrication
              works and quality hardware material sales
              for homes, offices and commercial spaces.

            </p>

            <p className="text-gray-400 text-lg leading-relaxed">

              We focus on quality materials, modern
              designs, trusted workmanship and customer
              satisfaction with durable and affordable
              solutions.

            </p>

          </div>

          <div className="bg-[#161616] p-10 rounded-3xl border border-gray-800">

            <h3 className="text-3xl font-semibold text-orange-400 mb-6">
              Why Choose Us?
            </h3>

            <div className="space-y-5 text-gray-300">

              <p>✔ Premium Quality PVC Doors</p>
              <p>✔ Modern Aluminium Designs</p>
              <p>✔ Trusted Material Sales</p>
              <p>✔ Affordable Pricing</p>
              <p>✔ Professional Customer Service</p>

            </div>

          </div>

        </div>

      </motion.section>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>

      {/* Owner / Shop Section */}

<motion.section
initial={{ opacity:0, y:80 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.8 }}
viewport={{ once:true }}
className="px-6 md:px-10 py-28"
>

  <div className="grid md:grid-cols-2 gap-12 items-center">

    <motion.div
      initial={{ opacity:0, x:-50 }}
      whileInView={{ opacity:1, x:0 }}
      transition={{ duration:0.8 }}
    >

      <img
        src={owner}
        alt=""
        className="rounded-3xl h-[500px] w-full object-cover border border-gray-800"
      />

    </motion.div>

    <motion.div
      initial={{ opacity:0, x:50 }}
      whileInView={{ opacity:1, x:0 }}
      transition={{ duration:0.8 }}
    >

      <h2 className="text-4xl md:text-5xl font-bold mb-8">

        Meet Our Business

      </h2>

      <p className="text-gray-400 text-lg leading-8 mb-6">

        ESWAR DOORS & ALUMINIUM provides premium PVC doors,
        aluminium works and hardware materials with trusted
        workmanship and customer-focused service.

      </p>

      <div className="space-y-4">

        <p>✔ Trusted Service</p>
        <p>✔ Quality Products</p>
        <p>✔ Affordable Pricing</p>
        <p>✔ Professional Work</p>

      </div>

    </motion.div>

  </div>

</motion.section>
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      {/* Customer Reviews Section */}

<motion.section
initial={{ opacity:0, y:80 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.8 }}
viewport={{ once:true }}
className="px-6 md:px-10 py-20"
>
<h2 className="text-3xl md:text-4xl font-bold text-center mb-20">

Customer Reviews

</h2>

<div className="grid md:grid-cols-3 gap-8">

{reviews.map((review,index)=>(

<motion.div
key={index}
initial={{ opacity:0,y:50 }}
whileInView={{ opacity:1,y:0 }}
transition={{ duration:0.6 }}
whileHover={{ y:-10 }}
className="bg-[#161616] p-8 rounded-3xl border border-gray-800 hover:border-orange-500 transition"
>

<div className="flex text-orange-500 gap-1 mb-4">

<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>

</div>

<p className="text-gray-400 mb-4">

"{review.text}"

</p>

<h3 className="font-semibold">

- {review.name}

</h3>

</motion.div>

))}

</div>

</motion.section>
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>

      {/* Contact Section */}
      <motion.section
id="contact"
initial={{ opacity:0, y:80 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.8 }}
viewport={{ once:true }}
className="px-6 md:px-10 py-20"
>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <h3 className="text-2xl font-semibold mb-6 text-orange-400">
              Get In Touch
            </h3>

            <p className="text-gray-400 mb-4">
              📍 Near S.R.M.T , Chipurupalle Road , Rajam -532127
                 ,Vizianagaram Dist (A.P.)
            </p>

            <p className="text-gray-400 mb-4">
              📞 +91 9000474236 , +91 7569623114
            </p>

            <p className="text-gray-400 mb-4">
              ✉️ eswarreddy8687@gmail.com
            </p>

            <p className="text-gray-400">
              ⏰ Mon - Sat : 9AM - 9PM | Sun : 9AM - 1PM
            </p>

          </div>

          <div className="bg-[#161616] p-8 rounded-3xl border border-gray-800">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-black mb-4 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-black mb-4 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 rounded-xl bg-black mb-4 outline-none"
            ></textarea>

            <a
href="https://wa.me/919000474236?text=Hello%20I%20am%20interested%20in%20your%20products"
target="_blank"
className="inline-block bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl font-semibold transition hover:scale-105"
>

Send Message

</a>

          </div>

        </div>

      </motion.section>

      {/* Google Maps Section */}

<motion.section
initial={{ opacity:0, y:80 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.8 }}
viewport={{ once:true }}
className="px-6 md:px-10 py-20"
>

  <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">

    Find Our Shop

  </h2>

  <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-lg">

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.800484135964!2d83.65124347550629!3d18.447365782632133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c77005f27317f%3A0x5f01e70e99af4c01!2sEswar%20doors%20and%20aluminium%20profiles%20and%20bathroom%20doors!5e0!3m2!1sen!2sin!4v1778742872549!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

  </div>

</motion.section>

      {/* Footer */}

<footer className="bg-[#0d0d0d] border-t border-orange-500/10 px-6 md:px-10 py-20 mt-10">

  <div className="grid md:grid-cols-3 gap-10">

    {/* Shop Info */}

    <div>

      <h2 className="text-3xl font-extrabold tracking-wide text-orange-400 mb-6 drop-shadow-[0_0_15px_rgba(255,115,0,0.4)]">

        ESWAR DOORS & ALUMINIUM

      </h2>

      <p className="text-gray-400 leading-8 tracking-wide">

        Premium PVC doors, aluminium works
        and material sales with trusted quality
        and professional service.

      </p>

    </div>

    {/* Quick Links */}

    <div>

      <h3 className="text-2xl font-bold mb-6 text-white">

        Quick Links

      </h3>

      <div className="space-y-3 text-gray-400">

        <p>
          <a href="#home" className="hover:text-orange-400">
            Home
          </a>
        </p>

        <p>
          <a href="#products" className="hover:text-orange-400">
            Products
          </a>
        </p>

        <p>
          <a href="#about" className="hover:text-orange-400">
            About
          </a>
        </p>

        <p>
          <a href="#contact" className="hover:text-orange-400">
            Contact
          </a>
        </p>

      </div>

    </div>

    {/* Contact */}

    <div>

      <h3 className="text-xl font-semibold mb-6">

        Contact

      </h3>

      <div className="space-y-3 text-gray-400">

        <p>
          📞 +91 9000474236
        </p>

        <p>
          📞 +91 7569623114
        </p>

        <p>
          ✉️ eswarreddy8687@gmail.com
        </p>

      </div>

    </div>

  </div>

  <div className="border-t border-orange-500/10 mt-14 pt-8 text-center text-gray-500 tracking-wide">

    @ ESWAR DOORS & ALUMINIUM | All Rights Reserved

  </div>

</footer>
      {/* Floating Contact Buttons */}

<div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

  {/* Email */}

  <a
href="https://mail.google.com/mail/?view=cm&fs=1&to=eswarreddy8687@gmail.com"
target="_blank"
className="bg-red-500 p-4 rounded-full text-2xl shadow-lg hover:scale-110 hover:rotate-6 transition duration-500"
>

📧

</a>
  {/* Phone */}

  <a
href="tel:+919000474236"
className="bg-blue-500 p-4 rounded-full text-2xl shadow-lg hover:scale-110 hover:-rotate-6 transition duration-500"
>

📞

</a>
  {/* WhatsApp */}

  <a
    href="https://wa.me/919000474236"
    target="_blank"
    className="bg-green-500 p-4 rounded-full text-2xl shadow-lg hover:scale-110 hover:rotate-6 transition duration-500"
  >

    <FaWhatsapp/>

  </a>

</div>

    </div>
  )
}

export default App