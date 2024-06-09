const { Item } = require('../models');

const itemData = [
    {
        name: 'Sword',
        description: `A rusty sword but it's better than nothing.`,
    },
    {
        name: 'Shield',
        description: 'A wooden shield with a crack in it.'
    },
];

const seedItems = async () => {
    await Item.bulkCreate(itemData)
};

module.exports = seedItems;