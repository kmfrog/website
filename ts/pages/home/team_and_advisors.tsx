import * as _ from 'lodash';
import * as React from 'react';
import {colors} from 'material-ui/styles';
import {utils} from 'ts/utils/utils';
import {Element as ScrollElement} from 'react-scroll';
import {Styles, Profile} from 'ts/types';

const teamRow1: Profile[] = [
    {
        name: 'Will Warren',
        title: 'Co-founder & CEO',
        description: `Smart contract R&D. Previously applied physics research and simulations at Los
                      Alamos National Laboratory. Mechanical engineering at UC San Diego. PhD dropout.`,
        image: '/images/team/will.jpg',
        linkedIn: 'https://www.linkedin.com/in/will-warren-92aab62b/',
        github: 'https://github.com/willwarren89',
        medium: 'https://medium.com/@willwarren89',
    },
    {
        name: 'Amir Bandeali',
        title: 'Co-founder & CTO',
        description: `Full-stack web application & smart contract dev. Former fixed income trader at
                      DRW and online poker professional. Finance at University of Illinois, Urbana-Champaign.`,
        image: '/images/team/amir.jpeg',
        linkedIn: 'https://www.linkedin.com/in/abandeali1/',
        github: 'https://github.com/abandeali1',
        medium: 'https://medium.com/@abandeali1',
    },
    {
        name: 'Fabio Berger',
        title: 'Senior Engineer',
        description: `Blockchain engineer with extensive full-stack and devOps experience. Previously
                      software engineer at Airtable and founder of WealthLift. Computer science at Duke.`,
        image: '/images/team/fabio.jpg',
        linkedIn: 'https://www.linkedin.com/in/fabio-berger-03ab261a/',
        github: 'https://github.com/fabioberger',
        medium: 'https://medium.com/@fabioberger',
    },
];

const teamRow2: Profile[] = [
    {
        name: 'Leonid Logvinov',
        title: 'Engineer',
        description: `Full-stack & blockchain engineer. Previously blockchain engineer at Neufund,
                      software engineer intern at Quora and competitive programmer. Computer science
                      at University of Warsaw.`,
        image: '/images/team/leonid.png',
        linkedIn: 'https://www.linkedin.com/in/leonidlogvinov/',
        github: 'https://github.com/LogvinovLeon',
        medium: '',
    },
    {
        name: 'Alex Xu',
        title: 'Director of Operations',
        description: `End-to-end business operations. Previously digital marketing consultant at
                      Google and vendor management at Amazon. Economics at UC San Diego.`,
        image: '/images/team/alex.jpg',
        linkedIn: 'https://www.linkedin.com/in/alex-xu/',
        github: '',
        medium: '',
    },
    {
        name: 'We\'re hiring',
        title: 'Designer/UI/UX/Blockchain Engineer',
        description: `We are looking for talented, self-starters who are passionate about decentralization
                      to join the team! Apply at jobs@0xproject.com`,
        image: '/images/team/anyone.png',
        linkedIn: 'https://www.linkedin.com/company-beta/17942619/',
        github: '',
        medium: '',
    },
];

const advisors: Profile[] = [
    {
        name: 'Fred Ehrsam',
        title: 'Advisor',
        description: 'Co-founder of Coinbase. Previously FX trader at Goldman Sachs. Computer Science at Duke.',
        image: '/images/advisors/fred.jpg',
        linkedIn: 'https://www.linkedin.com/in/fredehrsam/',
        medium: 'https://medium.com/@FEhrsam',
        twitter: 'https://twitter.com/FEhrsam',
    },
    {
        name: 'Olaf Carlson-Wee',
        title: 'Advisor',
        image: '/images/advisors/olaf.png',
        description: 'Founder of Polychain Capital. First employee at Coinbase. Angel investor.',
        linkedIn: 'https://www.linkedin.com/in/olafcw/',
        angellist: 'https://angel.co/olafcw',
    },
    {
        name: 'Joey Krug',
        title: 'Advisor',
        description: `Founder of Augur. Computer Science at Pomona College dropout.
                      Thiel Fellowship 20 Under 20 Fellow.`,
        image: '/images/advisors/joey.jpg',
        linkedIn: 'https://www.linkedin.com/in/joeykrug/',
        github: 'https://github.com/joeykrug',
        angellist: 'https://angel.co/joeykrug',
    },
    {
        name: 'Linda Xie',
        title: 'Advisor',
        description: 'Product Manager at Coinbase. Previously Portfolio Risk at AIG.',
        image: '/images/advisors/linda.jpg',
        linkedIn: 'https://www.linkedin.com/in/lindaxie/',
        medium: 'https://medium.com/@linda.xie',
        twitter: 'https://twitter.com/ljxie',
    },
];

