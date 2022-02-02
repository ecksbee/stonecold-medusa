const siteKey = '4ec17f27-819e-4f60-b64b-2d29ec282c6d'

const verifyHcaptcha = async (captchaRes: string) => {
    if (!process.env.HCAPTCHA_SECRET) {
        throw new Error('empty Hcaptcha secret')
    }
    const secret = process.env?.HCAPTCHA_SECRET??''
    return await fetch('https://hcaptcha.com/siteverify', {
      body: <any>{
          response: captchaRes,
          secret
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      credentials: 'include',
    })
}
export { siteKey, verifyHcaptcha }