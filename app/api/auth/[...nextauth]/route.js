import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { pool } from "../../../../lib/db";
import { authpassword } from "../../../utils/helperFunctions";

const authOptions = ({
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                // Check if either email or password is empty
                if (!credentials.email) {
                    throw new Error("Empty email or password");
                }

                if (credentials.email || credentials.password) {

                    const [user] = await pool.promise().query(
                        'SELECT * FROM user WHERE email = ?',
                        [credentials.email]
                    );

                    if (user.length === 0) {
                        throw new Error("Could not find account");
                    }

                    if (typeof user[0].password !== 'string') {
                        throw new Error("Invalid user data");
                    }

                    const salt = user[0].salt;
                    const hashedPassword = authpassword(salt, credentials.password);

                    if (user[0].password != hashedPassword) {
                        throw new Error("Invalid Credentials");
                    }

                    if (user[0].isVerified === 0) {
                        throw new Error("Please Verify your OTP")
                    }

                    // Include an access token in the session
                    return {
                        id: user[0].id,
                        name: user[0].fullName,
                        email: user[0].email,
                    };
                }

                if (!credentials.password || credentials.email) {

                    const [user] = await pool.promise().query(
                        'SELECT * FROM user WHERE email = ?',
                        [credentials.email]
                    )

                    if (user.length === 0) {
                        throw new Error("Could not find account");
                    }

                    return {
                        id: user[0].id,
                        name: user[0].fullName,
                        email: user[0].email,
                    };
                }

            },

        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 12 * 60 * 60,
    },
    pages: {
        signIn: '/auth',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id,
                    token.name = user.name
                token.accessToken = user.access_token
            }

            return token
        },

        async session({ session, token, }) {
            session.accessToken = token.accessToken
            session.user.id = token.id
            return session
        }
    }
})

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }