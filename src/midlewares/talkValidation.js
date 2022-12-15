function talkValidation(req, res, next) {
    const { talk } = req.body;
    const correctData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    if (!talk) return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
    if (!talk.watchedAt) {
        return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' }); 
}
    if (!correctData.test(talk.watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
}
      next();
  }
  
  module.exports = talkValidation;