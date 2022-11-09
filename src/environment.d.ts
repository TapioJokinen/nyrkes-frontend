declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        REACT_APP_API_VERSION_V1: string;
        REACT_APP_BASE_URL: string;
        REACT_APP_REQUEST_CREDENTIALS: 'include' | 'same-origin'
      }
    }
  }

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
