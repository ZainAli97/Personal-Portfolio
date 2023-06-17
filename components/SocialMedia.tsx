import Link from 'next/link';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
const SocialMedia: React.FC = () => {
    return (
        <div className='app__social'>
            <div>
                <Link href="https://twitter.com/ZainAliSiddiqi/" target='__blank'>
                    <BsTwitter />
                </Link>
            </div>
            <div>
                <Link href="https://www.facebook.com/profile.php?id=100089490652183" target='__blank'>
                    <FaFacebookF />
                </Link>
            </div>
            <div>
                <Link href="https://www.instagram.com/zainalisiddiqui11/" target='__blank'>
                    <BsInstagram />
                </Link>
            </div>
        </div>
    );
};

export default SocialMedia;