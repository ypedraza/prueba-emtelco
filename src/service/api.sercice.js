const jwt = require('jsonwebtoken');
const axios = require('axios');

const login = (bodyLogin) => {
    console.log("🚀 ~ login ~ bodyLogin:", bodyLogin)

    if (bodyLogin.username === 'admin' && bodyLogin.password === 'admin') {
        const token = jwt.sign(bodyLogin,  "ABC123", { expiresIn: 3600, });
        return {
            status: 200,
            message: 'Login successful',
            data: {
                token
            }
        }
    }
    return {
        status: 400,
        message: 'Login failed'
    }
}

const getHabilidadesOcultas = async (pokemon) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const habilidades = response.data.abilities;

        const habilidadesOcultas = habilidades.filter(habilidad => habilidad.is_hidden);

        return {
            status: 200,
            message: 'Habilidades ocultas del pokemon ' + pokemon,
            data: {
                habilidades: {
                    ocultas: habilidadesOcultas.map(h => h.ability.name)
                }
            }
        }
    } catch (error) {
        return {
            status: 500,
            message: 'Error al obtener las habilidades ocultas del pokemon ' + pokemon
        }
    }
    
    
}

module.exports = {
    login,
    getHabilidadesOcultas
}