import React, { useEffect, useState } from 'react';
import { getRecentEmails } from "../api/emailApi";

const EmailSentiment = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    const data = await getRecentEmails();
    const sorted = data.sort((a, b) => b.uid - a.uid);
    setEmails(sorted);
  };

  const getToneColor = (tone) => {
    switch (tone) {
      case 'positive': return '#00FF7F';
      case 'negative': return '#FF4C4C';
      case 'neutral': return '#FFD700';
      default: return '#FFFFFF';
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0D0D2B, #1A1A3D)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '40px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px', textAlign: 'center' }}>
        Email Sentiment Analysis
      </h1>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>All Received Emails</h2>

        {emails.length === 0 ? (
          <p>No emails found.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {emails.map((email) => (
              <div
                key={email.uid}
                style={{
                  padding: '20px',
                  borderRadius: '15px',
                  background: '#1A1A3D',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  borderLeft: email.seen ? "5px solid #00C896" : "5px solid #FFD700"
                }}
              >
                <p><strong>From:</strong> {email.from}</p>
                <p><strong>Subject:</strong> {email.subject}</p>
                <p style={{ marginTop: '10px' }}>
                  Tone: <strong style={{ color: getToneColor(email.tone) }}>{email.tone}</strong>
                </p>

                {email.tone === 'negative' && email.suggestion && (
                  <p style={{ color: '#FF8C8C', marginTop: "10px" }}>
                    Suggestion: {email.suggestion}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailSentiment;
