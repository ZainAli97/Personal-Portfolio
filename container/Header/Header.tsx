"use client";
import "./Header.scss";
import { motion } from 'framer-motion';
import { images } from '@constants';
import { AppWrap } from '@Wrapper';
import Image from "next/image";
const scaleVarients = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
};
const Header = () => {
    return (
        <>
            <div className='app__header app__flex'>
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    className="app__header-info">
                    <div className='app__header-badge'>
                        <div className='badge-cmp app__flex'>
                            <span>👋</span>
                            <div style={{ marginLeft: 20 }}>
                                <p className='p-text'>Hi, I am</p>
                                <h1 className='head-text'>Zain</h1>
                            </div>
                        </div>
                        <div className='tag-cmp app__flex'>
                            <p className='p-text'>Web Develepor</p>
                            <p className='p-text'>UI - UX Designer</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, delayChildren: 0.5 }}
                    className="app__header-img">
                    <Image src={images.profile} alt="profile_bg" />
                    <motion.img
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                    <Image
                        src={images.circle}
                        alt="profile_circle"
                        className='overlay_circle'
                    />
                </motion.div>

                <motion.div
                    variants={scaleVarients}
                    whileInView={scaleVarients.whileInView}
                    className="app__header-circles">
                    {[images.react, images.redux, images.sass].map((circle, index) => (
                        <div
                            className='circle-cmp app__flex'
                            key={`circle-${index}`}>
                            <Image src={circle} alt="circle" />
                        </div>
                    ))}
                </motion.div>

            </div>
        </>
    );
};

export default AppWrap(Header, "home");