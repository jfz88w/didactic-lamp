import React, { FC, ReactNode, useState } from 'react';
import background from './assets/background.gif';
import Dojo from './Dojo';
import './Profile.css';

type SectionProps = {
  title: string;
  children: ReactNode;
};

type SocialLinkProps = {
  href: string;
  label: string;
};

const Section: FC<SectionProps> = ({ title, children }) => (
  <div className="profile-section">
    <h2 className="profile-section-title">{title}</h2>
    {children}
  </div>
);

const SocialLink: FC<SocialLinkProps> = ({ href, label }) => (
  <a
    href={href}
    className="profile-social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
  </a>
);

const Profile: FC = () => {
  const [dojoMode, setDojoMode] = useState(false);

  if (dojoMode) {
    return <Dojo onExit={() => setDojoMode(false)} />;
  }

  return (
    <div
      className="profile-bg"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="profile-card">
        <div className="profile-content">
          <h1 className="profile-title">Jess</h1>
          <p className="profile-subtitle">Hi there, Human.</p>
          <p className="profile-desc">
            Are you suffering too? You only have to make it to the end of the day.
          </p>

          <div className="profile-socials">
            <SocialLink
              href="https://www.instagram.com/jess_pw_/"
              label="Instagram"
            />
            <SocialLink
              href="https://www.linkedin.com/in/jessica-w-a71308244/"
              label="LinkedIn"
            />
          </div>

          <Section title="I'm scared of">
            <ul className="profile-skills-list">
              <li>Mosquitoes</li>
              <li>C++</li>
              <li>Unemployment</li>
              <li>Small squishy things</li>
              <li>Toddlers</li>
            </ul>
          </Section>

          <Section title="Projects">
            <ul className="profile-projects-list">
              <li>Girls Programming Network (GPN)</li>
              <li>UNSW Campus Runners</li>
              <li>High School Outreach (maths enrichment club)</li>
              <li>Taido</li>
            </ul>
          </Section>

          <button className="fight-me-btn" onClick={() => setDojoMode(true)}>
            Fight me!
          </button>

          <footer className="profile-footer">
            &copy; {new Date().getFullYear()} Jessica Wu. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Profile;