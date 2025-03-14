/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from "framer-motion";
import ContentWrapper from "./content-wrapper";

interface Props {
  data: any;
}

function ZimojiDropdown({ data }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute bottom-20 left-0 bg-white shadow-lg p-4 rounded-lg"
      >
        <ContentWrapper data={data} />
      </motion.div>
    </AnimatePresence>
  );
}

export default ZimojiDropdown;

