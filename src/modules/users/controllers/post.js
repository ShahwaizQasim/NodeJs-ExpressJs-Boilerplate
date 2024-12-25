import postData from "../services/post.js"

const postController = async (req, res) => {
    try {
        const user = await postData(req.body);
        res.status(200).send({ status: 200, message: "data added successfully", data: user })
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message })
    }
}

export default postController;