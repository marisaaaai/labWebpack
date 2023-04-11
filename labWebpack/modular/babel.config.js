{
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "chrome": "80",
            "ie": "11"
          }
        }
      ]
    ],
    "plugins": [
      "@babel/plugin-transform-runtime",
      "@babel/plugin-transform-arrow-functions",
      "@babel/plugin-proposal-class-properties"
    ]
  }