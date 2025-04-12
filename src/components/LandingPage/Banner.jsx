// import React, { useEffect } from "react";
// import vid from "../../assets/vids/banner.mp4";
// import ReactPlayer from "react-player";
// import { Link } from "react-router-dom";
// import robot from "../../assets/ai-robot.png";
// import gsap from "gsap";

// const Banner = () => {
//   useEffect(() => {
//     const tl = gsap.timeline({
//       repeat: -1,
//       yoyo: true,
//     });

//     tl.to("#robot", {
//       translateY: -80,
//       duration: 2,
//       ease: "power1.inOut",
//     });

//     // Add hover event listeners to pause and resume animation
//     const robotElement = document.getElementById("robot");

//     const handleMouseEnter = () => {
//       tl.pause(); // Pause animation on hover
//     };

//     const handleMouseLeave = () => {
//       tl.resume(); // Resume animation when hover ends
//     };

//     robotElement.addEventListener("mouseenter", handleMouseEnter);
//     robotElement.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       tl.kill(); // Clean up animation
//       robotElement.removeEventListener("mouseenter", handleMouseEnter);
//       robotElement.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);
//   return (
//     <div id="banner" className="min-h-screen banner relative">
//       {/* <div id="banner" className="min-h-[calc(100vh+10rem)] banner relative"> */}
//       <ReactPlayer
//         url={vid}
//         playing
//         loop
//         muted
//         width="100%"
//         height="100%"
//         playsinline
//         pip={false}
//         playbackRate={0.4}
//         config={{
//           file: {
//             attributes: {
//               controlsList: "nodownload noplaybackrate",
//               disablePictureInPicture: true,
//               playsinline: true,
//             },
//           },
//         }}
//         controls={false}
//       />
//       <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
//       <div className="absolute w-full h-fit left-1/2 -translate-x-1/2 top-1/2 -translate-y-[40%] wrapper flex flex-col-reverse md:grid grid-cols-[60%_auto] items-center md:gap-10">
//         <div
//           data-aos="fade-right"
//           className="flex w-full flex-col items-start justify-center relative z-10 gap-5"
//         >
//           <p className="text-xl   tracking-wide text-white mt-2">
//             Welcome to Your Trusted{" "}
//             <span className="text-primary font-bold">Technology Partner</span>
//           </p>
//           <h1 className="heading-1 text-white capitalize">
//             Softfactory delivers innovative and secure digital solutions.
//           </h1>
//           <Link to="/contact-us" className="primary-btn mt-5">
//             Get Started Now
//           </Link>
//         </div>
//         <div data-aos="fade-left" className="md:flex hidden justify-center">
//           <Link to="/contact-us" id="robot">
//             <img
//               src={robot}
//               className="w-[15rem] object-contain relative z-0"
//               alt="robot"
//             />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React, { useState } from "react";
import vid from "../../assets/vids/banner.mp4";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import bannerThumb from "../../assets/vids/banner-thumb1.webp";

const Banner = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  const [isVideoLoaded, setVideoLoaded] = useState(false);

  return (
    <div id="banner" className="min-h-screen relative overflow-hidden">
      {!isVideoLoaded && (
        <img
          src={bannerThumb}
          alt=""
          loading="lazy"
          width="800"
          height="800"
          className="w-full h-full object-cover"
        />
      )}
      {/* Video Background */}
      <ReactPlayer
        url={vid}
        playing
        loop
        muted
        width="100%"
        height="100%"
        playsinline
        pip={false}
        playbackRate={0.4}
        onReady={() => setVideoLoaded(true)}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload noplaybackrate",
              disablePictureInPicture: true,
              playsinline: true,
            },
          },
        }}
        controls={false}
      />

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      {/* Content */}
      <div className="absolute w-full h-fit left-1/2 -translate-x-1/2 top-1/2 -translate-y-[40%] wrapper flex flex-col items-center text-center px-4">
        <div className="flex w-full max-w-5xl mx-auto flex-col items-center justify-center relative z-10 gap-5">
          <p className="text-xl tracking-wide text-white mt-2">
            Welcome to Your Trusted{" "}
            <span className="text-primary font-bold">Technology Partner</span>
          </p>

          {isWebDevelopment ? (
            <>
              <h1 data-aos="fade-right" className="heading-1 text-white">
                Bringing Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Digital Presence to Life
                </span>
              </h1>
              <p data-aos="fade-right" className="description text-white mt-2">
                A strong online presence is critical in today’s digital-first
                world. At Softfactory, we create websites that are not only
                visually appealing but also functional, user-friendly, and
                optimized for performance. Whether you need a simple
                informational site or a complex web application, our team works
                closely with you to deliver a product that aligns with your
                business goals and provides a seamless experience for your
                users.
              </p>
            </>
          ) : (
            <>
              <h1 data-aos="fade-right" className="heading-1 text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Your Vision,
                </span>{" "}
                Our Expertise!
              </h1>
              <p data-aos="fade-right" className="description text-white mt-2">
                Mobile apps are no longer just a trend; they are essential tools
                for engaging your customers and expanding your business. At
                Softfactory, we specialize in developing mobile applications
                that are tailored to meet your business objectives. Whether
                you’re looking for native iOS/Android apps or cross-platform
                solutions, our team has the expertise to build apps that are
                user-centric, reliable, and high-performing.
              </p>
            </>
          )}
          <Link
            to="/contact-us"
            className="primary-btn mt-8 px-8 py-3 text-lg bg-gradient-to-r from-cyan-500 to-blue-600 border-none hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Get Started Now
          </Link>
        </div>
      </div>

      {/* Futuristic grid overlay */}
      <div className="absolute inset-0 pointer-events-none"></div>
    </div>
  );
};

export default Banner;
