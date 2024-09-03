function HeaderAndButtons() {
  return (
    <div id="header">
      <div id="headerText">
        <h1 className="heavyMono">Colton Maring</h1>
        <h2 className="mediumMono">&nbsp;CS Student</h2>
      </div>
      <div id="headerButtons">
        <a
          href="https://github.com/colemaring"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="headerButton heavyMono" id="githubButton">
            Github
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/coltonmaring/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="headerButton heavyMono" id="linkedinButton">
            LinkedIn
          </button>
        </a>
        <a
          href="/ColtonMaringResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="headerButton heavyMono" id="resumeButton">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default HeaderAndButtons;
