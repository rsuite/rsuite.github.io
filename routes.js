
const componentMenu = require('./src/components/menu');
const components = [];
componentMenu.forEach(item => {
    components.push(...item.components.map(c => c.id));
});

console.log(components);


const routes = [
    'getting-started',
    'examples',
    'components'
];

components.forEach(item => {
    routes.push(`components/${item}`);
});

module.exports = routes;
