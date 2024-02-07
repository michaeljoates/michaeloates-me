import React from 'react';

function ProfessionalHistory() {
    return (
        <div className='professional-history'>
            <div class="text-content">
                <h1>Professional History</h1>

                <div class="experience-item">
                    <h3>IT Specialist</h3>
                    <p class="time-period">June 2018 - Current, Pro Drafting & Design</p>
                    <ul class="responsibilities">
                        <li>Design & provision of the organisation's information technology 
                            support, including IT hardware, software, accounts & credential 
                            management, and cyber security</li>
                        <li>Setup and management of a VPN to enable WFH for the company</li>
                    </ul>
                </div>

                <div class="experience-item">
                    <h3>Draftsman</h3>
                    <p class="time-period">April 2016 - June 2018, Pro Drafting & Design</p>
                    <ul class="responsibilities">
                        <li>Construction of detailed design plans for multiple commercial projects</li>
                        <li>Organised and prioritsed work to complete assignments in a timely, effficient manner</li>
                        <li>Ability to work autonomously, and collegially within the team environment</li>
                    </ul>
                </div>

                <div class="experience-item">
                    <h3>Service Supervisor</h3>
                    <p class="time-period">September 2009 - April 2016, Coles Australia</p>
                    <ul class="responsibilities">
                        <li>Store supervisor, undertaking shift responsibility for staffing and consumer flow</li>
                        <li>High level negotiation skills with demonstrated ability to interact effectively
                            with consumers and staff
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default ProfessionalHistory;
