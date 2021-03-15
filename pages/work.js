import styled from "styled-components";
import styles from "../theme";

import Link from "next/link";

import workData from "../components/workData";

const WorkList = () => {
  return (
    <div>
      <h1 style={styles.title}>Work</h1>
      <div style={style.workSection}>
        {workData.map((workItem) => (
          <Link href={workItem.route}>
            <Card> 
              <h3 style={style.cardTitle}>{workItem.title} &rarr;</h3>
              <p style={style.cardDescription}>{workItem.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WorkList;

const Card = styled.button`
  flex: auto;
  width: 350px;
  height: 320px;
  background: #0093fa;
  margin: 1.5rem;
  padding: 2rem;
  text-align: left;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  transition: color 0.15s ease, border-color 0.15s ease;
  cursor: pointer;
  border: none;
  transition: opacity 5s ease-out;
  &:hover {
    background: #d448db;
    transition: 1s;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 600px) {
    margin: 0.5rem;
    width: 300px;
  }
`;

const style = {
  workSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    margintop: "3rem",
  },
  cardTitle: {
    fontSize: "2rem",
    fontWeight: 700,
  },
  cardDescription: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: "1.5",
  },
};
