module.exports = api => {
  api.cache(() => process.env.NODE_ENV);
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      'lodash',
      'date-fns',
      '@babel/plugin-transform-proto-to-assign',
      '@babel/plugin-transform-runtime',
      'react-hot-loader/babel',
      'transform-dev',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-json-strings',
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-throw-expressions',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-logical-assignment-operators',
      '@babel/plugin-proposal-optional-chaining',
      [
        '@babel/plugin-proposal-pipeline-operator',
        {
          proposal: 'minimal'
        }
      ],
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-do-expressions'
    ]
  };
};
