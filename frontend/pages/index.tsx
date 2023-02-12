import {
  Box, Container, Grid, Stack, Typography
} from "@mui/material";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import { fadeInUp } from "../animations/constants";
import gruppbild from "../assets/gruppbild.jpg";
import gruppbild2 from "../assets/gruppbild2.jpg";
import nollep from "../assets/nollep.jpg";
import studentlivPicture from "../assets/studentlivImage.png";
import valueIconImage from "../assets/valueIcon.png";
import BackgroundImage from "../components/general/BackgroundImage";
import Carousel from "../components/general/Carousel";
import WavyBackground from "../components/general/WavyBackground";
import MtValues from "../components/home/mtValues";

const groupImage = ((gruppbild as unknown) as HTMLImageElement | null)?.src;
const groupImage2 = ((gruppbild2 as unknown) as HTMLImageElement | null)?.src;
const valueIcon = ((valueIconImage as unknown) as HTMLImageElement)?.src;
const studentlivImage = ((studentlivPicture as unknown) as HTMLImageElement)?.src;
const nollepImage = ((nollep as unknown) as HTMLImageElement)?.src;


const Home: NextPage = () => {
  const constraintsRef1 = useRef(null);
  const constraintsRef2 = useRef(null);
  const constraintsRef3 = useRef(null);
  const constraintsRef4 = useRef(null);

  return (
    <>
      <motion.div
        // style={{
        //   backgroundImage: `url(${gruppbild.src})`,
        //   backgroundSize: "cover",
        // }}
        animate="animate"
        initial="initial"

      >
        <Head>
          <title>Civilingenjör i Medieteknik</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <video autoPlay loop muted id="video">
        <source
          src={require(`../assets/introVideo.mp4`).default.src}
          type="video/mp4"
        />
      </video> */}
        <BackgroundImage imgSrc={gruppbild.src}>
          <Grid
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%", height: "80vh", zIndex: 100 }}
          >
            <Grid
              container
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <motion.div ref={constraintsRef1} variants={fadeInUp}>
                <motion.div
                  drag
                  dragConstraints={constraintsRef1}
                  style={{
                    backgroundColor: "#EC6610",
                    width: "150px",
                    height: "150px",
                  }}
                />
              </motion.div>
              <div style={{ margin: "20px" }}></div>
              <motion.div ref={constraintsRef2}>
                <motion.div
                  drag
                  dragConstraints={constraintsRef2}
                  style={{
                    backgroundColor: "#3b484f",
                    width: "150px",
                    height: "150px",
                  }}
                />
              </motion.div>
            </Grid>
            <div style={{ margin: "10px" }}></div>
            <motion.div ref={constraintsRef3}>
              <motion.div
                drag
                dragConstraints={constraintsRef3}
                style={{
                  fontFamily: "Lato",
                  fontSize: "45px",
                }}
              >
                CIVILINGENJÖR
              </motion.div>
            </motion.div>
            <motion.div ref={constraintsRef4}>
              <motion.div
                drag
                dragConstraints={constraintsRef4}
                style={{
                  fontFamily: "Barlow",
                  fontWeight: "bold",
                  fontSize: "64px",
                }}
              >
                MEDIETEKNIK
              </motion.div>
            </motion.div>
          </Grid>
        </BackgroundImage>
      </motion.div>
      <Container disableGutters maxWidth={false} style={{ background: 'white' }}>
        <Typography padding="20px 0px" color="black" variant="h1" textAlign="center">Vad är MT?</Typography>
        <Container disableGutters maxWidth={false} style={{ paddingBottom: "30px" }}>
          <Typography fontSize={20} color="black" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Stack marginTop={5} direction="row">
            <MtValues image={valueIcon} title={"Kreativitet"} description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            } />
            <MtValues image={valueIcon} title={"Teknik"} description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            } />
            <MtValues image={valueIcon} title={"Problemlösning"} description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            } />
          </Stack>
          <Box marginTop={12} marginBottom={20} display={"flex"} flexDirection="row" alignItems={"center"} gap={10}>
            <Box alignSelf="flex-start" flex={3} width={400}>
              <Typography textAlign="center" variant="h2">Studentliv</Typography>
              <Typography textAlign="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>
            <Image style={{ flex: 1 }} width={511 * 0.4} height={658 * 0.4} src={studentlivImage} />
          </Box>
        </Container>
          <WavyBackground bgColor={"#008081"} textColor={""}>
            <Carousel titles={["Sektionen", "3Cant", "Mette"]} images={[groupImage!, groupImage2!, nollepImage!]} />
          </WavyBackground>
      </Container>
        
    </>
  );
};

export default Home;
