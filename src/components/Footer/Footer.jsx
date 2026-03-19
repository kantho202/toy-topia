import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className=" footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <nav className='w-11/12 mx-auto'>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <div>
                
                <h6 className="footer-title">Social Media</h6>
                <div className='flex gap-4'>
                   <a href="https://www.facebook.com/"> <FaFacebook size={30}></FaFacebook></a>
                   <a href="https://www.youtube.com/"> <FaYoutube size={30}></FaYoutube></a>
                   <a href="https://www.instagram.com/"> <FaInstagram size={30}></FaInstagram></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;