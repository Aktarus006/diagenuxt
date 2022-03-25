module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '09a6d0608e0aef3423bd1f0f84c3763c'),
  },
});
