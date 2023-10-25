import connectionDB from "../Database/config.js"

class UserController {
    async login(req, res) {
		const { email, password } = req.body;

		try {
			if (!email || !password) {
				return res
					.status(400)
					.json({ message: "Email e senha são obrigatórios" });
			}

			const connection = await connectionDB();
			const sqlQuery = "SELECT * FROM users WHERE email = ?";
			const [rows] = await connection.query(sqlQuery, [email]);
			await connection.end();

			if (rows.length === 0) {
				return res.status(401).json({ message: "Usuário não encontrado" });
			}

			const user = rows[0];

			// const passwordMatch = await bcrypt.compare(password, user.password); // compara senhas que são hash
			const passwordMatch = (password == user.senha) ? true : false;

			if (passwordMatch) {
				return res.status(200).json({ message: "Login bem-sucedido", athenticated: true });
			} else {
				return res.status(401).json({ message: "Senha incorreta", athenticated: false });
			}
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