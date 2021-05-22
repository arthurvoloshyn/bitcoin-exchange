const { NODE_ENV } = process.env;

type Environment = { IS_PROD: boolean; IS_DEV: boolean };

const ENV: Environment = {
  IS_PROD: NODE_ENV === 'production',
  IS_DEV: NODE_ENV === 'development',
};

export default ENV;
