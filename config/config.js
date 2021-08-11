require('dotenv').config({ path: './config/.env' })

exports.creds = {
	identityMetadata:
		'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',

	clientID: process.env.AD_CLIENT_ID,

	clientSecret: process.env.AD_CLIENT_ID_SECRET,

	responseType: 'code id_token',

	responseMode: 'form_post',

	redirectUrl:
		'https://today-plan-fullstack-app.herokuapp.com/auth/openid/return',

	allowHttpForRedirectUrl: true,

	validateIssuer: false,

	issuer: null,

	passReqToCallback: false,

	useCookieInsteadOfSession: false,

	cookieEncryptionKeys: [
		{ key: '12345678901234567890123456789012', iv: '123456789012' },
		{ key: 'abcdefghijklmnopqrstuvwxyzabcdef', iv: 'abcdefghijkl' },
	],

	scope: ['profile', 'offline_access', 'https://graph.microsoft.com/mail.read'],

	loggingLevel: false,

	nonceLifetime: null,

	nonceMaxAmount: 5,

	clockSkew: null,
}

exports.destroySessionUrl = 'https://today-plan-fullstack-app.herokuapp.com'

exports.useMongoDBSessionStore = false

exports.databaseUri = 'mongodb://localhost/OIDCStrategy'

exports.mongoDBSessionMaxAge = 24 * 60 * 60
