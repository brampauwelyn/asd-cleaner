const EMOJI_LIST =  ['🤘🏽', '⚡️', '🍀', '💚', '✅'];

const getRandomEmoji = () => {
  return EMOJI_LIST[Math.floor(Math.random()*EMOJI_LIST.length)]
}

module.exports = { getRandomEmoji };