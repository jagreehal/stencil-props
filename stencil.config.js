exports.config = {
  namespace: 'stencilprops',
  generateDistribution: true,
  generateWWW: true,
  bundles: [{ components: ['stencil-props'] }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
