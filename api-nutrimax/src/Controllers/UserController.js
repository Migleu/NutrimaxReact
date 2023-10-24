import connectionDB from "../Database/config.js"

class UserController {
    async login(req, res) {
        try {
            const connection = await connectionDB();
            const sqlQuery = `SELECT * FROM users`;
            
            const [rows, fields] = await connection.query(sqlQuery);
            await connection.end();
            
            return res.status(200).json({message : "Login efetuado", data: rows });
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    async register(req, res) {
        const { nome, sobrenome, email, senha, idade, altura, peso } = req.body;

        try {
            const connection = await connectionDB();


            const sqlQuery = 
            `INSERT INTO users (nome, sobrenome, email, senha, idade, altura, peso) VALUES (?, ?, ?, ?, ?, ?, ?)`;
            
            const [result] = await connection.query(sqlQuery, [
                nome,
                sobrenome,
                email,
                senha,
                altura,
                idade,
                peso,
            ]);
            await connection.end();
            
            return res
            .status(200)
            .json({message : "Usuario registrado com sucesso!", data: result });

        } catch (err) {

            return res.status(500)
            .json(err.message);
            
        }
    }
}

export default new UserController();