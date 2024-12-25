

const getController = async () => {
    try {
        const users = await getAllData();
        res.status(200).send({ status: 200, message: 'user fetch successfully', data: users })
    } catch (error) {
        res.status(500).send({ status: 500, message: error })
    }
}

export default getController;