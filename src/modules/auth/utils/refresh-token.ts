import crypto from "crypto"

import { RefreshToken } from "../../../type.ts"

export const generateRefreshToken = (sessionID: string): RefreshToken => {
    const secret= crypto.randomBytes(40).toString("hex")
    return {
        token:`${sessionID}.${secret}`,
        secret
    }
}