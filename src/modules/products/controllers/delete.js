import UserDelete from "../services/delete.js";

const deleteController = async (req, res) => {
    try {
        let { id } = req.params;
        const user = await UserDelete(id);
        res.status(200).send({ status: 200, message: "user deleted successfully" })
    } catch (error) {
        res.status(500).send({ status: 500, message: error })
    }
}

export default deleteController;