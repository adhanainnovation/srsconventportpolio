import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { YouTube } from "@mui/icons-material";
import { useState } from "react";

function Footer() {
  const [count, setCount] = useState(0);

  const handleVisitorClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <footer className="text-center text-lg-start text-muted bg-gray-50">
      {/* Top Section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Address Section */}
            <div className="col-12 col-md-4 col-lg-3 mx-auto mb-4">
              <h6 className="text-uppercase font-bold mb-4">
                SRS Convent School
              </h6>
              <p>
                Address: <br />
                Sector 62, <br />
                Uncha Gaon, <br />
                121004.
              </p>
            </div>

            {/* Contact & Social Media Section */}
            <div className="col-12 col-md-4 col-lg-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-bold mb-4">Contact Us</h6>
              <p>
                Phone No:{" "}
                <a
                  href="tel:+918383076392"
                  className="text-blue-600 hover:underline"
                >
                  +91 8383076392
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:srsconventschool1999@gmail.com"
                  className="text-black hover:underline"
                >
                  srsconventschool1999@gmail.com
                </a>
              </p>

              <h6 className="text-uppercase font-bold mb-3 mt-3">Follow Us</h6>

              {/* Social Icons with Flex Alignment */}
              <div className="flex justify-center md:justify-start gap-8 mb-4 items-center">
                <motion.a
                  href="https://www.instagram.com/srs_convent_school/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-700 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <InstagramIcon fontSize="inherit" />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/@srsconventschool1354"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <YouTube fontSize="inherit" />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/srsconventschool1999/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <FacebookIcon fontSize="inherit" />
                </motion.a>
              </div>
            </div>

            {/* Support Section */}
            <div className="col-12 col-md-4 col-lg-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-bold mb-4">Support</h6>
              <div className="flex flex-col gap-3">
                <p>
                  <span className="font-semibold">Manager</span>
                  <br />
                  Name: Mr. Aditya Goyal
                  <br />
                  <span className="font-semibold">Chairman</span>
                  <br />
                  Name: Mr. Gourav Adhana
                  <br />
                  <span className="font-semibold">Principal</span>
                  <br />
                  Name: Mr. Rakesh
                  <br />
                  Phone:{" "}
                  <a
                    href="tel:+918383076392"
                    className="text-black hover:underline"
                  >
                    +91 8383076392
                  </a>
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-2 mb-4 items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/10741/10741336.png"
                alt="visitor icon"
                className="w-20 lg:float-right"
                onClick={handleVisitorClick}
              />
              <p className="text-sm text-gray-700">Visitor Count: {count}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2025 SRS Convent School. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
