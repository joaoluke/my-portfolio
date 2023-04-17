import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

export const useAnimation = () => {
	return {
		MotionComponent: motion.section,
		motionProps: {
			variants: staggerContainer(),
			initial: "hidden",
			whileInView: "show",
			viewport: { once: true, amount: 0.25 },
		},
	};
};