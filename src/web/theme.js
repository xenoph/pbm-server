import { css } from 'styled-components';

const THEME = {
    media: {
        tiny: content =>
            css`
                @media only screen and (max-width: 400px) {
                    ${content}
                }
            `,
        mobile: content =>
            css`
                @media only screen and (max-width: 600px) {
                    ${content}
                }
            `,
        tablet: content =>
            css`
                @media only screen and (max-width: 1024px) {
                    ${content}
                }
            `,
        smallDesktop: content =>
            css`
                @media only screen and (max-width: 1200px) {
                    ${content}
                }
            `,
        smallDesktopUp: content =>
            css`
                @media only screen and (min-width: 1201px) {
                    ${content}
                }
            `,
        desktop: content =>
            css`
                @media only screen and (min-width: 1025px) {
                    ${content}
                }
            `,
    },
    widths: {
        default: '1240px',
        narrow: '900px',
    },
    gutters: {
        default: '24px',
        mobile: '12px',
    },
    colors: {
        primary: '#0089c4',
        secondary: '#7dc189',
        neutral: ['#100818', '#FBF0E6', '#FDF4F8', '#EAF8FA'],
        text: '#28292c',
        link: '#094462',
        linkHover: '#28292c',
        linkDark: '#4d4f5c',
        blue: '#0089c4',
        darkBlue: '#094462',
        middleBlue: '#094462',
        lightBlue: '#094462',
        petrol: '#007588',
        darkGrey: '#094462',
        lightGrey: '#ebebeb',
        lightestGray: '#f7f7f7',
        emergencyMessage: '#c21212',
        crisisMessageAlert: '#df7b7b',
        crisisMessageWarning: '#0A7685',
        validGreen: '#7dc189',
        validGreenDark: '#31753D',
        formWrapper: '#f7f7f7',
        formWrapperBorder: '#cccccc',
        inputBorder: '#949494',
        inputBorderFocus: '#0089c4',
        tableHeader: '#ebebeb',
        tableRowOdd: '#f7f7f7',
        tableRowEven: '#ffffff',
        tableBorder: '#cccccc',
    },
    typography: {
        body: {
            fontSize: '17px',
            lineHeight: '28.9px',
            fontWeight: '400', // Regular == 400
            letterSpacing: '0px',
        },
        h1: {
            fontSize: '30px',
            fontWeight: '400', // Regular == 400
            lineHeight: '51px',
            letterSpacing: '0px',
        },
        h2: {
            fontSize: '22px',
            fontWeight: '400', // Regular == 400
            lineHeight: '37.4px',
            letterSpacing: '0px',
        },
        h3: {
            fontSize: '20px',
            fontWeight: '400', // Regular == 400
            lineHeight: '34px',
            letterSpacing: '0px',
        },
        h4: {
            fontSize: '18px',
            fontWeight: '400', // Regular == 400
            lineHeight: '30.59px',
            letterSpacing: '0px',
        },
        h5: {
            fontSize: '17px',
            fontWeight: '400', // Regular == 400
            lineHeight: '28.9px',
            letterSpacing: '0px',
        },
        h6: {
            fontSize: '16px',
            fontWeight: '700', // Bold == 600
            lineHeight: '27.2px',
            letterSpacing: '0px',
        },
    },
    button: {
        fontSize: '17px',
        lineHeight: '11px',
        padding: '12px 33px',
        fontWeight: '400',
        background: '#0089c4',
        border: '1px solid #066693',
        color: 'white',
        borderRadius: '4px',
        hoverBackground: '#094462',
        hoverBorder: '1px solid #066693',
        hoverColor: 'white',
    },
    secondaryButton: {
        background: '#7dc189',
        color: '#28292c',
        border: '1px solid #64A870',
        hoverBackground: '#4EA25D',
        hoverBorder: '1px solid #066693',
        hoverColor: '#28292c',
    },
    grayButton: {
        background: '#cccccc',
        color: '#28292c',
        border: '1px solid #c3c3c3',
        hoverBackground: '#c3c3c3',
        hoverBorder: '1px solid #c3c3c3',
        hoverColor: '#28292c',
    },
};

export default THEME;
