const COLORS = {
  blue: '#007DFE',
  blue100: '#E8F3FC',
  red: '#ED1C24',
  black: '#1A1A1A',
  white: '#ffffff',
  grey100: '#F7F6F6',
  grey500: '#ADA6AE',
  grey700: '#615A5A'
}

const dataProducts = [
  {
    id: 1,
    title: 'Rp 5.000',
    note: '',
    status: 1
  },
  {
    id: 2,
    title: 'Rp 10.000',
    note: '',
    status: 1
  },
  {
    id: 3,
    title: 'Rp 25.000',
    note: 'Stok Habis',
    status: 0
  },
  {
    id: 4,
    title: 'Rp 50.000',
    note: '',
    status: 1
  },
  {
    id: 5,
    title: 'Rp 100.000',
    note: '',
    status: 1
  }
];

const dataHome = [
  {
    id: '1',
    thumbnail: 'aeria.png',
    title: 'Aeria Points',
    vouchers: [
      {
        id: '1a',
        product: '5 USD',
        code: 'UNAP5',
        price: '79.200'
      },
      {
        id: '1b',
        product: '15 USD',
        code: 'UNAP5',
        price: '232.650'
      }
    ]
  },
  {
    id: '2',
    thumbnail: 'imvu.png',
    title: 'IMVU',
    vouchers: [
      {
        id: '2a',
        product: 'USD 10',
        code: 'GVIMVU10',
        price: '154.935'
      },
      {
        id: '2b',
        product: 'USD 25',
        code: 'GVIMVU25',
        price: '385.110'
      },
      {
        id: '2c',
        product: 'USD 50',
        code: 'GVIMVU50',
        price: '777.150'
      }
    ]
  },
  {
    id: '3',
    thumbnail: 'karma.png',
    title: 'Karma Koin',
    vouchers: [
      {
        id: '3a',
        product: 'USD 10',
        code: 'UNKK10',
        price: '153.450'
      },
      {
        id: '3b',
        product: 'USD 25',
        code: 'UNKK',
        price: '381.150'
      },
      {
        id: '3c',
        product: 'USD 50',
        code: 'UNKK50',
        price: '762.300'
      },
    ]
  },
  {
    id: '4',
    thumbnail: 'mogplay.png',
    title: 'MOG Play',
    vouchers: [
      {
        id: '4a',
        product: 'MOG Play 20.000',
        code: 'GVMC20',
        price: '21.692'
      },
      {
        id: '4b',
        product: 'MOG Play 50.000',
        code: 'GVMC50',
        price: '54.230'
      },
      {
        id: '4c',
        product: 'MOG Play 100.000',
        code: 'GVMC100',
        price: '108.460'
      },
      {
        id: '4d',
        product: 'MOG Play 200.000',
        code: 'GVMC200',
        price: '216.920'
      },
      {
        id: '4e',
        product: 'MOG Play 500.000',
        code: 'GVMC500',
        price: '542.300'
      }
    ]
  },
  {
    id: '5',
    thumbnail: 'lyto.png',
    title: 'Lyto Games',
    vouchers: [
      {
        id: '5a',
        product: 'Voucher GameOn 15.000',
        code: 'GVLYU15',
        price: '17.892'
      },
      {
        id: '5b',
        product: 'Voucher GameOn 30.000',
        code: 'GVLYU30',
        price: '35.784'
      },
      {
        id: '5c',
        product: 'Voucher GameOn 50.000',
        code: 'GVLYU50',
        price: '59.640'
      },
      {
        id: '5d',
        product: 'Voucher GameOn 100.000',
        code: 'GVLYU100',
        price: '119.280'
      },
      {
        id: '5e',
        product: 'Voucher GameOn 200.000',
        code: 'GVLYU200',
        price: '138.560'
      },
      {
        id: '5f',
        product: 'Voucher GameOn 300.000',
        code: 'GVLYU300',
        price: '357.840'
      },
    ]
  },
  {
    id: '6',
    thumbnail: 'pb.png',
    title: 'Point Blank',
    vouchers: [
      {
        id: '6a',
        product: '12000 PB Cash',
        code: 'GVPB120',
        price: '98.000'
      },
    ]
  },
  {
    id: '7',
    thumbnail: 'megaxus.png',
    title: 'Megaxus',
    vouchers: [
      {
        id: '7a',
        product: 'Mi Cash 10.000',
        code: 'GVMX10',
        price: '9.980'
      },
      {
        id: '7b',
        product: 'Mi Cash 20.000',
        code: 'GVMX20',
        price: '19.960'
      },
      {
        id: '7c',
        product: 'Mi Cash 50.000',
        code: 'GVMX50',
        price: '49.900'
      },
      {
        id: '7d',
        product: 'Mi Cash 550.000',
        code: 'GVMX550',
        price: '499.000'
      },
    ]
  },
  {
    id: '8',
    thumbnail: 'pubg.png',
    title: 'PUBG Steam Key',
    vouchers: [
      {
        id: '8a',
        product: 'PUBG Steam Key',
        code: 'PODPUBG002',
        price: '217.799'
      },
    ]
  },
  {
    id: '9',
    thumbnail: 'battlenet.png',
    title: 'Battlenet',
    vouchers: [
      {
        id: '9a',
        product: 'Battlenet 20 USD',
        code: 'GVBN20',
        price: '366.000'
      },
      {
        id: '9b',
        product: 'Battlenet 50 USD',
        code: 'GVBN50',
        price: '905.362'
      }
    ]
  },
  {
    id: '10',
    thumbnail: 'nintendo.png',
    title: 'Nintendo eShop',
    vouchers: [
      {
        id: '10a',
        product: '10 USD',
        code: 'GVND10',
        price: '172.874'
      },
      {
        id: '10b',
        product: '20 USD',
        code: 'GVND20',
        price: '345.748'
      },
      {
        id: '10c',
        product: '35 USD',
        code: 'GVND35',
        price: '604.022'
      },
      {
        id: '10d',
        product: '50 USD',
        code: 'GVND50',
        price: '860.466'
      }
    ]
  },
  {
    id: '11',
    thumbnail: 'ps.png',
    title: 'Playstation Plus',
    vouchers: [
      {
        id: '11a',
        product: '3 Months Membership',
        code: 'UNPP3',
        price: '250.470'
      },
      {
        id: '11b',
        product: '12 Months Membership',
        code: 'UNPP12',
        price: '613.800'
      },
    ]
  },
  {
    id: '12',
    thumbnail: 'playwith.png',
    title: 'Playwith',
    vouchers: [
      {
        id: '12a',
        product: '500 Rps',
        code: 'GVPW5',
        price: '76.880'
      },
      {
        id: '12b',
        product: '1000 Rps',
        code: 'GVPW10',
        price: '153.760'
      },
      {
        id: '12c',
        product: '2500 Rps',
        code: 'GVPW25',
        price: '384.400'
      },
      {
        id: '12d',
        product: '5000 Rps',
        code: 'GVPW50',
        price: '768.800'
      },
    ]
  },
  {
    id: '13',
    thumbnail: 'psn.png',
    title: 'PSN Card',
    vouchers: [
      {
        id: '13a',
        product: 'PSN Card 100.000',
        code: 'GVPS10',
        price: '113.850'
      },
      {
        id: '13b',
        product: 'PSN Card 200.000',
        code: 'GVPS20',
        price: '227.700'
      },
      {
        id: '13c',
        product: 'PSN Card 400.000',
        code: 'GVPS40',
        price: '455.400'
      }
    ]
  },
  {
    id: '14',
    thumbnail: 'razer.png',
    title: 'Razer Gold',
    vouchers: [
      {
        id: '14a',
        product: 'Razer Gold 10.000',
        code: 'GVMP10',
        price: '9.850'
      },
      {
        id: '14b',
        product: 'Razer Gold 20.000',
        code: 'GVMP20',
        price: '19.700'
      },
      {
        id: '14c',
        product: 'Razer Gold 50.000',
        code: 'GVMP50',
        price: '49.250'
      },
      {
        id: '14d',
        product: 'Razer Gold 100.000',
        code: 'GVMP100',
        price: '98.500'
      },
      {
        id: '14e',
        product: 'Razer Gold 200.000',
        code: 'GVMP200',
        price: '197.000'
      },
      {
        id: '14f',
        product: 'Razer Gold 500.000',
        code: 'GVMP500',
        price: '492.500'
      },
    ]
  },
  {
    id: '15',
    thumbnail: 'steam.png',
    title: 'Steam IDR',
    vouchers: [
      {
        id: '15a',
        product: 'Steam 6.000',
        code: 'GVSM',
        price: '6.835'
      },
      {
        id: '15b',
        product: 'Steam 8.000',
        code: 'GVSM08',
        price: '9.336'
      },
      {
        id: '15c',
        product: 'Steam 12.000',
        code: 'GVSM012',
        price: '14.171'
      },
      {
        id: '15d',
        product: 'Steam 45.000',
        code: 'GVSM12',
        price: '52.509'
      },
      {
        id: '15e',
        product: 'Steam 60.000',
        code: 'GVSM60',
        price: '70.011'
      },
      {
        id: '15f',
        product: 'Steam 90.000',
        code: 'GVSM90',
        price: '105.017'
      },
      {
        id: '15g',
        product: 'Steam 120.000',
        code: 'GVSM120',
        price: '140.022'
      },
      {
        id: '15h',
        product: 'Steam 250.000',
        code: 'GVSM250',
        price: '290.045'
      },
      {
        id: '15i',
        product: 'Steam 400.000',
        code: 'GVSM400',
        price: '475.073'
      },
      {
        id: '15j',
        product: 'Steam 600.000',
        code: 'GVSM600',
        price: '700.108'
      },
    ]
  },
  {
    id: '16',
    thumbnail: 'wave.png',
    title: 'Wavegame',
    vouchers: [
      {
        id: '16a',
        product: 'Wavegame 84 Coins',
        code: 'GVWG84',
        price: '21.780'
      },
      {
        id: '16b',
        product: 'Wavegame 210 Coins',
        code: 'GVWG210',
        price: '54.450'
      },
      {
        id: '16c',
        product: 'Wavegame 435 Coins',
        code: 'GVWG435',
        price: '108.900'
      },
      {
        id: '16d',
        product: 'Wavegame 1.088 Coins',
        code: 'GVWG1.088',
        price: '272.250'
      },
    ]
  },
  {
    id: '17',
    thumbnail: 'unipin.png',
    title: 'UniPin',
    vouchers: [
      {
        id: '17a',
        product: 'Unipin Voucher 10.000',
        code: 'GVUNI10',
        price: '9.900'
      },
    ]
  }
]

export {COLORS, dataHome, dataProducts};