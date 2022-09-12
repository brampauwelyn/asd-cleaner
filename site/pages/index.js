const HomePage = () => {
  return (
    <div class="content" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1>.asd cleaner</h1>
      <p>
        Remove ableton .asd files from folders, so they don't end up in your
        samplers 😉
      </p>
      <img
        src="app-screenshot.png"
        alt="asd-cleaner app image"
        width={600}
        height={400}
      />
      <a href="https://github.com/brampauwelyn/asd-cleaner/releases" target="_blank" class="button-link" style={{background: "#ededed", color: "#40404a", borderRadius: "2rem", fontSize: "1rem", textDecoration: "none", padding: "1rem", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.24)" }}>
        Download .dmg
      </a>
      <style global jsx>{`
        html {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
            "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
        }

        h1 {
          font-size: 2rem;
        }

        body {
          background-color: #9c8fff;
        }

        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .button-link {
          background: #ededed;
          border-radius: 73.5px;
          font-size: 1rem;
          color: #40404a;
          letter-spacing: 0;
          text-decoration: none;
          padding: 1rem;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24);
        }
      `}</style>
    </div>
  );
};

export default HomePage;
