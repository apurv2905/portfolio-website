"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "@/Components/Skills/Skill";

type Props = {};

export default function Skills({}: Props) {
    return (
        <motion.div
            // initial={{
            //     opacity: 0,
            //     y: 30,
            // }}
            // whileInView={{
            //     opacity: 1,
            //     y: 0,
            // }}
            // transition={{ duration: 2.0 }}
            className="flex relative flex-col text-center md:text-left xl:flow-row msx-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-1xl">Skills</h3>
            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                Hover over a skill for current proficiency
            </h3>

            <div className="grid grid-cols-4 gap-5">
                <Skill directionLeft/>
                <Skill directionLeft/>
                <Skill directionLeft/>
                <Skill directionLeft/>
                <Skill directionLeft/>
                <Skill directionLeft/>
                <Skill directionLeft/>
                <Skill directionLeft/>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>

        </motion.div>
    );
}