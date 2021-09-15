import React from 'react';
import './info.scss';

import aptiv from './logos/aptiv.svg';
import bloomberg from './logos/bloomberg.svg';
import echoar from './logos/echoar.png';
import microsoft from './logos/microsoft.svg';
import sandia from './logos/sandia.svg';
import scm from './logos/scm.png';

type TabType = "schedule" | "faq" | "sponsors";

type Props = {
    active: boolean;
    hidePopup: () => void;
}

type State = {
    tab: TabType;
}

export class Info extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            tab: "schedule",
        };
    };

    renderTab() {
        const { tab } = this.state;
        if (tab === "schedule") {
            return (
                <>
                    <div className="content-title">schedule of events</div>
                    <div className="note">Note: all times in eastern time (EST)</div>
                    <div className="schedule">
                        <div className="day-events">
                            <div className="dow">Friday, October 1</div>
                            <div className="tod">Afternoon:</div>
                            <div className="entry">5:00 Opening ceremony</div>
                            <div className="entry">6:00 Hacking starts!</div>
                            <div className="entry">Tech talks and tutorials TBA!</div>
                        </div>
                        <div className="day-events">
                            <div className="dow">Saturday, October 2</div>
                            <div className="tod">All day:</div>
                            <div className="entry">More tech talks and tutorials TBA!</div>
                            <div className="tod">Afternoon:</div>
                            <div className="entry">6:00 Hacking ends!</div>
                            <div className="entry">7:30 Video submission deadline</div>
                            <div className="entry">8:00 Live demo session</div>
                        </div>
                        <div className="day-events">
                            <div className="dow">Sunday, October 3</div>
                            <div className="tod">Afternoon:</div>
                            <div className="entry">3:00 Closing ceremony</div>
                        </div>
                    </div>
                </>
            );
        } else if (tab === "faq") {
            return (
                <>
                    <div className="content-title">faq</div>
                    <div className="question">Q: What is HackCMU?</div>
                    <div className="answer">HackCMU is a 24-hour event where students from across campus come together to make something awesome — like an app, website or hardware hack.</div>
                    <div className="question">Q: Where will this be held?</div>
                    <div className="answer">Saturday dinner, exhibitions, and closing will take place on campus (exact location TBD).</div>
                    <div className="question">Q: Who can attend?</div>
                    <div className="answer">Any student is welcome to apply. HackCMU is a beginner-focused hackathon, and preference will be given to first years. More experienced hackers are encouraged to sign up as mentors.</div>
                    <div className="question">Q: I have another event during the weekend — can I miss part of the event?</div>
                    <div className="answer">Probably. Contact us at acm-exec[at]cs.cmu.edu for any specific concerns.</div>
                    <div className="question">Q: How much does this cost?</div>
                    <div className="answer">$0! We provide all food, drinks, and swag. This event is made possible only by our wonderful sponsors.</div>
                    <div className="question">Q: I’m not a “hacker”, can I still participate?</div>
                    <div className="answer">Students of all skill levels are encouraged to attend, even if you’ve never written a line of code! Creative individuals of all kinds are welcome to apply — such as designers, ECE majors, statistics, etc. The only requirement is your attitude to learn!</div>
                    <div className="question">Q: Are there teams? Do I need one to sign up!</div>
                    <div className="answer">Working as a team is highly encouraged, but not required. You are welcome to form teams ahead of the event, but there will also be team forming day-of the event!</div>
                    <div className="question">Q: How big can a team be?</div>
                    <div className="answer">A team can have anywhere between 2 and 4 people.</div>
                    <div className="question">Q: What are the rules? Can I work on my project ahead of time?</div>
                    <div className="answer">All work must be original, and you are not permitted to start building or designing your project until the event. Brainstorming ideas and forming teams beforehand is fine, though.</div>
                    <div className="question">Q: Who runs this event?</div>
                    <div className="answer">You can learn more about us <a href="http://acmatcmu.com">over here.</a></div>
                    <div className="question">Q: Any other questions, comments, or concerns?</div>
                    <div className="answer">Email us at acm-exec[at]cs.cmu.edu.</div>
                </>
            );
        } else {
            return (
                <>
                    <div className="content-title">sponsors</div>
                    <div className="thanks">This event would simply not be possible without the help of our sponsors. We are immensely thankful for our sponsors below.</div>
                    <div className="logos">
                        <img className="aptiv" src={aptiv} alt={aptiv} />
                        <img className="bloomberg" src={bloomberg} alt={bloomberg} />
                        <img className="echoar" src={echoar} alt={echoar} />
                        <img className="microsoft" src={microsoft} alt={microsoft} />
                        <img className="sandia" src={sandia} alt={sandia} />
                        <img className="scm" src={scm} alt={scm} />
                    </div>
                </>
            );
        }
    };

    changeTab(newTab: TabType) {
        this.setState({ tab: newTab });
    };

    renderTabs() {
        let tabs: Array<TabType> = ["schedule", "faq", "sponsors"];
        let buttons = []
        for (let i = 0; i < tabs.length; i++) {
            let clickFn = () => this.changeTab(tabs[i]);
            let button = <div className="tab-button" onClick={clickFn}>{tabs[i]}</div>
            buttons.push(button);
        }
        return (
            <div className="tabs">{buttons}</div>
        );
    };

    render() {
        const { active, hidePopup } = this.props;
        if (active) {
            return (
                <div className="info">
                    <div className="info-container">
                        <a className="close-info" onClick={hidePopup} />
                        <div className="navbar">
                            {this.renderTabs()}
                        </div>
                        <div className="content">
                            {this.renderTab()}
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    };
};
