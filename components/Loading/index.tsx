import { motion } from "framer-motion";

export default function Loader() {
  const colors = [
    "rgb(250, 170, 51)",
    "rgb(55, 118, 171)",
    "rgb(255, 160, 122)",
    "rgb(250, 170, 51)",
    "rgb(55, 118, 171)",
  ];

  const containerVariants = {
    animate: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    animate: {
      height: [40, 80, 40],
      transition: { repeat: Infinity, duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        zIndex: 1000,
        gap: "30px",
        backgroundColor: "black",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="animate"
        style={{
          display: "flex",
          gap: 16,
          height: 100,
          alignItems: "center",
        }}
      >
        {colors.map((color, index) => (
          <motion.div
            key={`${color}_${index}`}
            variants={childVariants}
            initial={{ height: 40 }}
            style={{
              height: 40,
              width: 20,
              backgroundColor: color,
              borderRadius: 20,
            }}
          />
        ))}
      </motion.div>
      <motion.div
        style={{
          color: "white",
          fontSize: "30px",
          fontFamily: "Segoe UI",
          fontWeight: "bold",
        }}
      >
        Loading...
      </motion.div>
    </motion.div>
  );
}
