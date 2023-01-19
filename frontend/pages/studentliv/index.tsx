import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { useState, useContext } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { MobileStateContext } from "../../contexts/MobileContexts";
import Events from "../../components/studentliv/Events";
import ImageCarousel from "../../components/studentliv/ImageCarousel";
import gruppbild from "../../assets/gruppbild.jpg";

const StudentlivPage: NextPage = () => {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Head>
        <title>Medieteknik | Studentliv</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        container
        className="imageContainer"
        sx={{
          // opacity: 0.3,
          height: "70vh",
          position: "relative !important",
          backgroundImage: `url(${gruppbild.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{ textAlign: "center", width: "100%", zIndex: 4 }}
        >
          STUDENTLIV
        </Typography>
        <div className="shape">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </Grid>

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
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" sx={{ m: 2 }}>
            Bostad
          </Typography>
          <Typography sx={{ m: 2 }}>
            Vi erbjuder dig bostäder med närhet till centrum och Campus
            Norrköping. Här läser du mer om våra olika studentområden och du kan
            se på en karta var respektive hus ligger.
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
      <Grid container>
        <Grid
          item
          sx={{
            // opacity: 0.3,
            height: "70vh",
            position: "relative !important",
            backgroundImage: `url(${gruppbild.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Grid>
      </Grid>

      <Grid container>
        <Typography variant="h3" sx={{ textAlign: "center", width: "100%" }}>
          Sektionens event
        </Typography>
        <Events />
      </Grid>
    </motion.div>
  );
};

export default StudentlivPage;
