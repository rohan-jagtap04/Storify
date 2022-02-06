import Commerce from '@chec/commerce.js';

export const commerce = new Commerce('pk_test_395183ffb823c5650f0a986abdcc66c303ad9be39aad3', true, {
    axiosConfig: {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  })