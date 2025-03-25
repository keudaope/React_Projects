export default function Links({ links }) {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.name}>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
}
