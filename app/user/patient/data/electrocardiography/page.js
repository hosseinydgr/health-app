import Image from "next/image";
import Page from "../../../../../public/page.svg";
import { Stack } from "@mui/material";

export default function Electrocardiography() {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Image src={Page.src} width={343} height={996} />;
    </Stack>
  );
}
