import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div style={style.sidebar}>
      <div style={style.introInfo}>
        <Link href="/">
          <Image
            src="/alesdonoso.jpg"
            width={75}
            height={75}
            className="avatar"
          />
        </Link>
        <h3 style={style.h3}>Alejandro Donoso</h3>
        <p style={style.description}>
          Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsum
        </p>
        <div style={style.nav}>
          <Link href="/">About</Link>
          <Link href="/">Blog</Link>
        </div>
        <div style={style.contact}>
            <ul style={style.iconList}>
                <li style={style.icon}>
                    <a href="/" style={style.iconLink}>
                        <Image src="/twitter.svg"
                        width={16}
                        height={16}
                        style={style.iconStyle}/>
                    </a>
                </li>
            </ul>
            <ul style={style.iconList}>
                <li style={style.icon}>
                    <a href="/" style={style.iconLink}>
                        <Image src="/linkedin.svg"
                        width={16}
                        height={16}
                        style={style.iconStyle}/>
                    </a>
                </li>
            </ul>
            <ul style={style.iconList}>
                <li style={style.icon}>
                    <a href="/" style={style.iconLink}>
                        <Image src="/github.svg"
                        width={16}
                        height={16}
                        style={style.iconStyle}/>
                    </a>
                </li>
            </ul>
        </div>
      </div>
      <style jsx global>{`
        .avatar {
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;

const style = {
  sidebar: {
    width: "100%",
    color: "#fff",
    position: 'fixed'
  },
  introInfo: {
    padding: "2.5rem",
  },
  h3: {
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: "1.83rem",
    margin: "0.8rem 0",
  },
  description: {
    lineHeight: "1.625rem",
    marginBottom: "1.2625rem",
    fontWeight: 300,
    fontSize: "1rem",
  },
  nav: {
    marginBottom: "1.625rem",
  },
  contact: {
    marginBottom: "1.625rem",
    display: 'flex',
  },
  icon: {
      padding: 0,
      margin: '0.25rem',
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: '2.1875rem',
      width: '2.1875rem',
      lineHeight: '2.1875rem',
      borderRadios: '50%',
      textAlign: 'center',
      border: '1px solid #ebebeb',
      borderRadius: '50%',
      textDecoration: 'none',
      listStyle: 'none',
      background: '#fff',
  },
  iconList: {
      margin: 0
  },
  iconLink: {
      border: 0,
      display: 'flex',
  },
  iconStyle: {
      fill: '#fff'
  }
};
