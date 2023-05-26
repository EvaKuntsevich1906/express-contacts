const {
    getAllDataDB,
    // getAllDataByIDDB,

} = require("../repository/user.repository.js");

const getAllData = async () => {
    const data = await getAllDataDB();
    return data;
};

// const getAllDataByID = async (id) => {
//     const data = await getAllDataByIDDB(id);
//     return data;
// };

module.exports = {
    getAllData
}