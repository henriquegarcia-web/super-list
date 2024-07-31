export interface IChecklistProduct {
  productId: number
  productName: string
}

export interface IChecklistCategory {
  categoryId: number
  categoryName: string
  categoryItems: IChecklistProduct[]
}

const checklistData: IChecklistCategory[] = [
  {
    categoryId: 1,
    categoryName: 'Grãos e Cereais',
    categoryItems: [
      { productId: 101, productName: 'Arroz' },
      { productId: 102, productName: 'Lentilha' },
      { productId: 103, productName: 'Farinha de mandioca' },
      { productId: 104, productName: 'Macarrão' },
      { productId: 105, productName: 'Farinha de trigo' },
      { productId: 106, productName: 'Cuscuz' },
      { productId: 107, productName: 'Polenta' },
      { productId: 108, productName: 'Quinoa' },
      { productId: 109, productName: 'Grão de bico' }
    ]
  },
  {
    categoryId: 2,
    categoryName: 'Conservas e Enlatados',
    categoryItems: [
      { productId: 201, productName: 'Extrato de tomate' },
      { productId: 202, productName: 'Leite condensado' },
      { productId: 203, productName: 'Creme de leite' }
    ]
  },
  {
    categoryId: 3,
    categoryName: 'Fermentos',
    categoryItems: [
      { productId: 301, productName: 'Fermento Químico' },
      { productId: 302, productName: 'Fermento Biológico' }
    ]
  },
  {
    categoryId: 4,
    categoryName: 'Óleos e Temperos',
    categoryItems: [
      { productId: 401, productName: 'Óleo' },
      { productId: 402, productName: 'Temperos' },
      { productId: 403, productName: 'Alho' },
      { productId: 404, productName: 'Tempero verde' }
    ]
  },
  {
    categoryId: 5,
    categoryName: 'Laticínios e Derivados',
    categoryItems: [
      { productId: 501, productName: 'Leite em pó' },
      { productId: 502, productName: 'Manteiga' },
      { productId: 503, productName: 'Requeijão' },
      { productId: 504, productName: 'Nata' },
      { productId: 505, productName: 'Leite' },
      { productId: 506, productName: 'Queijo (comprar a + para congelar)' }
    ]
  },
  {
    categoryId: 6,
    categoryName: 'Frios',
    categoryItems: [{ productId: 601, productName: 'Presunto e/ou Mortadela' }]
  },
  {
    categoryId: 7,
    categoryName: 'Pães e Biscoitos',
    categoryItems: [
      { productId: 701, productName: 'Pão de forma' },
      { productId: 702, productName: 'Bolachas salgadas' },
      { productId: 703, productName: 'Bolachas doces' }
    ]
  },
  {
    categoryId: 8,
    categoryName: 'Carnes e Peixes',
    categoryItems: [
      { productId: 801, productName: 'Frango' },
      { productId: 802, productName: 'Carne' },
      { productId: 803, productName: 'Peixe' }
    ]
  },
  {
    categoryId: 9,
    categoryName: 'Ração Animal',
    categoryItems: [{ productId: 901, productName: 'Ração da Fera' }]
  },
  {
    categoryId: 10,
    categoryName: 'Hortifruti',
    categoryItems: [
      { productId: 1001, productName: 'Batata' },
      { productId: 1002, productName: 'Cebola' },
      { productId: 1003, productName: 'Alface' },
      { productId: 1004, productName: 'Tomate' },
      { productId: 1005, productName: 'Morango' },
      { productId: 1006, productName: 'Kiwi' },
      { productId: 1007, productName: 'Mirtilo' },
      { productId: 1008, productName: 'Uva verde sem caroço' },
      { productId: 1009, productName: 'Pera' },
      { productId: 1010, productName: 'Ameixa' }
    ]
  },
  {
    categoryId: 11,
    categoryName: 'Polpas e Conservas',
    categoryItems: [
      { productId: 1101, productName: 'Polpa de fruta' },
      { productId: 1102, productName: 'Goiabada' },
      { productId: 1103, productName: 'Pasta de amendoim' }
    ]
  },
  {
    categoryId: 12,
    categoryName: 'Doces e Snacks',
    categoryItems: [
      { productId: 1201, productName: 'Brownie' },
      {
        productId: 1202,
        productName: 'Barra de chocolate'
      },
      { productId: 1203, productName: 'Doces' },
      { productId: 1204, productName: 'Salgadinhos' }
    ]
  },
  {
    categoryId: 13,
    categoryName: 'Higiene Pessoal',
    categoryItems: [
      { productId: 1301, productName: 'Sabonete' },
      { productId: 1302, productName: 'Shampoo' },
      { productId: 1303, productName: 'Máscara de hidratação' },
      { productId: 1304, productName: 'Desodorante' },
      { productId: 1305, productName: 'Pasta de dente' },
      { productId: 1306, productName: 'Escova de dentes' }
    ]
  },
  {
    categoryId: 14,
    categoryName: 'Produtos de Limpeza',
    categoryItems: [
      { productId: 1401, productName: 'Desinfetante' },
      { productId: 1402, productName: 'Sabão líquido' },
      { productId: 1403, productName: 'Veja limpeza profunda' },
      { productId: 1404, productName: 'Álcool' },
      { productId: 1405, productName: 'Amaciante' },
      { productId: 1406, productName: 'Sabão em pó' },
      { productId: 1407, productName: 'Esponja' },
      { productId: 1408, productName: 'Outros produtos de limpeza' }
    ]
  },
  {
    categoryId: 15,
    categoryName: 'Utilidades Domésticas',
    categoryItems: [
      { productId: 1501, productName: 'Plástico filme' },
      { productId: 1502, productName: 'Papel laminado' },
      { productId: 1503, productName: 'Papel toalha' },
      { productId: 1504, productName: 'Lâmpada' },
      { productId: 1505, productName: 'Guarda-chuva' },
      { productId: 1506, productName: 'Potes' },
      { productId: 1507, productName: 'Formas' },
      { productId: 1508, productName: 'Talheres' },
      { productId: 1509, productName: 'Isqueiro' }
    ]
  }
]

export { checklistData }
