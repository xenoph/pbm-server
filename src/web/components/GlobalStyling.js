import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        font-size: ${props => props.theme.typography.body.fontSize};
        font-weight: ${props => props.theme.typography.body.fontWeight};
        line-height: ${props => props.theme.typography.body.lineSpacing};
        letter-spacing: ${props => props.theme.typography.body.wordSpacing};
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h1 {
        font-size: ${props => props.theme.typography.h1.fontSize};
        font-weight: ${props => props.theme.typography.h1.fontWeight};
        line-height: ${props => props.theme.typography.h1.lineSpacing};
        letter-spacing: ${props => props.theme.typography.h1.wordSpacing};
    }

    h2 {
        font-size: ${props => props.theme.typography.h2.fontSize};
        font-weight: ${props => props.theme.typography.h2.fontWeight};
        line-height: ${props => props.theme.typography.h2.lineSpacing};
        letter-spacing: ${props => props.theme.typography.h2.wordSpacing};
    }

    h3 {
        font-size: ${props => props.theme.typography.h3.fontSize};
        font-weight: ${props => props.theme.typography.h3.fontWeight};
        line-height: ${props => props.theme.typography.h3.lineSpacing};
        letter-spacing: ${props => props.theme.typography.h3.wordSpacing};
    }

    h4 {
        font-size: ${props => props.theme.typography.h4.fontSize};
        font-weight: ${props => props.theme.typography.h4.fontWeight};
        line-height: ${props => props.theme.typography.h4.lineSpacing};
        letter-spacing: ${props => props.theme.typography.h4.wordSpacing};
    }

    h5 {
        font-size: ${props => props.theme.typography.h5.fontSize};
        font-weight: ${props => props.theme.typography.h5.fontWeight};
        line-height: ${props => props.theme.typography.h5.lineSpacing};
        letter-spacing: ${props => props.theme.typography.h5.wordSpacing};
    }

    h6 {
        font-size: ${props => props.theme.typography.h6.fontSize};
        font-weight: ${props => props.theme.typography.h6.fontWeight};
        line-height: ${props => props.theme.typography.h6.lineSpacing};
        letter-spacing: ${props => props.theme.typography.h6.wordSpacing};
    }

    button, .button {
        font-size: ${props => props.theme.button.fontSize};
        font-weight: ${props => props.theme.button.fontWeight};
        padding: ${props => props.theme.button.padding};
        height: ${props => props.theme.button.height};
        line-height: ${props => props.theme.button.height};
        background: ${props => props.theme.button.background};
        color: ${props => props.theme.button.color};
        border: ${props => props.theme.button.border};
        transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
        border-radius: 0px;
        outline: none;
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        text-decoration: none;
        &:hover, &:focus {
            border: 2px solid #808AFF;
            box-shadow: 0px 9px 12px 0px rgba(91,99,191,1);
        }
        &:disabled {
            opacity: 0.25;
        }
        &.secondary {
            background: ${props => props.theme.secondaryButton.background};
            color: ${props => props.theme.secondaryButton.color};
            border: ${props => props.theme.secondaryButton.border}
        }
        &.secondary:hover, &.secondary:focus {
            border: 2px solid #B4EAE7;
            box-shadow: 0px 9px 12px 0px #4AD5CD;
        }
    }
`;

export default GlobalStyle;
