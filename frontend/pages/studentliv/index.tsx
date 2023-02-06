import Head from "next/head";
import type { NextPage } from "next";
import { useContext } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { MobileStateContext } from "../../contexts/MobileContexts";
import Events from "../../components/studentliv/Events";
import ImageCarousel from "../../components/studentliv/ImageCarousel";
import gruppbild from "../../assets/gruppbild.jpg";
import nollePImage from "../../assets/nollep.jpg";
import Studentkonto from "../../components/studentliv/Studentkonto";
import fiket from "../../assets/fiket.jpg";
import BackgroundImage from "../../components/general/BackgroundImage";

const StudentlivPage: NextPage = () => {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Head>
        <title>Medieteknik | Studentliv</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container sx={{ justifyContent: "center" }}>
        <BackgroundImage pageName="STUDENTLIV" imgSrc={gruppbild.src} />

        <Grid
          container
          spacing={3}
          sx={{
            marginTop: "50px",
            p: 3,
          }}
        >
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
            <ImageCarousel />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h2" sx={{ m: 2 }}>
              Bostad
            </Typography>
            <Typography sx={{ m: 2 }}>
              Som student i Norrköping finns det flera olika boendemöjligheter.
              Studentbo i Norrköping tillhandahåller flera olika boenden med
              gångavstång till Campus. Om du funderar på att börja plugga i
              Norrköping kan du ställa dig i kö direkt.
              <br />
              <br />
              Det finns även bra pendlingsmöjligheter från Linköping.
              Campusbussen är gratis för alla studenter och åker mellan Campus
              US, Campus Valla och Campus Norrköping.
            </Typography>
            <Button
              target="_blank"
              href="https://hyresbostader.se/studentbo"
              variant="contained"
              color="secondary"
              sx={{ marginTop: 2, marginBottom: "30px" }}
            >
              Till studentbo.se
            </Button>
          </Grid>
        </Grid>
        <Grid container sx={{ paddingTop: 3, paddingBottom: 3 }}>
          <img
            src={nollePImage.src}
            style={{ height: "30vh", width: "100%", objectFit: "cover" }}
          />
        </Grid>

        <Grid sx={{ textAlign: "center", width: "70%", p: 3 }}>
          <Typography variant="h2">Nolle-P</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
        <Grid container sx={{ marginTop: 3, marginBottom: 3 }}>
          <Studentkonto />
        </Grid>

        <Grid
          container
          sx={[
            { textAlign: "center" },
            isDesktop && { width: "50%" },
            isIpad && { width: "70%" },
          ]}
        >
          <Typography variant="h2" sx={{ textAlign: "center", width: "100%" }}>
            Nöjen
          </Typography>
          <Grid item xs={4} sx={{ p: 3 }}>
            <img
              src={fiket.src}
              width="100%"
              style={{ borderRadius: "10px", objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={4} sx={{ p: 3 }}>
            <img
              src={fiket.src}
              width="100%"
              style={{ borderRadius: "10px", objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={4} sx={{ p: 3 }}>
            <img
              src={fiket.src}
              width="100%"
              style={{ borderRadius: "10px", objectFit: "contain" }}
            />
          </Grid>
          <Typography variant="h3" sx={{ textAlign: "center", width: "100%" }}>
            Sektionens event
          </Typography>
          <Events />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default StudentlivPage;
