import jwt from "jsonwebtoken"

export const generateAccessToken = (
  userId: string,
  sessionId: string
) => {
  return jwt.sign(
    {
      sub: userId,
      sessionId
    },
    process.env.ACCESS_TOKEN_SECRET!,
    {
      expiresIn: "15m"
    }
  )
}