const { getAllDataDB, getDataByIDDB, createDataDB, updateDataByIDDB, deleteDataByIDDB} = require("../repository/user.repository.js");

const getAllData = async () => {
  const data = await getAllDataDB();
  return data;
};

const getDataByID = async (id) => {
  const data = await getDataByIDDB(id);
  return data;
};


const createData = async (name, surname, birth, city, age) => {
  const data = await createDataDB(name, surname, birth, city, age);
  return data;
}

const updateDataByID = async (id, name, surname, birth, city, age) => {
  const data = await updateDataByIDDB(id, name, surname, birth, city, age);
  return data;
}

const deleteDataById = async (id) => {
  const data = await deleteDataByIDDB(id);
  return data;
}


module.exports = { getAllData, getDataByID, createData, updateDataByID, deleteDataById };