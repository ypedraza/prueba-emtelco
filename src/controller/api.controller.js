const express = require('express');
const { login, getHabilidadesOcultas } = require('../service/api.sercice');
const router = express.Router();
const verifyToken = require('../middleware/jwt');

router.post('/api/login', (req, res) => {
    const bodyLogin = req.body;
    console.log("🚀 ~ router.get ~ req.body:", req.body)
    const resultLogin = login(bodyLogin);
    res.send(resultLogin);
});


router.get('/pokemon/habilidadesOcultas/:pokemon', verifyToken, async (req, res) => {
    const { pokemon } = req.params;
    const result = await getHabilidadesOcultas(pokemon);
    res.send(result);
});

module.exports = router;