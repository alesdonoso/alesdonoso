const Footer = () => {
  return (
    <div>
      <h3 className="footer">
        Follow me on{" "}
        <a
          href="https://twitter.com/alesdonoso"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
      </h3>
      <style jsx>{`
      .footer {
          color: #fff;
          font-weight: 300;
          margin: 5rem 0;
      }

      a {
          color: #0193FA;
          text-decoration: none;
          font-weight: 500;
      }

      a:hover,
      a:focus,
      a:active {
          color: #D448DB;
          transition: 0.8s;
      }
      `}</style>
    </div>
  );
};

export default Footer;
