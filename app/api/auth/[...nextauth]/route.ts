import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import Auth0Provider from 'next-auth/providers/auth0'

// export 
const authOptions:NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? ""
        }),
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID ?? "",
            clientSecret: process.env.AUTH0_CLIENT_SECRET ?? "",
            issuer: process.env.AUTH0_ISSUER_BASE_URL
          })
    ]
}

// export 
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}

