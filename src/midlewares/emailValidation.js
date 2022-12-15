function emailValidation(req, res, next) {
    const { email } = req.body;
    function validateEmail(em) {
        const re = /\S+@\S+\.\S+/;
        return re.test(em);
      }
    if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    if (!validateEmail(email)) {
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    } 
    
    next();
}

module.exports = emailValidation;