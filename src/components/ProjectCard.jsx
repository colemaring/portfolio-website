function ProjectCard({ title, image, description, link, id, page }) {
  const handleClick = (e) => {
    if (page) {
      window.location.href = page;
    } else window.open(link, "_blank");
  };

  return (
    <div>
      <a onClick={handleClick}>
        <img className="coverPic" id={id} src={image} alt={title} />
      </a>
      <h1 className="heavyMono inline">{title}</h1>
      <br />
      <p className="lightSans inline">{description}</p>
    </div>
  );
}

export default ProjectCard;
