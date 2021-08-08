require('dotenv').config({ path: '../config/.env' })

exports.creds = {
	identityMetadata:
		'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',

	clientID: process.env.AD_CLIENT_ID || 'f5a669b3-5c83-4983-86c6-e8b6ba43bd3a',

	clientSecret:
		process.env.AD_CLIENT_ID_SECRET || 'U~8g-a6Rc3.hHO1i89b4jrtPJ1p-Ah~02E',

	responseType: 'code id_token',

	responseMode: 'form_post',

	redirectUrl: 'https://today-plan-app.herokuapp.com/auth/openid/return',

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

exports.destroySessionUrl = 'https://today-plan-app.herokuapp.com'

exports.useMongoDBSessionStore = false

exports.databaseUri =
	'mongodb://https://today-plan-app.herokuapp.com/OIDCStrategy'

exports.mongoDBSessionMaxAge = 24 * 60 * 60
