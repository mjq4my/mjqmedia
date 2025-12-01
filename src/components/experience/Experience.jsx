import React from "react";
import "./experience.css";
import { HiBadgeCheck } from "react-icons/hi";

const languages = ["Python", "Java", "Terraform", "SQL", "Linux", "PySpark"];
const services = ["GCP", "AWS", "Airflow", "dbt", "Astronomer", "Postgres"];
const certs = [
  {
    cert_name: "GCP ACE",
    cert_url:
      "https://www.credly.com/badges/6e6a596d-cf1c-42a1-b8e4-53b8e8851de4/public_url",
  },
  {
    cert_name: "AWS SAA",
    cert_url:
      "https://www.credly.com/badges/d4c1434d-1f12-4b8b-8d13-86cbfe69f582/public_url",
  },
  {
    cert_name: "AWS CCP",
    cert_url:
      "https://www.credly.com/badges/7e07a339-ae08-45b6-8f1a-939c43606820/public_url",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">

        <div className="experience_languages">
          <h3>Languages</h3>
          <div className="experience_content">
            {languages.map((skill, index) => (
              <article className="experience_details" key={index}>
                <HiBadgeCheck className="experience_details-icon" />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience_services">
          <h3>Services</h3>
          <div className="experience_content">
            {services.map((skill, index) => (
              <article className="experience_details" key={index}>
                <HiBadgeCheck className="experience_details-icon" />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience_certifications">
          <h3>Certifications</h3>
          <div className="experience_content">
            {certs.map((cert, index) => (
              <article className="experience_details" key={index}>
                <HiBadgeCheck className="experience_details-icon" />
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={cert.cert_url}
                  >
                    {cert.cert_name}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
