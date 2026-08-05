/**
 * One bubble. User is white with a hairline, right-aligned; the agent is a flat
 * grey plate, left-aligned — Figma 3730-5976.
 */
export default function ChatMessage({ role, content }) {
  return (
    <li className={`chat-msg chat-msg--${role}`}>
      <span className="chat-msg__bubble">{content}</span>
    </li>
  );
}
