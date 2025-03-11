import { useGSAP } from "@gsap/react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import useThemeContext from "../heroSection/useThemeContext";
import ContentWrapper from "./content-wrapper";

gsap.registerPlugin(useGSAP);

interface Props {
  data: any;
}

function DescriptionDropdown({ data }: Props) {
  const { description } = useThemeContext();

  return (
    <AnimatePresence>
      {description && <ContentWrapper data={data} />}
    </AnimatePresence>
  );
}
export default DescriptionDropdown;
