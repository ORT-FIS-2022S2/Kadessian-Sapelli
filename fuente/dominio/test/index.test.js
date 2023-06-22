import {Padre} from '../Padre.js'

describe('Test de loggin', () => {

    test('Crear un loggin valido', () => {
        let padre = new Padre('Pablo', 45678904, 4);
        let nombre = padre.getNombre();
        let nombreEsperado = 'Pablo';
        expect(nombre).toBe(nombreEsperado);
    });
  
    test('Crear un loggin sin usuario', () => {
      expect(() => new Padre('', 6, 4).isValid()).toThrowError('El nombre del usuario no puede ser vacío');
    });
  
    test('Crear un loggin sin contraseña', () => {
        expect(() => new Padre('Pepe', -1, 4).isValid()).toThrowError('La contraseña del usuario es incorrecta');
    });
  
  });