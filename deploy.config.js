module.exports = {
  apps: [
    {
      name: "JCWD-0206-050", // Format JCWD-{batchcode}-{groupnumber}
      script: "./projects/server/src/index.js",
      env: {
        NODE_ENV: "production",
        PORT: 8251,
      },
      time: true,
    },
  ],
};
