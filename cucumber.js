const common = `
  --require runner/hooks.js 
  --require runner/assertions.js 
  --require step-definitions/steps-login.js
  --require step-definitions/steps-message.js
  --require config/config.js
  `;

module.exports = {
    default: `${common} 
  
  features/login.feature
  features/message.feature
  
  `
};
