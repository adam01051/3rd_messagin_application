import jwt from "jsonwebtoken"


export const generateToken = (userID, res) => {

    const token = jwt.sign({ userID }, process.env, JWT_Secret,
        {
            expiresIn: "7d"
        }
    )
}