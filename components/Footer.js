export default function Footer() {
  return (
    <>
      <footer>
        <img src="/logo.png" alt="Flip Logo" className="logo" />
        Flip Security Team
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo {
          height: 1em;
          margin: 5px;
        }
      `}</style>
    </>
  )
}
