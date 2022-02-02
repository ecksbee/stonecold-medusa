import Tokens from 'csrf'
import { sign, unsign } from 'cookie-signature'
const tokens = new Tokens()
const signedCsrfToken = () => {
    if (!process.env.CSRF_SECRET) {
        throw new Error('empty csrf secret')
    }
    const secret = process.env.CSRF_SECRET??''
    const csrfToken = tokens.create(secret)
    return sign(csrfToken, secret)
}
const verifyCsrfToken = (token: string) => {
    if (!process.env.CSRF_SECRET) {
        throw new Error('empty csrf secret')
    }
    const secret = process.env.CSRF_SECRET??''
    const unsigned = unsign(token, secret)
    if (!unsigned) {
        return false
    }
    return tokens.verify(secret, unsigned)
}
const tokenKey = 'XSRF-TOKEN'
export { signedCsrfToken, verifyCsrfToken, tokenKey }