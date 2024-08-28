const subcategoryNames = [
    'PEQUENOS REPAROS',
    'INSTALAÇÕES',
    'DE PISCINA',
    'PINTURA',
    'DE JARDIM',
    'ELÉTRICA',
    'HIDRÁULICA',
    'DE VIDROS'
] as const;

type SubcategoryName = typeof subcategoryNames[number];

const subcategoryMap: Record<SubcategoryName, string> = {
    'PEQUENOS REPAROS': '0c1f45a8-1b61-4de8-bdb7-1030ff090697',
    'INSTALAÇÕES': '2278856e-f524-4d40-9201-dc7bccddfd63',
    'DE PISCINA': '4ca031ac-b16f-426a-8a04-9563640ca44c',
    'PINTURA': '5526395f-67a6-4366-92de-d672eb888d6f',
    'DE JARDIM': '6c0fc205-0e40-4804-9422-88b745835ac0',
    'ELÉTRICA': '728aacc5-0e14-48b0-84df-291367ecb8a4',
    'HIDRÁULICA': '7357286d-e2b1-4700-bec7-11e738bc2e2d',
    'DE VIDROS': 'b9bd33c5-2461-42c8-8cb6-9141e48a3556'
};

export { subcategoryNames, SubcategoryName, subcategoryMap };
