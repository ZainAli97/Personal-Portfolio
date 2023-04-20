import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://twitter.com/ZainAliSiddiqi/" target='__blank'>
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/profile.php?id=100089490652183" target='__blank'>
                    <FaFacebookF />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/zainalisiddiqui11/" target='__blank'>
                    <BsInstagram />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;