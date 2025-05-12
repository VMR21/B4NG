import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});


// index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>B4NG Supreme</title>
    <link rel="icon" type="image/png" href="/logo.png" />
  </head>
  <body class="bg-black">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
