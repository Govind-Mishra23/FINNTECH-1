import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type }) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />

            {/* Open Graph tags (Facebook, LinkedIn) */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}

// Default props in case they aren't provided
SEO.defaultProps = {
    title: 'Finntech Business Solutions | Expert Loan Consultancy',
    description: 'Finntech Business Solutions offers expert financial consultancy for Home Loans, Business Loans, Mortgages, and more. Get low interest rates and quick approvals from top banks.',
    name: 'Finntech Business Solutions',
    type: 'website'
};

export default SEO;
