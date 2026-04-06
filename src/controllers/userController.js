// Importando o service
import userService from "../services/userService.js";

// Importando o JWT (criação de token)
import jwt from 'jsonwebtoken';

// Importando o bcrypt
import bcrypt from "bcrypt";

// Importando as variáveis de ambiente
import dotenv from "dotenv";

// Configurando o dotenv
dotenv.config();

// Segredo para gerar o token da API
const JWTSecret = process.env.JWTSECRET;

// Função para CADASTRAR um usuário
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Gerando o hash de senha
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        // Salvando no banco
        await userService.Create(name, email, hash);

        return res.status(201).json({
            message: 'Usuário cadastrado com sucesso!'
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Não foi possível cadastrar o usuário. Erro interno do servidor.'
        });
    }
}

// Função para AUTENTICAR um usuário (login)
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validação do e-mail
        if (!email) {
            return res.status(400).json({
                error: "E-mail inválido ou não informado."
            });
        }

        // Buscar usuário
        const user = await userService.getOne(email);

        if (!user) {
            return res.status(404).json({
                error: "O usuário informado não foi encontrado."
            });
        }

        // Verificar senha
        const correct = bcrypt.compareSync(password, user.password);

        if (!correct) {
            return res.status(401).json({
                error: "Suas credenciais são inválidas. Acesso negado. Tente novamente."
            });
        }

        // Gerar token
        jwt.sign(
            { id: user._id, email: user.email },
            JWTSecret,
            { expiresIn: '48h' },
            (error, token) => {

                if (error) {
                    return res.status(400).json({
                        error: "Não foi possível gerar o token de autenticação."
                    });
                }

                return res.status(200).json({
                    token: token,
                    message: "Login realizado com sucesso"
                });
            }
        );

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Não foi possível realizar o login. Erro interno do servidor.'
        });
    }
}

export default { createUser, loginUser };