/**
 * deploy.js — pushes the built dist/ folder to the gh-pages branch.
 *
 * Why a custom script instead of the gh-pages package?
 * The gh-pages package passes every filename as a CLI argument to `git rm`,
 * which exceeds Windows's command-line length limit when the project has
 * many large image files (ENAMETOOLONG error).
 *
 * This script creates a fresh, temporary git repo inside dist/ and
 * force-pushes it directly to the gh-pages branch, then cleans up.
 */

import { execSync } from 'child_process'
import { rmSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.resolve(__dirname, '../dist')
const REMOTE = 'https://github.com/netheriteREX/project-cherish.git'

const run = (cmd) => execSync(cmd, { cwd: dist, stdio: 'inherit' })

console.log('Deploying dist/ to gh-pages branch...')

run('git init')
run('git add .')
run('git commit -m "Deploy"')
run(`git push -f ${REMOTE} HEAD:gh-pages`)

// Remove the temporary .git folder so dist/ stays clean
rmSync(path.join(dist, '.git'), { recursive: true, force: true })

console.log('Done. Site is live at https://netheriterex.github.io/project-cherish/')
