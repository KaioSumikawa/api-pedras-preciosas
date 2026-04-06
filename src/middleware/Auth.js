import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWTSecret = process.env.JWTSECRET;

const Authorizarion = (req, res, next) => {
    const authToken = req.headers["authorization"];

    if (authToken !== undefined) {
        const bearer = authToken.split(" ");
        const token = bearer[1];

        jwt.verify(token, JWTSecret, (error, data) => {
            if (error) {
                return res.status(401).json({
                    error: "Acesso não autorizado. Token inválido"
                });
            }

            req.token = token;
            req.loggedUser = {
                id: data.id,
                email: data.email
            };

            next(); 
        });

    } else {
        return res.status(401).json({
            error: "Acesso não autorizado. Você não está autenticado"
        });
    }
};

export default { Authorizarion };