const styles: Styles = {
    subheader: {
        textTransform: 'uppercase',
        fontSize: 32,
        margin: 0,
    },
};

interface TeamAndAdvisorsProps {}

export function TeamAndAdvisors(props: TeamAndAdvisorsProps) {
    return (
        <div>
            <div
                className="relative"
                style={{backgroundColor: '#272727'}}
            >
                <ScrollElement name="team">
                    <div className="mx-auto max-width-4 pb4" style={{color: colors.grey50}}>
                        <h1
                            id="team"
                            className="pt4 sm-center md-pl3 lg-pl0 thin"
                            style={{...styles.subheader, color: 'white'}}
                        >
                            Team
                        </h1>
                        <div className="clearfix pt3 mx-auto" style={{maxWidth: 1022}}>
                            {renderProfiles(teamRow1)}
                        </div>
                        <div className="clearfix pt3 mx-auto" style={{maxWidth: 1022}}>
                            {renderProfiles(teamRow2)}
                        </div>
                    </div>
                </ScrollElement>
            </div>
            <div className="relative" style={{backgroundColor: '#eaeaea'}}>
                <ScrollElement name="advisors">
                    <div className="mx-auto max-width-4 pb4" style={{color: colors.grey800}}>
                        <h1
                            id="advisors"
                            className="pt4 sm-center md-pl3 lg-pl0 thin"
                            style={{...styles.subheader, color: colors.grey800}}
                        >
                            Advisors
                        </h1>
                        <div className="pt3 mx-auto clearfix">
                            {renderProfiles(advisors)}
                        </div>
                    </div>
                </ScrollElement>
            </div>
        </div>
    );
}

function renderProfiles(profiles: Profile[]) {
    const numIndiv = profiles.length;
    const colSize = utils.getColSize(profiles.length);
    return _.map(profiles, profile => {
        return (
            <div
                key={profile.name}
                className={`sm-col sm-col-${colSize}`}
            >
                <div className="mx-auto" style={{width: 200}}>
                    <div>
                        <img src={profile.image} />
                    </div>
                    <div
                        className="pt1"
                        style={{fontSize: 18, fontWeight: 'bold'}}
                    >
                        {profile.name}
                    </div>
                    <div
                        className="pb2 pt1 thin"
                        style={{fontSize: 16}}
                    >
                        {profile.title}
                    </div>
                    <div
                        style={{fontSize: 13, minHeight: 60}}
                        className="pb2 thin"
                    >
                        {profile.description}
                    </div>
                    <div className="flex pb3">
                        {renderSocialMediaIcons(profile)}
                    </div>
                </div>
            </div>
        );
    });
}

function renderSocialMediaIcons(profile: Profile) {
    const icons = [];
    if (!_.isEmpty(profile.github)) {
        const icon = renderSocialMediaIcon('zmdi-github-box', profile.github);
        icons.push(icon);
    }
    if (!_.isEmpty(profile.linkedIn)) {
        const icon = renderSocialMediaIcon('zmdi-linkedin-box', profile.linkedIn);
        icons.push(icon);
    }
    if (!_.isEmpty(profile.twitter)) {
        const icon = renderSocialMediaIcon('zmdi-twitter-box', profile.twitter);
        icons.push(icon);
    }
    return icons;
}

function renderSocialMediaIcon(iconName: string, url: string) {
    return (
        <div key={url} className="pr2">
            <a
                href={url}
                style={{color: 'inherit'}}
                target="_blank"
                className="text-decoration-none"
            >
                <i className={`zmdi ${iconName}`} style={{...styles.socalIcon}} />
            </a>
        </div>
    );
}
