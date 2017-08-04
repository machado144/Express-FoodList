const envConfig = () => {
  let envName = process.env.ENV;
  if (typeof(envName) === 'undefined')
    envName = '';
  return envName
}

module.exports = envConfig;
