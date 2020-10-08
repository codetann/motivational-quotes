const quotes = [
  {
    id: 1,
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    id: 2,
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    id: 3,
    quote:
      "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    id: 4,
    quote:
      "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    author: "Mary Kay Ash",
  },
  {
    id: 5,
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    id: 6,
    quote: "Only the paranoid survive.",
    author: "Andy Grove",
  },
  {
    id: 7,
    quote: "It’s hard to beat a person who never gives up.",
    author: "Babe Ruth",
  },
  {
    id: 8,
    quote:
      "I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.",
    author: "Leah Busque",
  },
  {
    id: 9,
    quote:
      "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
    author: "Michele Ruiz",
  },
  {
    id: 10,
    quote:
      "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.",
    author: "Arianna Huffington",
  },
  {
    id: 11,
    quote:
      "Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.",
    author: "Joss Whedon",
  },
  {
    id: 12,
    quote:
      "You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.",
    author: "William W. Purkey",
  },
  {
    id: 13,
    quote:
      "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    author: "Neil Gaiman",
  },
  {
    id: 14,
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    id: 15,
    quote:
      "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    author: "Helen Keller",
  },
  {
    id: 16,
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    id: 17,
    quote:
      "It’s no use going back to yesterday, because I was a different person then.",
    author: "Lewis Carroll",
  },
  {
    id: 18,
    quote:
      "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.",
    author: "Socrates",
  },
  {
    id: 19,
    quote:
      "Do what you feel in your heart to be right – for you’ll be criticized anyway.",
    author: "Eleanor Roosevelt",
  },
  {
    id: 20,
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama XIV",
  },
  {
    id: 21,
    quote: "Whatever you are, be a good one.",
    author: "Abraham Lincoln",
  },
  {
    id: 22,
    quote:
      "The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.",
    author: "Unknown",
  },
  {
    id: 23,
    quote:
      "If we have the attitude that it’s going to be a great day it usually is.",
    author: "Catherine Pulsifier",
  },
  {
    id: 24,
    quote:
      "You can either experience the pain of discipline or the pain of regret. The choice is yours.",
    author: "Unknown",
  },
  {
    id: 25,
    quote: "Impossible is just an opinion.",
    author: "Paulo Coelho",
  },
  {
    id: 26,
    quote: "Your passion is waiting for your courage to catch up.",
    author: "Isabelle Lafleche",
  },
  {
    id: 27,
    quote:
      "Magic is believing in yourself. If you can make that happen, you can make anything happen.",
    author: "Johann Wolfgang Von Goethe",
  },
  {
    id: 28,
    quote:
      "If something is important enough, even if the odds are stacked against you, you should still do it.",
    author: "Elon Musk",
  },
  {
    id: 29,
    quote: "Hold the vision, trust the process.",
    author: "Unknown",
  },
  {
    id: 30,
    quote: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    id: 31,
    quote: "One day or day one. You decide.",
    author: "Unknown",
  },
  {
    id: 32,
    quote:
      "It’s Monday… time to motivate and make dreams and goals happen. Let’s go!",
    author: "Heather Stillufsen",
  },
  {
    id: 33,
    quote: "It was a Monday and they walked on a tightrope to the sun.",
    author: "Marcus Zusak",
  },
  {
    id: 34,
    quote:
      "So. Monday. We meet again. We will never be friends—but maybe we can move past our mutual enmity toward a more-positive partnership.",
    author: "Julio-Alexi Genao",
  },
  {
    id: 35,
    quote: "When life gives you Monday, dip it in glitter and sparkle all day.",
    author: "Ella Woodword",
  },
  {
    id: 36,
    quote:
      "No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.",
    author: "Jaymin Shah",
  },
  {
    id: 37,
    quote:
      "Things may come to those who wait, but only the things left by those who hustle.",
    author: "Abraham Lincoln",
  },
  {
    id: 38,
    quote: "Everything comes to him who hustles while he waits.",
    author: "Thomas Edison",
  },
  {
    id: 39,
    quote:
      "Every sucessful person in the world is a hustler one way or another. We all hustle to get where we need to be. Only a fool would sit around and wait on another man to feed him.",
    author: "K’wan",
  },
  {
    id: 40,
    quote: "Invest in your dreams. Grind now. Shine later.",
    author: "Unknown",
  },
  {
    id: 41,
    quote: "Hustlers don’t sleep, they nap.",
    author: "Unknown",
  },
  {
    id: 42,
    quote: "Greatness only comes before hustle in the dictionary.",
    author: "Ross Simmonds",
  },
  {
    id: 43,
    quote: "Without hustle, talent will only carry you so far.",
    author: "Gary Vaynerchuk",
  },
  {
    id: 44,
    quote:
      "Work like there is someone working twenty four hours a day to take it away from you.",
    author: "Mark Cuban",
  },
  {
    id: 45,
    quote: "Hustle in silence and let your success make the noise.",
    author: "Unknown",
  },
];

module.exports = quotes;
