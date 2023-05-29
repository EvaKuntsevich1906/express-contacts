const isValidUserId = (req, res, next) => {
    const {  id } = req.params;
    if (id < 0) throw new Error('ID должен быть строго положительным');
    if (isNaN(id)) throw new Error('ID должно быть числовым значением');

    next();
}

const  isValidUserBody = (req, res, next) => {
    const { name, surname,birth,city,age } = req.body;
    if (!name) throw new Error("Введите имя");
    if (!surname) throw new Error("Введите фамилию");
    if (!birth) throw new Error("Введите дату рождения");
    if (!city) throw new Error("Введите город");
    if (!age) throw new Error("Введите возраст");

    if (!isNaN(name)) throw new Error("Имя должно бысть строкой");
    if (!isNaN(surname)) throw new Error("Фамилия должна быть строкой");
    if (!isNaN(city)) throw new Error("Город должен быть строкой");
    if (isNaN(age)) throw new Error("Возраст должен быть числом");

    const regex = /^\d{4}\-\d{2}\-\d{2}$/gm;

    if (!regex.test(birth)) throw new Error("Введите корректно дату");

    next();
}
module.exports = {
    isValidUserId,
    isValidUserBody
};