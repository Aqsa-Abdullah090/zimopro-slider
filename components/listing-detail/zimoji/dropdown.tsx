/* eslint-disable @next/next/no-img-element */
import { AnimatePresence } from "framer-motion";
import useThemeContext from "../useThemeContext";
import ContentWrapper from "./content-wrapper";
import { LdpResponce } from "@/lib/types";

interface Props {
  data: LdpResponce;
}

function ZimojiDropdown({ data }: Props) {
  const { zimoji } = useThemeContext();

  return (
    <AnimatePresence>
      {zimoji && <ContentWrapper data={data} />}
    </AnimatePresence>
  );
}
export default ZimojiDropdown;
