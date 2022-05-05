import TipoElementos from './TipoElementos';

class Elemento {
    constructor(numeroAtomico, periodo, tipoElemento, nombre, simbolo, electronegatividad, masaAtomica, EstadoDeOxidacion) {
        this.numeroAtomico = numeroAtomico;
        this.periodo = periodo;
        this.nombre = nombre;
        this.simbolo = simbolo;
        this.electronegatividad = electronegatividad;
        this.masaAtomica = masaAtomica;
        this.estadoDeOxidacion = EstadoDeOxidacion;
        this.tipoElemento = TipoElementos.filter(x => x.id == tipoElemento)[0];
    }
}
const tablaPeriodica =
    [
        new Elemento(1, 1, 6, "Hidrogeno", "H", 2.1, 1.00797, [+1, -1]),
        new Elemento(2, 1, 7, "Helio", "He", null, 4.0026, [2]),
        new Elemento(3, 2, 1, "Litio", "Li", 1.0, 6.939, [1]),
        new Elemento(4, 2, 2, "Berilio", "Be", 1.5, 9.0122, [2]),
        new Elemento(5, 2, 5, "Boro", "B", 2.0, 10.811, [3]),
        new Elemento(6, 2, 6, "Carbono", "C", 2.5, 12.01115, [+4, -4, 2]),
        new Elemento(7, 2, 6, "Nitrogeno", "N", 3.0, 14.0067, [-3, 3, 5, 4, 2]),
        new Elemento(8, 2, 6, "Oxigeno", "O", 3.5, 15.9994, [-2]),
        new Elemento(9, 2, 6, "Fluor", "F", 4.0, 18.9984, [-1]),
        new Elemento(10, 2, 7, "Neon", "Ne", null, 20.183, [0]),
        new Elemento(11, 3, 1, "Sodio", "Na", 0.9, 22.9898, [1]),
        new Elemento(12, 3, 2, "Magnesio", "Mg", 1.2, 20.312, [2]),
        new Elemento(13, 3, 4, "Aluminio", "Al", 1.5, 26.9815, [3]),
        new Elemento(14, 3, 5, "Silicio", "Si", 1.8, 28.086, [4]),
        new Elemento(15, 3, 6, "Fósforo", "P", 2.1, 30.9738, [-3, 3, 5, 4]),
        new Elemento(16, 3, 6, "Azufre", "S", 2.5, 32.064, [-2, 3, 4, 6]),
        new Elemento(17, 3, 6, "Cloro", "Cl", 3.0, 35.453, [-1, 1, 3, 4, 5, 6, 7]),
        new Elemento(18, 3, 7, "Aragón", "Ar", null, 39.948, [0]),
        new Elemento(19, 4, 1, "Potasio", "K", 0.8, 39.102, [1]),
        new Elemento(20, 4, 2, "Calcio", " Ca", 1.0, 40.08, [2]),
        new Elemento(21, 4, 3, "Escandio", "Sc", 1.3, 44.956, [3]),
        new Elemento(22, 4, 3, "Titanio", "Ti", 1.5, 47.90, [3, 4]),
        new Elemento(23, 4, 3, "Vanadio", "V", 1.5, 50.942, [2, 3, 4, 5]),
        new Elemento(24, 4, 3, "Cromo", "Cr", 1.6, 51.996, [2, 3, 6]),
        new Elemento(25, 4, 3, "Manganeso", "Mn", 1.5, 54.938, [2, 3, 4, 6, 7]),
        new Elemento(26, 4, 3, "Hierro", "Fe", 1.8, 55.847, [2, 3]),
        new Elemento(27, 4, 3, "Cobalto", "Co", 1.8, 58.9332, [2, 3]),
        new Elemento(28, 4, 3, "Níquel", "Ni", 1.8, 58.71, [2, 3]),
        new Elemento(29, 4, 3, "Cobre", "Cu", 1.9, 63.54, [1, 2]),
        new Elemento(30, 4, 3, "Cinc", "Zn", 1.6, 65, 37, [2]),
        new Elemento(31, 4, 4, "Galio", "Ga", 1.6, 69.72, [3]),
        new Elemento(32, 4, 5, "Germanio", "Ge", 1.8, 72.59, [2, 4]),
        new Elemento(33, 4, 5, "Arsénico", "As", 2.0, 74.922, [-3, 3, 5]),
        new Elemento(34, 4, 6, "Selenio", "Se", 2.4, 78.96, [-2, 4, 6]),
        new Elemento(35, 4, 6, "Bromo", "Br", 2.8, 79.909, [-1, 1, 3, 4, 5, 7]),
        new Elemento(36, 4, 7, "Cripton", "Kr", null, 83.80, [0]),
        new Elemento(37, 5, 1, "Rubidio", "Rb", 0.8, 85.47, [1]),
        new Elemento(38, 5, 2, "Estroncio", "Sr", 1.0, 87.62, [2]),
        new Elemento(39, 5, 3, "Itrio", "Y", 1.3, 88.905, [3]),
        new Elemento(40, 5, 3, "Circonio", "Zr", 1.4, 91.22, [4]),
        new Elemento(41, 5, 3, "Niobio", "Nb", 1.6, 92.906, [3, 5]),
        new Elemento(42, 5, 3, "Molibdeno", "Mo", 1.8, 95.94, [2, 3, 4, 5, 6]),
        new Elemento(43, 5, 3, "Tecnecio", "Tc", 1.9, 98.90, [4, 7]),
        new Elemento(44, 5, 3, "Ruteno", "Ru", 2.2, 101.07, [2, 3, 4, 6, 8]),
        new Elemento(45, 5, 3, "Rodio", "Rh", 2.2, 102.07, [2, 3, 4]),
        new Elemento(46, 5, 3, "Paladio", "Pd", 2.2, 106.4, [2, 4]),
        new Elemento(47, 5, 3, "Plata", "Ag", 1.9, 107.870, [1]),
        new Elemento(48, 5, 3, "Cadmio", "Cd", 1.7, 112.40, [2]),
        new Elemento(49, 5, 4, "Indio", "Id", 1.7, 114.82, [3]),
        new Elemento(50, 5, 4, "Estaño", "Sn", 1.8, 118.69, [4, 2]),
        new Elemento(51, 5, 5, "Antimonio", "Sb", 1.9, 121.75, [-3, 3, 5]),
        new Elemento(52, 5, 5, "Telurio", "Te", 2.1, 127.60, [-2, 4, 6]),
        new Elemento(53, 5, 6, "Yodo", "I", 2.5, 126.904, [-1, +1, 3, 4, 5, 7]),
        new Elemento(54, 5, 7, "Xenon", "Xe", null, 131.30, [0]),
        new Elemento(55, 6, 1, "Cesio", "Cs", 0.7, 132.905, [1]),
        new Elemento(56, 6, 1, "Bario", "Ba", 0.9, 137.34, [2]),
        new Elemento(57, 6, 8, "Lantano", "La", 1.1, 138.91, [3]),
        new Elemento(58, 6, 8, "Cerio", "Ce", 1.1, 140.12, [3, 4]),
        new Elemento(59, 6, 8, "Praseodimio", "Pr", 1.1, 140.907, [3, 4]),
        new Elemento(60, 6, 8, "Neodimio", "Nd", 1.2, 144.24, [3, 4]),
        new Elemento(61, 6, 8, "Promesio", "Pm", null, 147, [3]),
        new Elemento(62, 6, 8, "Samario", "Sm", 1.2, 150.35, [3, 2]),
        new Elemento(63, 6, 8, "Europio", "Eu", null, 151.96, [3, 2]),
        new Elemento(64, 6, 8, "Gadolinio", "Gd", 1.1, 157.25, [3, 4]),
        new Elemento(65, 6, 8, "Terbio", "Tb", 1.2, 158.924, [3, 4]),
        new Elemento(66, 6, 8, "Disprosio", "Dy", null, 162.50, [3, 4]),
        new Elemento(67, 6, 8, "Holmio", "Ho", 1.2, 164.930, [3]),
        new Elemento(68, 6, 8, "Erbio", "Er", 1.2, 167.25, [3]),
        new Elemento(69, 6, 8, "Tulio", "Tm", 1.2, 168.934, [3.2]),
        new Elemento(70, 6, 8, "Iterbio", "Yb", 1.1, 173.04, [3, 2]),
        new Elemento(71, 6, 8, "Lutecio", "Lu", 1.2, 174.97, [3]),
        new Elemento(72, 6, 3, "Hafnio", "Hf", 1.3, 178.49, [4]),
        new Elemento(73, 6, 3, "Tantalio", "Ta", 1.5, 180.948, [5]),
        new Elemento(74, 6, 3, "Wolframio", "W", 1.7, 183.85, [6, 5, 4, 3, 2]),
        new Elemento(75, 6, 3, "Renio", "Re", 1.9, 186.2, [7, 6, 4, 2, -1]),
        new Elemento(76, 6, 3, "Osmio", "Os", 2.2, 190.2, [2, 3, 4, 6, 8]),
        new Elemento(77, 6, 3, "Iridio", "Ir", 2.2, 192.2, [2, 3, 4, 6]),
        new Elemento(78, 6, 3, "Platino", "Pt", 2.2, 195.09, [2, 4]),
        new Elemento(79, 6, 3, "Oro", "Au", 2, 4, 196.09, [3, 1]),
        new Elemento(80, 6, 3, "Mercurio", "Hg", 1.9, 200.59, [2.1]),
        new Elemento(81, 6, 4, "Talio", "Ti", 1.8, 204.37, [3, 1]),
        new Elemento(82, 6, 4, "Plomo", "Pb", 1.8, 207.19, [4, 2]),
        new Elemento(83, 6, 4, "Bismuto", "Bi", 1.9, 208.98, [3, 5]),
        new Elemento(84, 6, 5, "Polonio", "Po", 2.0, 210, [4, 2, -2]),
        new Elemento(85, 6, 6, "Astato", "At", 2.2, 210, []),
        new Elemento(86, 6, 7, "Radón", "Rn", null, 222, [0]),
        new Elemento(87, 7, 1, "Francio", "Fr", 0.7, 223, [1]),
        new Elemento(88, 7, 2, "Radio", "Ra", 0.9, 226, [2]),
        new Elemento(89, 7, 9, "Actinio", "Ac", 1.1, 138.91, [3]),
        new Elemento(90, 7, 9, "Torio", "Th", 1.3, 232.039, [4]),
        new Elemento(91, 7, 9, "Protactinio", "Pa", 1.5, 231, [5, 4]),
        new Elemento(92, 7, 9, "Uranio", "U", 1.7, 238.03, [6, 5, 4, 3]),
        new Elemento(93, 7, 9, "Neptunio", "Np", 1.3, 237, [6, 5, 4, 3]),
        new Elemento(94, 7, 9, "Plutonio", "Pu", 1.3, 239, [6, 5, 4, 3]),
        new Elemento(95, 7, 9, "Americio", "Am", 1.3, 243, [6, 5, 4, 3]),
        new Elemento(96, 7, 9, "Curio", "Cm", 1.3, 247, [3]),
        new Elemento(97, 7, 9, "Berkelio", "Bk", 1.3, 247, [4, 3]),
        new Elemento(98, 7, 9, "Californio", "Cf", 1.3, 251, [3]),
        new Elemento(99, 7, 9, "Einstenio", "Ei", 1.3, 254, []),
        new Elemento(100, 7, 9, "Fermio", "Fm", 1.3, 257, []),
        new Elemento(101, 7, 9, "Mendelvio", "Md", 1.3, 256, []),
        new Elemento(102, 7, 9, "Nobelio", "Nb", 1.3, 259, []),
        new Elemento(103, 7, 9, "Laurencio", "Lw", 1.3, 260, []),
        new Elemento(104, 7, 3, "Rutherfordio", "Rf", null, 261, []),
        new Elemento(105, 7, 3, "Dubnio", "Db", null, 262, []),
        new Elemento(106, 7, 3, "Seaborgio", "Sg", null, 263, [6]),
        new Elemento(107, 7, 3, "Bohrio", "Bh", null, 262, [7]),
        new Elemento(108, 7, 3, "Hassio", "Hs", null, 265, [4]),
        new Elemento(109, 7, 3, "Meitnerio", "Mt", null, 266, [4]),
        new Elemento(110, 7, 3, "Ununilio", "Uun", null, 269, [4]),
        new Elemento(111, 7, 3, "Unununio", "Uuu", null, 272, [3]),
        new Elemento(112, 7, 3, "Ununbio", "Uub", null, 277, [2]),
        new Elemento(113, 7, 10, "Ununtrio", "Uut", null, null, []),
        new Elemento(114, 7, 10, "Ununquadio", "Uuq", null, 285, [4, 2]),
        new Elemento(115, 7, 10, "Ununpentio", "Uup", null, null, []),
        new Elemento(116, 7, 10, "Ununhexio", "Uuh", null, 289, [4, 2]),
        new Elemento(117, 7, 10, "Ununseptio", "Uus", null, null, []),
        new Elemento(118, 7, 10, "Ununoctio", "Uuo", null, 293, [2]),
        new Elemento(119, 8, 10, "Ununenio", "Uue", null, null, []),
        new Elemento(120, 8, 10, "Unbinilio", "Ubn", null, null, []),
        new Elemento(121, 8, 10, "Unbiunio", "Ubu", null, null, []),
    ]


module.export = tablaPeriodica;      