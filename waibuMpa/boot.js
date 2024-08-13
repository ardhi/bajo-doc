async function boot (ctx) {
  const { eachPlugins } = this.app.bajo
  const me = this
  await eachPlugins(async function ({ file, ns, alias }) {
    const doc = { file, ns, alias }
    me.docs.push(doc)
  }, { glob: '*.*', prefix: this.config.prefix })
}

export default boot
