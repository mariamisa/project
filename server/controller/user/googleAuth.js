const axios=require('axios')
const { OAuth2Client } = require('google-auth-library');
const jwt=require('jsonwebtoken')

const {env:{CLIENT_ID}}=process
const client = new OAuth2Client(CLIENT_ID);

const googleAuth=async (req, res) => {
	const { tokenId,name } = req.body;
	const verify = async () => {
		const ticket = await client.verifyIdToken({
			idToken: tokenId,
			audience: CLIENT_ID,
		});
		const payload = ticket.getPayload();
		const userid = payload['sub'];
		//set cookies
	};
	verify().catch(res=>res.status(400).json('un-uth'));

	// request user details:
	const idInfo = await axios.get(
		`https://oauth2.googleapis.com/tokeninfo?id_token=${req.body.tokenId}`
	);
	const token= jwt.sign({_id:idInfo.data.kid,name:idInfo.data.name },process.env.SECRET_KEY);
	res.cookie('token',token)
	res.json(idInfo.data);
}

module.exports=googleAuth