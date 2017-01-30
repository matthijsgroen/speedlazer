import ScriptSystem from 'app/systems/script_system'

ScriptSystem().register('engine_test', {
  main: [
    { s: 'Scenery', c: 'update', a: ['Intro'] },
    { s: 'Camera', c: 'forceSpeed', a: [20, 0] }
  ]
});

export default function executor(options) {
  return ScriptSystem().execute('engine_test', options)
}
