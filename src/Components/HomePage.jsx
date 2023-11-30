"use client"

import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"
import logo from "/public/Image/bigLogo.png"
import text from "/public/Image/textGradient.png"
import { motion } from "framer-motion"
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"

// import styles from "../styles/reveal.module.css"

import dynamic from "next/dynamic"
import { Fragment, useEffect, useState } from "react"

import {
  RevealContainer,
  RevealArtifact,
  RevealContent,
  ReversedRevealContainer,
  ReversedRevealContent,
  ReversedRevealArtifact,
} from "./RevealComponent"

const HomePage = () => {
  return (
    <div className="h-[95vh] space-x-8 flex justify-center items-center   ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2, // Adjust the duration for the fade-in effect
          delay: 2.2,
        }}
      >
        <motion.div
          animate={{ y: [0, 0, 0], rotate: 360 }}
          transition={{
            duration: 4,
            // repeat: Infinity,
            // repeatType: "loop",
          }}
        >
          <Image src={logo} height={200} width={200} alt="Nexus Logo" />
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5, // Adjust the duration for the fade-in effect
        }}
      >
        <div className="flex  flex-col   space-y-6">
          <div className="flex text-3xl font-semibold text-gray-700 items-center space-x-4">
            <RevealContainer delay={1.2}>
              <h1>
                <RevealContent>
                  <div className="flex items-center">
                    <div>Welcome To, </div>
                    <div className=" h-2 w-[20rem] bg-primary ml-4 mt-2" />
                  </div>
                </RevealContent>
                <RevealArtifact />
              </h1>
            </RevealContainer>
            <div>
              <h1></h1>
            </div>

            {/* <div className=" h-2 w-[20rem] bg-primary"/>  */}
            {/* <div className="reveal">
              <h1 className="reveal__content">Welcome To,</h1>
              <span className="reveal__artifact"></span>
            </div> */}
          </div>

          <div className="flex  ">
            <ReversedRevealContainer delay={4}>
              <ReversedRevealContent>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5, // Adjust the duration for the fade-in effect
                    delay: 1,
                  }}
                >
                  <Image
                    src={text}
                    height={580}
                    width={580}
                    alt="Nexus Network"
                    className=""
                  />
                </motion.div>
              </ReversedRevealContent>
              <ReversedRevealArtifact />
            </ReversedRevealContainer>
          </div>

          <div className="flex items-center space-x-4">
            <RevealContainer delay={2.3}>
              <h1>
                <RevealContent>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.5, // Adjust the duration for the fade-in effect
                      delay: 2,
                    }}
                  >
                    <div className="flex h-[8vh] items-center -mt-2 ">
                      <div className=" h-2 w-[4rem] bg-primary mr-3" />
                      <div>
                        <h1 className="text-4xl -mt-3 font-semibold text-gray-700">
                          An Economic Layer for Rollups
                        </h1>
                      </div>
                    </div>
                  </motion.div>
                </RevealContent>
                <RevealArtifact />
              </h1>
            </RevealContainer>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export { HomePage }
