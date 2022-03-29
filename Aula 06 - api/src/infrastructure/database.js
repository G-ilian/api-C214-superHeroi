const mongoose = require('mongoose');

const uri = `sua_url_de_database`;

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