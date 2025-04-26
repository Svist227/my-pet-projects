import postcssPxToRem from 'postcss-pxtorem'
import postcssPresetEnv from 'postcss-preset-env' /* Новый код */

export default ({ env }) => {
  const isProd = env === 'production'
  const plugins = []

  if (isProd) {
    plugins.push(
      postcssPxToRem({
        propList: ['*'],
        mediaQuery: true,
      })
    )

    /* Новый код: */
    plugins.push(
      postcssPresetEnv()
    )
  }

  return {
    plugins,
  }
}