"use client";

import { motion } from "framer-motion";

export default function PageAnimation({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="h-full"
        >
            {children}
        </motion.div>
    );
}