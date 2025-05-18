import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ImageUploadPage from "./admin/admin";
import AdmissionForm from "./admissionform";
import LoginPage from "./admin/admin";
// import Dashboard from "./dashboard/dashboard";
import Dashboard from "./dashboard";

// Lazy load components
const Coursoul = lazy(() => import('./home/Coursoul'));
const Main1 = lazy(() => import('./home/Main1'));
const Main2 = lazy(() => import('./home/Main2'));
const Marquee = lazy(() => import('./home/Marquee'));
const Main3 = lazy(() => import('./home/Main3'));
const Timer = lazy(() => import('./home/Timer'));
const Faculty = lazy(() => import('./faculty/Faculty'));
const Students = lazy(() => import('./student/Students'));
const Events = lazy(() => import('./event/Events'));
const Curriculum = lazy(() => import('./academic/Curriculum'));
const Moto = lazy(() => import('./mission/Moto'));
const College = lazy(() => import('./about/About'));
const Contact = lazy(() => import('./Contact'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading...</div>}> {/* Loading spinner or placeholder */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Coursoul />
                <Marquee text="Welcome to SRS Convent School, where we nurture young minds for a brighter future." />
                <Timer />
                <Main2 />
                <Main1 />
                <Main3 />
              </motion.div>
            }
          />
          <Route
            path="/faculty"
            element={
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Faculty />
              </motion.div>
            }
          />
          <Route
            path="/students"
            element={
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Students />
              </motion.div>
            }
          />
          <Route
            path="/events"
            element={
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Events />
              </motion.div>
            }
          />
          <Route
            path="/curriculum"
            element={
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Curriculum />
              </motion.div>
            }
          />
          <Route
            path="/moto"
            element={
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Moto />
              </motion.div>
            }
          />
          <Route
            path="/aboutus"
            element={
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <College />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="/admin"
            element={
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <LoginPage />
              </motion.div>
            }
          />
          <Route
            path="/form"
            element={
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
              <AdmissionForm />
              </motion.div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <motion.div initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
              <Dashboard />
              </motion.div>
            }
          />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default AnimatedRoutes;
