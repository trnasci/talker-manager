const validRate = (rate) => {
  if (!rate && rate !== 0) {
    return true;
  }
};

function rateValidation(req, res, next) {
    const { talk: { rate } } = req.body;
    if (validRate(rate)) return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    if ((Number(rate) < 1 || Number(rate) > 5) || !Number.isInteger(Number(rate))) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    
      next();
  }
  
  module.exports = rateValidation;