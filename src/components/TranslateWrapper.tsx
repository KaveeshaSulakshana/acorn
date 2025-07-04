"use client"
import {motion} from "framer-motion";
import {PropsWithChildren} from "react";

interface Props extends PropsWithChildren {
    reverse?: boolean;
    duration?: number;
}

const TranslateWrapper = ({children, reverse, duration}: Props) => {
    return (
        <motion.div
            initial={{x: reverse ? "-100%" : "0%"}}
            animate={{x: reverse ? "0%" : "-100%"}}
            transition={{
                duration: duration ?? 50,
                repeat: Infinity,
                ease: "linear",
            }}
            className="flex gap-4 mr-4"
        >
            {children}
        </motion.div>
    );
};

export default TranslateWrapper;