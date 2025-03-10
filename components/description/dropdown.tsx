import { useGSAP } from "@gsap/react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import useThemeContext from "../useThemeContext";
import ContentWrapper from "./content-wrapper";
import { LdpResponce } from "@/lib/types";

gsap.registerPlugin(useGSAP);

interface Props {
  data: LdpResponce;
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
