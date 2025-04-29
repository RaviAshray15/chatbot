import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "../index.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const bottomRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await axios.post('http://localhost:5000/chat', { message: input });
      setMessages(prev => [...prev, { sender: 'bot', text: res.data.response }]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <>

      <div className="chat-container">
        <h2 className="chat-title">What do you want to know about Ravi Ashray?</h2>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}

          {isTyping && (
            <div className="chat-message bot">
              <span className="typing">Typing...</span>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="chat-input-container">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="Shoot your question..."
            className="chat-input"
          />
          <button onClick={sendMessage} className="chat-send-button">➤</button>
        </div>

      </div>
      <h2 className='chat-footer'>Made by Ravi Ashray</h2>
    </>
  );
}

export default Chat;
