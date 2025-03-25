const LinkList = ({ links }) => (
  <p>
    {links.map((link) => (
      <a href={link.url}>{link.name}</a>
    ))}
  </p>
);

export default LinkList;
