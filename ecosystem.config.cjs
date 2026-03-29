module.exports = {
  apps: [
    {
      name: 'bugaev-web',
      script: '.output/server/index.mjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        // NUXT_SMTP_USER, NUXT_SMTP_PASS, NUXT_SMTP_TO задаются в .env на сервере
      },
      // Авто-перезапуск при крэше
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      // Ротация логов
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: 'logs/error.log',
      out_file: 'logs/out.log',
      merge_logs: true,
    },
  ],
}
