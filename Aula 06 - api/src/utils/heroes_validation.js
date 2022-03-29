const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    equipe: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    poder: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },

    forca: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
};

const update = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    equipe: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    poder: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    equipe: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};