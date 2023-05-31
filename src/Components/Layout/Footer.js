import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          bgcolor: "#1A1A19",
          color: "white",
          px: 2,
          py: 2,
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: { xs: 2 },
        }}
      >
        {/* Tentang */}
        <Box
          sx={{
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            // bgcolor: "red",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", fontSize: "18px" }}
          >
            Tentang
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontSize: "12px", textAlign: "justify" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
        </Box>
        {/* tutup Tentang */}

        {/* Produk */}
        <Box
          sx={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            // bgcolor: "blue",
            px: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", fontSize: "18px" }}
          >
            Produk
          </Typography>
          <Box
            sx={{
              mx: 4,
              "& ul": {
                display: "grid",
                gridTemplateColumns: "repeat(2, auto)",
                gridTemplateRows: "repeat(3,auto)",
                gridAutoFlow: "column",
              },
            }}
          >
            <ul>
              <li>Drum</li>
              <li>Gitar</li>
              <li>Bass</li>
              <li>Saxopone</li>
              <li>Senar</li>
            </ul>
          </Box>
        </Box>
        {/* Tutup Produk */}

        {/* Alamat & Kontak */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            // bgcolor: "green",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Alamat
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: "12px", textAlign: "justify" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Kontak
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Box
                sx={{
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                  cursor: "pointer",
                }}
                width={40}
                height={40}
                bgcolor="primary.light"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <PhoneIcon color="inherit" />
              </Box>
              <Box
                sx={{
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                  cursor: "pointer",
                }}
                width={40}
                height={40}
                bgcolor="primary.light"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <InstagramIcon color="inherit" />
              </Box>
              <Box
                sx={{
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                  cursor: "pointer",
                }}
                width={40}
                height={40}
                bgcolor="primary.light"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <YouTubeIcon color="inherit" />
              </Box>
              <Box
                sx={{
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                  cursor: "pointer",
                }}
                width={40}
                height={40}
                bgcolor="primary.light"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <TelegramIcon color="inherit" />
              </Box>
              <Box
                sx={{
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                  cursor: "pointer",
                }}
                width={40}
                height={40}
                bgcolor="primary.light"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <AlternateEmailIcon color="inherit" />
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Tutup Alamat */}
      </Box>
    </>
  );
}
