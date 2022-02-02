import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import React, { SyntheticEvent } from 'react'
import HCaptcha from 'react-hcaptcha'
import Layout from '../components/Layout'
import { signedCsrfToken, tokenKey } from '../lib/csrf'
import { siteKey } from '../lib/hcaptcha'
import styles from '../styles/Signup.module.css'

type Props = {
    csrfToken: any 
}
const SignUp: NextPage<Props> = ({csrfToken} : Props) => {
    const [hcaptcha, setHcaptcha] = React.useState(false)
    const [submit, setSubmit] = React.useState(false)
    const [processed, setProcessed] = React.useState(false)
    const signup = async (event : SyntheticEvent) => {
        if (!hcaptcha) {
            return
        }
        setSubmit(true)
        setProcessed(false)
        event.preventDefault()
        const anyTarget = event.target as any
        const target = {
          firstName: anyTarget.firstName.value,
          lastName: anyTarget.lastName.value,
          phone: anyTarget.phone.value,
          email: anyTarget.email.value,
          reason: anyTarget.reason.value
        }
        
        let headers : any = {
            'Content-Type': 'application/json',
            [tokenKey]: csrfToken
        }
        await fetch('/api/signup', {
          body: JSON.stringify(target),
          headers,
          method: 'POST',
          credentials: 'include',
        })
        setSubmit(false)
        setProcessed(true)
    
    }
    if (submit) {
        return (
            <Layout>
                <div className='padded'>
                    <p>
                        Signing up in progress...
                    </p>
                </div>
            </Layout>
        )
    }
    if (processed) {
        return (
            <Layout>
                <div className='padded'>
                    <h1>
                        Thank you.
                    </h1>
                    <p>
                        Feel free to contact us at <a href="mailto:contact@ecksbee.com">contact@ecksbee.com</a>.
                    </p>
                    <p className={styles.home}><Link href='/'>Go home</Link></p>
                </div>
            </Layout>
        )
    }
    return (
        <Layout>
            <div className='padded'>
                <h1>Want to hear from us?</h1>
                <h2>Tell us about yourself and sign up.</h2>
                <form onSubmit={async e => await signup(e)}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div>
                        <input className={styles.fullWidth} id="firstName" name="firstName" type="text" autoComplete="given-name" required />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div>
                        <input className={styles.fullWidth} id="lastName" name="lastName" type="text" autoComplete="family-name" required />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone Number</label>
                    </div>
                    <div>
                        <input className={styles.fullWidth} id="phone" name="phone" type="text" autoComplete="tel" required />
                    </div>

                    <div>
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <div>
                        <input className={styles.fullWidth} id="email" name="email" type="text" autoComplete="email" required />
                    </div>
                    
                    <div>
                        <label htmlFor="reason">Why are you signing up?</label>
                    </div>
                    <div>
                        <textarea className={styles.fullWidth} id="reason" name="reason" rows={10} required />
                    </div>

                    <HCaptcha sitekey={siteKey} onVerify={
                        async (token: string) => {
                            await fetch('/api/hcaptcha', {
                              body: JSON.stringify({
                                  response: token
                              }),
                              method: 'POST',
                              credentials: 'include',
                            })
                            setHcaptcha(true)
                        }
                    }/>
                    <div>
                        <button className={hcaptcha? styles.btnSubmit : styles.btnDisabled} type={hcaptcha? 'submit' : 'button'}>Sign me up</button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    return {
      props: {
        csrfToken: signedCsrfToken()
      }
    }
}
export default SignUp
