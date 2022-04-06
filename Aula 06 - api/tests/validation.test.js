const Constants=require('../src/utils/Constants');
const Validation=require('../src/utils/validation');

test('Caso válido - Criar heroi', () => {
    const result = Validation.create({
        "nome":"Homem formiga",
        "equipe":"Vingadores",
        "poder":"Diminuição de tamanho",
        "forca":100
    });
    expect(result).toEqual(undefined);
});

test('Caso Inválido - Criar heroi', () => {
    const result = Validation.create({
        "nome":"Homem formiga",
        "equipe":"Vingadores",
        "poder":"Diminuição de tamanho",
    });
    expect(result).toEqual(undefined);
});
