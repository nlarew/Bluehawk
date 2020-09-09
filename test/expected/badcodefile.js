module.exports.output = 
{
   start: [
     'Realm.Sync.setLogLevel("error");\n',
     '\n',
     'let realm;\n',
     'async function openRealm() {\n',
     '  const config = {\n',
     '    schema: [schemas.TaskSchema, schemas.UserSchema, schemas.ProjectSchema],\n',
     '    sync: {\n',
     '      \n',
     '\n',
     ' \n',
     '      // I should trigger an error',
     '    }\n',
     '   }\n',
     '}\n',
     '\n',
   ],
   final: [
     'Realm.Sync.setLogLevel("error");\n',
     '\n',
     'let realm;\n',
     'async function openRealm() {\n',
     '  const config = {\n',
     '    schema: [schemas.TaskSchema, schemas.UserSchema, schemas.ProjectSchema],\n',
     '    sync: {\n',
     '      \n',
     '      // I should trigger an error',
     '      notInStartCode: true,\n',
     '      inFinalCode: true,\n',
     '\n',
     '      // I should trigger a warning',
     '      notInStartCode: true,\n',
     '      inFinalCode: true,\n',
     ' \n',
     '      // I should trigger an error',
     '      notInStartCode: true,\n',
     '      inFinalCode: true,\n',
     '\n',
     '    }\n',
     '   }\n',
     '}\n',
   ]
 }