const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Cookie = require("./models/cookie");

async function seed() {
  await Cookie.create({
    fortune: "You have a secret admirer.",
    category: "love",
  });
  await Cookie.create({
    fortune:
      "How many times have I told you to stay away from the power couplings?",
    category: "future",
  });
  await Cookie.create({
    fortune: "We don't know the future, but you just got a free cookie.",
    category: "luck",
  });
  await Cookie.create({
    fortune: "Error 404.  Fortune not found.",
    category: "tech",
  });
  await Cookie.create({
    fortune: "Here are last week's lottery numbers: 22, 36, 54.",
    category: "luck",
  });
  await Cookie.create({
    fortune: "Imitation is the greatest form of flattery.",
    category: "quotes",
  });
  await Cookie.create({
    fortune: "Imitation is the greatest form of flattery.",
    category: "quotes",
  });
  await Cookie.create({
    fortune:
      "If you think that no one cares that you're alive, try missing a few car payments.",
    category: "quotes",
  });
  await Cookie.create({
    fortune: "Having children is like being pecked to death by a duck.",
    category: "quotes",
  });
  await Cookie.create({
    fortune: "You are not illiterate.",
    category: "quotes",
  });

  console.log("Cookie seeds planted.");

  mongoose.disconnect();
}

seed();
