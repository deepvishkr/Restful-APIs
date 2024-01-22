const model = require("../models/user")
const bcrypt = require("bcrypt")
module.exports.get = async(req, res) => {

    let list = await model.find()
    res.json(list)

}


module.exports.post = async(req, res) => {

    const { email, password } = req.body
    let hashedPassword = await bcrypt.hash(password, 10)

    let user = await model.create({ email, password: hashedPassword })
    res.json(user)
}
module.exports.put = async(req, res) => {
    let update = await model.findByIdAndUpdate({ _id: req.params.id }, req.body)
    res.json(update)
}

module.exports.delete = async(req, res) => {
    console.log("hii")
    await model.findByIdAndDelete({ _id: req.params.id })
    res.send("data deleted")
}