const fs = require('fs-extra')
const path = require('path')
const { getTempRepoPath } = require('../../lib/utils')

const repoToClone = 'https://github.com/GitStartHQ/git-slice.git'

after(async function() {
  const mainRepoPath = getTempRepoPath(repoToClone)
  const setupFolder = path.join(__dirname, '..', 'tmp/setup')

  await fs.remove(mainRepoPath)
  await fs.remove(setupFolder)
})
