/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy'; 
import Navbar from '../Homecomponants/Navbar';
import Footer from '../Homecomponants/Footer';


const TermsAndConditions = () => {
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
    return (<>
        <Navbar />
        <div className="terms-and-conditions">
            <h2>Terms and Conditions</h2>
            <p>
                Welcome to [Your Website Name]. These terms and conditions outline the rules and regulations for the use of [Website Name]'s Website, located at [Website URL].
            </p>
            <p>
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use [Website Name] if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            <p>
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </p>
            <h3>License</h3>
            <p>
                Unless otherwise stated, [Your Website Name] and/or its licensors own the intellectual property rights for all material on [Your Website Name]. All intellectual property rights are reserved. You may access this from [Your Website Name] for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul>
                <li>Republish material from [Your Website Name]</li>
                <li>Sell, rent or sub-license material from [Your Website Name]</li>
                <li>Reproduce, duplicate or copy material from [Your Website Name]</li>
                <li>Redistribute content from [Your Website Name]</li>
            </ul>
            <p>
                This Agreement shall begin on the date hereof.
            </p>
            <h3>Hyperlinking to our Content</h3>
            <p>
                The following organizations may link to our Website without prior written approval:
            </p>
            <ul>
                <li>Government agencies;</li>
                <li>Search engines;</li>
                <li>News organizations;</li>
                <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
            </ul>
            <p>
                These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
            </p>
            <p>
                We may consider and approve other link requests from the following types of organizations:
            </p>
            <ul>
                <li>commonly-known consumer and/or business information sources;</li>
                <li>dot.com community sites;</li>
                <li>associations or other groups representing charities;</li>
                <li>online directory distributors;</li>
                <li>internet portals;</li>
                <li>accounting, law and consulting firms; and</li>
                <li>educational institutions and trade associations.</li>
            </ul>
            <p>
                We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of [Your Website Name]; and (d) the link is in the context of general resource information.
            </p>
            <p>
                These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.
            </p>
            <p>
                If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to [Your Website Name]. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
            </p>
            <h3>Content Liability</h3>
            <p>
                We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </p>
            <p>
                Read our full <a href="/privacy-policy">Privacy Policy</a> to understand how we collect, use, and protect your information.
            </p>
            <p>
                If you have any questions about our Terms and Conditions, please <a href="/contact">contact us</a>.
            </p>
            {showPrivacyPolicy && <PrivacyPolicy handleClose={() => setShowPrivacyPolicy(false)} />}
        </div>
        <Footer/>
        </>
    );
};

export default TermsAndConditions;
