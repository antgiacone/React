SystemJS.config({
  devConfig: {
    'map': {
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.21',
      'babel-preset-react': 'npm:babel-preset-react@6.24.1',
      'react-addons-test-utils': 'npm:react-addons-test-utils@15.5.1'
    },
    'packages': {
      'npm:react-addons-test-utils@15.5.1': {
        'map': {
          'object-assign': 'npm:object-assign@4.1.1',
          'fbjs': 'npm:fbjs@0.8.12'
        }
      },
      'npm:babel-preset-react@6.24.1': {
        'map': {
          'babel-preset-flow': 'npm:babel-preset-flow@6.23.0',
          'babel-plugin-transform-react-jsx-self': 'npm:babel-plugin-transform-react-jsx-self@6.22.0',
          'babel-plugin-transform-react-display-name': 'npm:babel-plugin-transform-react-display-name@6.23.0',
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.18.0',
          'babel-plugin-transform-react-jsx-source': 'npm:babel-plugin-transform-react-jsx-source@6.22.0',
          'babel-plugin-transform-react-jsx': 'npm:babel-plugin-transform-react-jsx@6.24.1'
        }
      },
      'npm:babel-plugin-transform-react-jsx-self@6.22.0': {
        'map': {
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.18.0',
          'babel-runtime': 'npm:babel-runtime@6.23.0'
        }
      },
      'npm:babel-plugin-transform-react-jsx-source@6.22.0': {
        'map': {
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.18.0',
          'babel-runtime': 'npm:babel-runtime@6.23.0'
        }
      },
      'npm:babel-plugin-transform-react-jsx@6.24.1': {
        'map': {
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.18.0',
          'babel-runtime': 'npm:babel-runtime@6.23.0',
          'babel-helper-builder-react-jsx': 'npm:babel-helper-builder-react-jsx@6.24.1'
        }
      },
      'npm:babel-plugin-transform-react-display-name@6.23.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.23.0'
        }
      },
      'npm:babel-preset-flow@6.23.0': {
        'map': {
          'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.22.0'
        }
      },
      'npm:babel-plugin-transform-flow-strip-types@6.22.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.23.0',
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.18.0'
        }
      },
      'npm:babel-helper-builder-react-jsx@6.24.1': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.23.0',
          'babel-types': 'npm:babel-types@6.24.1',
          'esutils': 'npm:esutils@2.0.2'
        }
      }
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'js'
    }
  },
  transpiler: 'plugin-babel',
  babelOptions: {
    'presets': [
      'babel-preset-react'
    ]
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'axios': 'npm:axios@0.15.3',
    'babel': 'npm:babel-core@6.24.1',
    'babel-polyfill': 'npm:babel-polyfill@6.23.0',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'domain': 'github:jspm/nodelibs-domain@0.2.0-alpha',
    'events': 'github:jspm/nodelibs-events@0.2.2',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'http': 'github:jspm/nodelibs-http@0.2.0-alpha',
    'https': 'github:jspm/nodelibs-https@0.2.0-alpha',
    'material-ui': 'npm:material-ui@0.18.0',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.3',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'react': 'npm:react@15.5.4',
    'react-dom': 'npm:react-dom@15.5.4',
    'react-morph-material-icons': 'github:friktor/react-material-icons@master',
    'react-router': 'npm:react-router@3.0.5',
    'react-tap-event-plugin': 'npm:react-tap-event-plugin@2.0.1',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'url': 'github:jspm/nodelibs-url@0.2.0-alpha',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
    'zlib': 'github:jspm/nodelibs-zlib@0.2.0-alpha'
  },
  packages: {
    'npm:babel-polyfill@6.23.0': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.10.5',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'core-js': 'npm:core-js@2.4.1'
      }
    },
    'npm:axios@0.15.3': {
      'map': {
        'follow-redirects': 'npm:follow-redirects@1.0.0'
      }
    },
    'npm:react@15.5.4': {
      'map': {
        'object-assign': 'npm:object-assign@4.1.1',
        'loose-envify': 'npm:loose-envify@1.3.1',
        'prop-types': 'npm:prop-types@15.5.8',
        'fbjs': 'npm:fbjs@0.8.12'
      }
    },
    'npm:react-dom@15.5.4': {
      'map': {
        'object-assign': 'npm:object-assign@4.1.1',
        'loose-envify': 'npm:loose-envify@1.3.1',
        'prop-types': 'npm:prop-types@15.5.8',
        'fbjs': 'npm:fbjs@0.8.12'
      }
    },
    'npm:babel-core@6.24.1': {
      'map': {
        'path-is-absolute': 'npm:path-is-absolute@1.0.1',
        'slash': 'npm:slash@1.0.0',
        'babel-code-frame': 'npm:babel-code-frame@6.22.0',
        'private': 'npm:private@0.1.7',
        'json5': 'npm:json5@0.5.1',
        'babel-template': 'npm:babel-template@6.24.1',
        'convert-source-map': 'npm:convert-source-map@1.5.0',
        'babel-messages': 'npm:babel-messages@6.23.0',
        'babel-helpers': 'npm:babel-helpers@6.24.1',
        'babel-register': 'npm:babel-register@6.24.1',
        'minimatch': 'npm:minimatch@3.0.3',
        'babel-generator': 'npm:babel-generator@6.24.1',
        'babel-traverse': 'npm:babel-traverse@6.24.1',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'debug': 'npm:debug@2.6.6',
        'babel-types': 'npm:babel-types@6.24.1',
        'source-map': 'npm:source-map@0.5.6',
        'babylon': 'npm:babylon@6.17.0',
        'lodash': 'npm:lodash@4.17.4'
      }
    },
    'npm:react-router@3.0.5': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1',
        'invariant': 'npm:invariant@2.2.2',
        'warning': 'npm:warning@3.0.0',
        'hoist-non-react-statics': 'npm:hoist-non-react-statics@1.2.0',
        'create-react-class': 'npm:create-react-class@15.5.2',
        'prop-types': 'npm:prop-types@15.5.8',
        'history': 'npm:history@3.3.0'
      }
    },
    'npm:invariant@2.2.2': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1'
      }
    },
    'npm:warning@3.0.0': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1'
      }
    },
    'npm:babel-template@6.24.1': {
      'map': {
        'babel-traverse': 'npm:babel-traverse@6.24.1',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'babel-types': 'npm:babel-types@6.24.1',
        'babylon': 'npm:babylon@6.17.0',
        'lodash': 'npm:lodash@4.17.4'
      }
    },
    'npm:create-react-class@15.5.2': {
      'map': {
        'fbjs': 'npm:fbjs@0.8.12',
        'object-assign': 'npm:object-assign@4.1.1'
      }
    },
    'npm:babel-helpers@6.24.1': {
      'map': {
        'babel-template': 'npm:babel-template@6.24.1',
        'babel-runtime': 'npm:babel-runtime@6.23.0'
      }
    },
    'npm:babel-messages@6.23.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.23.0'
      }
    },
    'npm:prop-types@15.5.8': {
      'map': {
        'fbjs': 'npm:fbjs@0.8.12'
      }
    },
    'npm:follow-redirects@1.0.0': {
      'map': {
        'debug': 'npm:debug@2.6.6'
      }
    },
    'npm:babel-register@6.24.1': {
      'map': {
        'babel-core': 'npm:babel-core@6.24.1',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'lodash': 'npm:lodash@4.17.4',
        'core-js': 'npm:core-js@2.4.1',
        'home-or-tmp': 'npm:home-or-tmp@2.0.0',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'source-map-support': 'npm:source-map-support@0.4.15'
      }
    },
    'npm:fbjs@0.8.12': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1',
        'object-assign': 'npm:object-assign@4.1.1',
        'core-js': 'npm:core-js@1.2.7',
        'setimmediate': 'npm:setimmediate@1.0.5',
        'isomorphic-fetch': 'npm:isomorphic-fetch@2.2.1',
        'promise': 'npm:promise@7.1.1',
        'ua-parser-js': 'npm:ua-parser-js@0.7.12'
      }
    },
    'npm:babel-generator@6.24.1': {
      'map': {
        'babel-messages': 'npm:babel-messages@6.23.0',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'babel-types': 'npm:babel-types@6.24.1',
        'source-map': 'npm:source-map@0.5.6',
        'lodash': 'npm:lodash@4.17.4',
        'trim-right': 'npm:trim-right@1.0.1',
        'detect-indent': 'npm:detect-indent@4.0.0',
        'jsesc': 'npm:jsesc@1.3.0'
      }
    },
    'npm:babel-traverse@6.24.1': {
      'map': {
        'babel-code-frame': 'npm:babel-code-frame@6.22.0',
        'babel-messages': 'npm:babel-messages@6.23.0',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'babel-types': 'npm:babel-types@6.24.1',
        'debug': 'npm:debug@2.6.6',
        'invariant': 'npm:invariant@2.2.2',
        'babylon': 'npm:babylon@6.17.0',
        'lodash': 'npm:lodash@4.17.4',
        'globals': 'npm:globals@9.17.0'
      }
    },
    'npm:babel-runtime@6.23.0': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.10.5',
        'core-js': 'npm:core-js@2.4.1'
      }
    },
    'npm:babel-types@6.24.1': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'lodash': 'npm:lodash@4.17.4',
        'esutils': 'npm:esutils@2.0.2',
        'to-fast-properties': 'npm:to-fast-properties@1.0.3'
      }
    },
    'npm:history@3.3.0': {
      'map': {
        'invariant': 'npm:invariant@2.2.2',
        'warning': 'npm:warning@3.0.0',
        'loose-envify': 'npm:loose-envify@1.3.1',
        'query-string': 'npm:query-string@4.3.4'
      }
    },
    'npm:loose-envify@1.3.1': {
      'map': {
        'js-tokens': 'npm:js-tokens@3.0.1'
      }
    },
    'npm:babel-code-frame@6.22.0': {
      'map': {
        'js-tokens': 'npm:js-tokens@3.0.1',
        'esutils': 'npm:esutils@2.0.2',
        'chalk': 'npm:chalk@1.1.3'
      }
    },
    'npm:minimatch@3.0.3': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.7'
      }
    },
    'npm:source-map-support@0.4.15': {
      'map': {
        'source-map': 'npm:source-map@0.5.6'
      }
    },
    'npm:debug@2.6.6': {
      'map': {
        'ms': 'npm:ms@0.7.3'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'has-ansi': 'npm:has-ansi@2.0.0',
        'ansi-styles': 'npm:ansi-styles@2.2.1',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'supports-color': 'npm:supports-color@2.0.0'
      }
    },
    'npm:home-or-tmp@2.0.0': {
      'map': {
        'os-tmpdir': 'npm:os-tmpdir@1.0.2',
        'os-homedir': 'npm:os-homedir@1.0.2'
      }
    },
    'npm:brace-expansion@1.1.7': {
      'map': {
        'concat-map': 'npm:concat-map@0.0.1',
        'balanced-match': 'npm:balanced-match@0.4.2'
      }
    },
    'npm:query-string@4.3.4': {
      'map': {
        'object-assign': 'npm:object-assign@4.1.1',
        'strict-uri-encode': 'npm:strict-uri-encode@1.1.0'
      }
    },
    'npm:detect-indent@4.0.0': {
      'map': {
        'repeating': 'npm:repeating@2.0.1'
      }
    },
    'npm:mkdirp@0.5.1': {
      'map': {
        'minimist': 'npm:minimist@0.0.8'
      }
    },
    'npm:isomorphic-fetch@2.2.1': {
      'map': {
        'whatwg-fetch': 'npm:whatwg-fetch@2.0.3',
        'node-fetch': 'npm:node-fetch@1.6.3'
      }
    },
    'npm:promise@7.1.1': {
      'map': {
        'asap': 'npm:asap@2.0.5'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'npm:repeating@2.0.1': {
      'map': {
        'is-finite': 'npm:is-finite@1.0.2'
      }
    },
    'npm:node-fetch@1.6.3': {
      'map': {
        'is-stream': 'npm:is-stream@1.1.0',
        'encoding': 'npm:encoding@0.1.12'
      }
    },
    'npm:is-finite@1.0.2': {
      'map': {
        'number-is-nan': 'npm:number-is-nan@1.0.1'
      }
    },
    'npm:encoding@0.1.12': {
      'map': {
        'iconv-lite': 'npm:iconv-lite@0.4.17'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.2.9'
      }
    },
    'npm:readable-stream@2.2.9': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'string_decoder': 'npm:string_decoder@1.0.0',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'isarray': 'npm:isarray@1.0.0'
      }
    },
    'npm:string_decoder@1.0.0': {
      'map': {
        'buffer-shims': 'npm:buffer-shims@1.0.0'
      }
    },
    'github:jspm/nodelibs-domain@0.2.0-alpha': {
      'map': {
        'domain-browserify': 'npm:domain-browser@1.1.7'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'ieee754': 'npm:ieee754@1.1.8',
        'base64-js': 'npm:base64-js@1.2.0'
      }
    },
    'github:jspm/nodelibs-url@0.2.0-alpha': {
      'map': {
        'url-browserify': 'npm:url@0.11.0'
      }
    },
    'github:jspm/nodelibs-http@0.2.0-alpha': {
      'map': {
        'http-browserify': 'npm:stream-http@2.7.0'
      }
    },
    'npm:stream-http@2.7.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.2.9',
        'builtin-status-codes': 'npm:builtin-status-codes@3.0.0',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1',
        'xtend': 'npm:xtend@4.0.1'
      }
    },
    'npm:url@0.11.0': {
      'map': {
        'querystring': 'npm:querystring@0.2.0',
        'punycode': 'npm:punycode@1.3.2'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'github:jspm/nodelibs-zlib@0.2.0-alpha': {
      'map': {
        'zlib-browserify': 'npm:browserify-zlib@0.1.4'
      }
    },
    'npm:browserify-zlib@0.1.4': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.2.9',
        'pako': 'npm:pako@0.2.9'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'randombytes': 'npm:randombytes@2.0.3',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'browserify-sign': 'npm:browserify-sign@4.0.4'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'sha.js': 'npm:sha.js@2.4.8'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'miller-rabin': 'npm:miller-rabin@4.0.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:pbkdf2@3.0.9': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:browserify-sign@4.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        'elliptic': 'npm:elliptic@6.4.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:cipher-base@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-des': 'npm:browserify-des@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6'
      }
    },
    'npm:sha.js@2.4.8': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:parse-asn1@5.1.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'create-hash': 'npm:create-hash@1.1.2',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'asn1.js': 'npm:asn1.js@4.9.1'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'elliptic': 'npm:elliptic@6.4.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.1.0'
      }
    },
    'npm:elliptic@6.4.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.1.0',
        'hmac-drbg': 'npm:hmac-drbg@1.0.1',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
        'hash.js': 'npm:hash.js@1.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:asn1.js@4.9.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hmac-drbg@1.0.1': {
      'map': {
        'hash.js': 'npm:hash.js@1.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:material-ui@0.18.0': {
      'map': {
        'prop-types': 'npm:prop-types@15.5.8',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'warning': 'npm:warning@3.0.0',
        'simple-assign': 'npm:simple-assign@0.1.0',
        'lodash.throttle': 'npm:lodash.throttle@4.1.1',
        'lodash.merge': 'npm:lodash.merge@4.6.0',
        'recompose': 'npm:recompose@0.23.1',
        'react-event-listener': 'npm:react-event-listener@0.4.5',
        'react-addons-create-fragment': 'npm:react-addons-create-fragment@15.5.3',
        'react-addons-transition-group': 'npm:react-addons-transition-group@15.4.2',
        'inline-style-prefixer': 'npm:inline-style-prefixer@3.0.2',
        'keycode': 'npm:keycode@2.1.8'
      }
    },
    'npm:react-event-listener@0.4.5': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'warning': 'npm:warning@3.0.0',
        'prop-types': 'npm:prop-types@15.5.8',
        'fbjs': 'npm:fbjs@0.8.12'
      }
    },
    'npm:recompose@0.23.1': {
      'map': {
        'hoist-non-react-statics': 'npm:hoist-non-react-statics@1.2.0',
        'fbjs': 'npm:fbjs@0.8.12',
        'symbol-observable': 'npm:symbol-observable@1.0.4',
        'change-emitter': 'npm:change-emitter@0.1.6'
      }
    },
    'npm:react-tap-event-plugin@2.0.1': {
      'map': {
        'fbjs': 'npm:fbjs@0.8.12'
      }
    },
    'npm:react-addons-create-fragment@15.5.3': {
      'map': {
        'fbjs': 'npm:fbjs@0.8.12',
        'object-assign': 'npm:object-assign@4.1.1'
      }
    },
    'npm:react-addons-transition-group@15.4.2': {
      'map': {
        'fbjs': 'npm:fbjs@0.8.12',
        'object-assign': 'npm:object-assign@4.1.1'
      }
    },
    'npm:inline-style-prefixer@3.0.2': {
      'map': {
        'css-in-js-utils': 'npm:css-in-js-utils@1.0.3',
        'bowser': 'npm:bowser@1.6.1'
      }
    },
    'npm:css-in-js-utils@1.0.3': {
      'map': {
        'hyphenate-style-name': 'npm:hyphenate-style-name@1.0.2'
      }
    }
  }
});
