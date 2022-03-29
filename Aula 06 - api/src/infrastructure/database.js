const mongoose = require('mongoose');

const uri = `mongodb+srv://<root>:root@cluster0.vilim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const heroesSchema = new Schema({
    nome: {
        type: String,
        unique: true,
    },
    equipe: String,
    poder: String,
    forca:{
        type: Number,
    },

});

const HeroesModel = mongoose.model('HeroesModel', heroesSchema);

module.exports = {
    HeroesModel,
};