//rfc
import React from 'react'
import { withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import tr_flag from "../assist/flag/tr.png"
import en_flag from "../assist/flag/en.jpg"
import OtherLanguageServices from './OtherLanguageServices'

function OtherLanguageReusability(props) {

    // Bayraklar Data
    const internationalizationLanguageService = (languageButtonTrigger) => {
        const { i18n } = props;
        i18n.changeLanguage(languageButtonTrigger);

        OtherLanguageServices.headerAccessLanguageServices(languageButtonTrigger);
    }

    return (
        <React.Fragment>
            {/* Bs5-list-default */}
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" onClick={() => internationalizationLanguageService('en')}>
                        <img src={en_flag} style={{height:"25px"}} alt='tr' />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" onClick={() => internationalizationLanguageService('tr')}>
                        <img src={tr_flag} style={{height:"25px"}} alt='en' />
                    </Link>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default withTranslation()(OtherLanguageReusability)
