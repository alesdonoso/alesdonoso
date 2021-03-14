import styles from "../theme";

import Image from "next/image";

const About = () => {
  return (
    <div>
      <h1 style={styles.title}>About</h1>
      <div className="aboutSection">
      <Image
          src="/alesdonoso.jpg"
          width={320}
          height={350}
          className="avatar"
        />
        <p className="aboutDescription">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it?.
        </p>
      </div>
      <style jsx>{`
        .aboutSection {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-evenly;
          margin-bottom: 8em;
        }
        .aboutDescription {
          color: #fff;
          width: 40%;
          line-height: 1.7rem;
        }
        @media (max-width: 600px) {
          .aboutDescription {
            padding: 1.2rem;
            width: 100%;
          }
        }
      `}</style>
      <style jsx global>{`
        .avatar {
          border-radius: 15px;
        }
      `}</style>
    </div>
  );
};

export default About;
