import React, { FC, ReactNode, useState } from "react";
import background from "./assets/background.gif";
import Dojo from "./Dojo";
import "./Profile.css";

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
          <h1 className="profile-title">In a world where books are dying</h1>
          <p className="profile-subtitle">I'm glad you're here!</p>
          <p className="profile-desc">
            Here are some of my favourite reads which I highly recommend :D
          </p>

          <div className="profile-book-recs">
            <Section title="Fiction">
              <ul className="profile-fiction">
                <li>
                  <i>Rebecca</i> - Daphne Du Maurier
                </li>
                <li>
                  <i>The Call of the Wild</i> - Jack London
                </li>
                <li>
                  <i>East of Eden</i> - John Steinbeck
                </li>
                <li>
                  <i>Stoner</i> - John Williams
                </li>
                <li>
                  <i>Anna Karenina</i> - Leo Tolstoy
                </li>
              </ul>
            </Section>

            <Section title="Non-Fiction">
              <ul className="profile-nonfiction">
                <li>
                  <i>4000 weeks</i> - Oliver Burkeman
                </li>
                <li>
                  <i>Atomic Habits</i> - James Clear
                </li>
                <li>
                  <i>A Bright Ray of Darkness </i>- Ethan Hawke
                </li>
                <li>
                  <i>Are Prisons Obsolete?</i> - An essay by Angela Y.Davis
                </li>
              </ul>
            </Section>
          </div>
          {/* <button className="fight-me-btn" onClick={() => setDojoMode(true)}>
            Fight me!
          </button> */}
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

          <footer className="profile-footer">
            &copy; {new Date().getFullYear()} Jess Wu.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Profile;
