import Head from "next/head";
import type { NextPage } from "next";
import { useState, useContext } from "react";
import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { MobileStateContext } from "../../contexts/MobileContexts";

const StudentlivPage: NextPage = () => {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Head>
        <title>Medieteknik | Studentliv</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container>
        <Typography variant="h1">Studentliv</Typography>
      </Grid>
    </motion.div>
  );
};

export default StudentlivPage;
