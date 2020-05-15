const axios=require('axios')
const { OAuth2Client } = require('google-auth-library');

const {env:{CLIENT_ID}}=process
const client = new OAuth2Client(CLIENT_ID);

const googleAuth=async (req, res) => {
	const { tokenId } = req.body;
	const verify = async () => {
		const ticket = await client.verifyIdToken({
			idToken: tokenId,
			audience: CLIENT_ID,
		});
		const payload = ticket.getPayload();
		const userid = payload['sub'];
	};
	verify().catch(console.error);

	// request user details:
	const idInfo = await axios.get(
		`https://oauth2.googleapis.com/tokeninfo?id_token=${req.body.tokenId}`
	);
	res.json(idInfo.data);
}

module.exports=googleAuth