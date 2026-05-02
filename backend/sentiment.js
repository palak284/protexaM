import natural from "natural";
const analyzer = new natural.SentimentAnalyzer("English", natural.PorterStemmer, "afinn");

export function getSentimentTone(text = "") {
  if (!text) return "neutral";
  const cleaned = text.replace(/[^\w\s]/g, " ").toLowerCase();
  const tokens = cleaned.split(/\s+/).filter(Boolean);
  const score = analyzer.getSentiment(tokens);

  if (score > 0.5) return "positive";
  if (score < -0.5) return "negative";

  // fallback rule-based
  const negWords = ["sorry","unacceptable","hate","angry","complain","issue","problem","delay","frustrat"];
  const posWords = ["thanks","thank","great","happy","appreciate","pleased","love"];
  const negCount = negWords.reduce((s,w)=> s + (text.toLowerCase().includes(w) ? 1 : 0), 0);
  const posCount = posWords.reduce((s,w)=> s + (text.toLowerCase().includes(w) ? 1 : 0), 0);
  if (negCount > posCount && negCount >= 1) return "negative";
  if (posCount > negCount && posCount >= 1) return "positive";
  return "neutral";
}
