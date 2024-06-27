import {
  Box,
  Button,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";

import ArrowLeft from "../../../../public/arrow-left.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header({ num, nextStepHandler }) {
  const router = useRouter();
  return (
    <>
      <Typography alignSelf="center" color="gray" mb="-30px">
        {`${num} از ۶`}
      </Typography>
      <Box display="flex" alignItems="center" gap="8px">
        <IconButton
          sx={{ bgcolor: "red", bgcolor: "#E3E4E3" }}
          onClick={nextStepHandler}
        >
          <Image src={ArrowLeft.src} width={24} height={24} />
        </IconButton>
        <LinearProgress
          variant="determinate"
          value={(num / 6) * 100}
          sx={{
            height: "8px",
            width: "80%",
            borderRadius: "10px",
            rotate: "180deg",
          }}
        />
        <Button
          variant="text"
          color="inherit"
          onClick={() => router.push("/user/patient")}
        >
          بعدا
        </Button>
      </Box>
    </>
  );
}
