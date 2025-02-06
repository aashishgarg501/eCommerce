import React from 'react'

const Footer = () => {
    const paymentMethods = [
        { name: "Google Pay", src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Google_Pay_Logo.svg" },
        { name: "MasterCard", src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
        { name: "PayPal", src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
        { name: "American Express", src: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" },
        { name: "Apple Pay", src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" },
        { name: "O Pay", src: "https://upload.wikimedia.org/wikipedia/commons/1/11/Opay_logo.png" },
    ];

    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="footer-grid">
                        <div class="footer-section">
                            <h3>BE THE FIRST TO KNOW</h3>
                            <p>Sign up for updates from mettā muse</p>
                            <div class="input-group">
                                <input type="email" placeholder="Enter your email..." />
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                        <div class="footer-section">
                            <h3>CONTACT US</h3>
                            <p>+44 221 133 5360</p>
                            <p>customercare@mettamuse.com</p>
                            <h3>CURRENCY</h3>
                            <p>
                                <span class="currency">USD $</span>
                            </p>
                            <span class="currency-note">Transaction will be completed in Euro and a currency difference is available to view</span>
                        </div>

                        <div class="footer-links">
                            <div>
                                <h3>mettā muse</h3>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Stories</a></li>
                                    <li><a href="#">Artisans</a></li>
                                    <li><a href="#">Boutiques</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">EU Compliance Docs</a></li>
                                </ul>

                            </div>
                            <div>
                                <h3>QUICK LINKS</h3>
                                <ul>
                                    <li><a href="#">Orders & Shipping</a></li>
                                    <li><a href="#">Join/Login as a Seller</a></li>
                                    <li><a href="#">Payment & Pricing</a></li>
                                    <li><a href="#">Return & Refunds</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-section">
                            <h3>FOLLOW US</h3>
                            <div class="social-icons">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path></g></g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM14,11.01172c-1.09522,0 -2.08078,0.32736 -2.81055,0.94141c-0.72977,0.61405 -1.17773,1.53139 -1.17773,2.51367c0,1.86718 1.61957,3.32281 3.67969,3.4668c0.0013,0.00065 0.0026,0.0013 0.00391,0.00195c0.09817,0.03346 0.20099,0.05126 0.30469,0.05273c2.27301,0 3.98828,-1.5922 3.98828,-3.52148c-0.00018,-0.01759 -0.00083,-0.03518 -0.00195,-0.05274c-0.10175,-1.90023 -1.79589,-3.40234 -3.98633,-3.40234zM14,12.98828c1.39223,0 1.94197,0.62176 2.00195,1.50391c-0.01215,0.85625 -0.54186,1.51953 -2.00195,1.51953c-1.38541,0 -2.01172,-0.70949 -2.01172,-1.54492c0,-0.41771 0.15242,-0.7325 0.47266,-1.00195c0.32023,-0.26945 0.83428,-0.47656 1.53906,-0.47656zM11,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-5.86523v-13.13477c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM20,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10c0,-0.82967 0.22639,-1.65497 0.625,-2.19531c0.39861,-0.54035 0.90147,-0.86463 1.85742,-0.84766c0.98574,0.01695 1.50758,0.35464 1.90234,0.88477c0.39477,0.53013 0.61523,1.32487 0.61523,2.1582v10c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10.73828c0,-2.96154 -0.87721,-5.30739 -2.38086,-6.89453c-1.50365,-1.58714 -3.59497,-2.36719 -5.80664,-2.36719c-2.10202,0 -3.70165,0.70489 -4.8125,1.42383v-0.42383c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM12,21h4v12.13477v4.86523h-4zM21,21h4v1.56055c0.00013,0.43 0.27511,0.81179 0.68291,0.94817c0.40781,0.13638 0.85714,-0.00319 1.11591,-0.34661c0,0 1.57037,-2.16211 5.01367,-2.16211c1.75333,0 3.25687,0.58258 4.35547,1.74219c1.0986,1.15961 1.83203,2.94607 1.83203,5.51953v9.73828h-4v-9c0,-1.16667 -0.27953,-2.37289 -1.00977,-3.35352c-0.73023,-0.98062 -1.9584,-1.66341 -3.47266,-1.68945c-1.52204,-0.02703 -2.77006,0.66996 -3.50195,1.66211c-0.73189,0.99215 -1.01562,2.21053 -1.01562,3.38086v9h-4z"></path></g></g>
                                </svg>
                            </div>
                            {/* <h3>mettā muse ACCEPTS</h3>
                            <div class="payment-methods">
                                <div class="payment-icon"></div>
                                <div class="payment-icon"></div>
                                <div class="payment-icon"></div>
                                <div class="payment-icon"></div>
                                <div class="payment-icon"></div>
                                <div class="payment-icon"></div>
                            </div> */}
                            <div className="payment-icons">
                                {paymentMethods.map((method, index) => (
                                    <div className="payment-icon" key={index}>
                                        <img src={method.src} alt={method.name} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <p>Copyright © 2023 mettamuse. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer